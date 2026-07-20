import { createFileRoute } from "@tanstack/react-router";
import { Search, MessageCircle, Trash2, MoreHorizontal, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export const Route = createFileRoute("/forums")({
  component: ForumsPage,
});

interface ForumPost {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  status: string;
  created_at: string;
}

function ForumsPage() {
  const [forums, setForums] = useState<ForumPost[]>([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  useEffect(() => {
    fetchForums();

    const channel = supabase
      .channel("forums-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "forums" }, () => {
        fetchForums();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function fetchForums() {
    const { data } = await supabase
      .from("forums")
      .select("*")
      .order("created_at", { ascending: false });
    setForums(data || []);
  }

  const filteredForums = forums.filter((forum) => {
    const matchesSearch =
      (forum.title || "").toLowerCase().includes(search.toLowerCase()) ||
      (forum.author || "").toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "all" || (forum.category || "").toLowerCase().replace(" ", "_") === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = async (id: string) => {
    if (confirm("Delete this forum post?")) {
      await supabase.from("forums").delete().eq("id", id);
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Forums</h1>
          <p className="text-muted-foreground">Manage community discussions and forum posts</p>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">All Topics ({filteredForums.length})</CardTitle>
          <div className="flex items-center gap-2">
            <Input placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-64" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="general">General</SelectItem>
                <SelectItem value="feature_requests">Feature Requests</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {filteredForums.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">No forum posts yet.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[40%]">Topic</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-center">Replies</TableHead>
                  <TableHead className="text-center">Views</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredForums.map((forum) => (
                  <TableRow key={forum.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{forum.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {forum.replies || 0} replies · {forum.views || 0} views
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{forum.author}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{forum.category || "General"}</Badge>
                    </TableCell>
                    <TableCell className="text-center">{forum.replies || 0}</TableCell>
                    <TableCell className="text-center">{forum.views || 0}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <MessageCircle className="mr-2 h-4 w-4" />
                            View Discussion
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ArrowUpRight className="mr-2 h-4 w-4" />
                            Pin Topic
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(forum.id)}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}