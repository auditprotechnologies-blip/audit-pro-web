import { createFileRoute } from "@tanstack/react-router";
import { Users, MessageSquare, Calendar, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function Dashboard() {
  const [userCount, setUserCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [forumCount, setForumCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [recentMessages, setRecentMessages] = useState<Array<{
    id: string;
    text: string;
    time: string;
  }>>([]);

  useEffect(() => {
    async function fetchCounts() {
      const [users, messages, forums, bookings] = await Promise.all([
        supabase.from("users").select("*", { count: "exact", head: true }),
        supabase.from("messages").select("*", { count: "exact", head: true }),
        supabase.from("forums").select("*", { count: "exact", head: true }),
        supabase.from("bookings").select("*", { count: "exact", head: true }),
      ]);
      setUserCount(users.count ?? 0);
      setMessageCount(messages.count ?? 0);
      setForumCount(forums.count ?? 0);
      setBookingCount(bookings.count ?? 0);
    }

    async function fetchRecent() {
      const { data } = await supabase
        .from("messages")
        .select("id, name, subject, created_at")
        .order("created_at", { ascending: false })
        .limit(5);
      if (data) {
        setRecentMessages(
          data.map((m) => ({
            id: m.id,
            text: `New message from ${m.name || "Unknown"}: ${m.subject || ""}`,
            time: m.created_at ? timeAgo(new Date(m.created_at)) : "Just now",
          }))
        );
      }
    }

    fetchCounts();
    fetchRecent();

    const channel = supabase
      .channel("dashboard-changes")
      .on("postgres_changes", { event: "*", schema: "public", table: "messages" }, () => {
        fetchCounts();
        fetchRecent();
      })
      .on("postgres_changes", { event: "*", schema: "public", table: "users" }, () => fetchCounts())
      .on("postgres_changes", { event: "*", schema: "public", table: "forums" }, () => fetchCounts())
      .on("postgres_changes", { event: "*", schema: "public", table: "bookings" }, () => fetchCounts())
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const stats = [
    { title: "Users", value: userCount, icon: Users, color: "text-blue-500", href: "/users" },
    { title: "Messages", value: messageCount, icon: MessageSquare, color: "text-green-500", href: "/messages" },
    { title: "Forum Posts", value: forumCount, icon: MessageCircle, color: "text-purple-500", href: "/forums" },
    { title: "Bookings", value: bookingCount, icon: Calendar, color: "text-orange-500", href: "/bookings" },
  ];

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
          </CardHeader>
          <CardContent>
            {recentMessages.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">No messages yet.</p>
            ) : (
              <div className="space-y-4">
                {recentMessages.map((m) => (
                  <div key={m.id} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{m.text}</p>
                      <p className="text-xs text-muted-foreground">{m.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button asChild className="w-full justify-start">
              <Link to="/messages">View Messages</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/bookings">View Bookings</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link to="/users">Manage Users</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function timeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  if (seconds < 60) return "Just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}