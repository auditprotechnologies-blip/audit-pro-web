"use client";

import * as React from "react";
import * as SidebarPrimitive from "@radix-ui/react-sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";

const Sidebar = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Root> & { side?: "left" | "right" }
>(({ side = "left", className, children, ...props }, ref) => (
  <SidebarPrimitive.Root
    ref={ref}
    className={cn(
      "fixed top-0 z-50 flex h-svh w-[--sidebar-width] flex-col gap-2 bg-sidebar transition-[width,height] duration-200 ease-linear",
      side === "left" ? "left-0" : "right-0",
      className
    )}
    style={{
      "--sidebar-width": SIDEBAR_WIDTH,
      ...props.style,
    } as React.CSSProperties}
    {...props}
  >
    <SidebarPrimitive.Trigger />
    <style dangerouslySetInnerHTML={{
      __html: `
        @media (max-width: 768px) {
          :root {
            --sidebar-width: ${SIDEBAR_WIDTH_MOBILE};
          }
          [data-sidebar="sidebar"][data-state="collapsed"] {
            --sidebar-width: ${SIDEBAR_WIDTH_ICON};
          }
        }
      `,
    }} />
    {children}
  </SidebarPrimitive.Root>
));
Sidebar.displayName = SidebarPrimitive.Root.displayName;

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Trigger>
>(({ ...props }, ref) => (
  <SidebarPrimitive.Trigger ref={ref} {...props} />
));
SidebarTrigger.displayName = SidebarPrimitive.Trigger.displayName;

const SidebarRail = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Rail>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Rail>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Rail
    ref={ref}
    className={cn(
      "relative flex h-full w-[3px] items-center justify-center bg-sidebar-border",
      className
    )}
    {...props}
  />
));
SidebarRail.displayName = SidebarPrimitive.Rail.displayName;

const SidebarInset = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Inset>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Inset>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Inset
    ref={ref}
    className={cn("flex flex-1 overflow-hidden bg-background", className)}
    {...props}
  />
));
SidebarInset.displayName = SidebarPrimitive.Inset.displayName;

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Input>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Input
    ref={ref}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
SidebarInput.displayName = SidebarPrimitive.Input.displayName;

const SidebarHeader = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Header>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Header>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Header
    ref={ref}
    className={cn("flex shrink-0 items-center gap-2 overflow-hidden p-2", className)}
    {...props}
  />
));
SidebarHeader.displayName = SidebarPrimitive.Header.displayName;

const SidebarFooter = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Footer>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Footer>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Footer
    ref={ref}
    className={cn("flex shrink-0 items-center gap-2 overflow-hidden p-2", className)}
    {...props}
  />
));
SidebarFooter.displayName = SidebarPrimitive.Footer.displayName;

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Separator
    ref={ref}
    className={cn("mx-2 w-auto h-px bg-sidebar-border", className)}
    {...props}
  />
));
SidebarSeparator.displayName = SidebarPrimitive.Separator.displayName;

const SidebarContent = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Content>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Content
    ref={ref}
    className={cn("flex flex-1 overflow-y-auto gap-2", className)}
    {...props}
  />
));
SidebarContent.displayName = SidebarPrimitive.Content.displayName;

const SidebarGroup = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Group>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Group ref={ref} className={cn("flex flex-col gap-2", className)} {...props} />
));
SidebarGroup.displayName = SidebarPrimitive.Group.displayName;

const SidebarGroupLabel = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.GroupLabel>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.GroupLabel>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.GroupLabel
    ref={ref}
    className={cn("flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa]", className)}
    {...props}
  />
));
SidebarGroupLabel.displayName = SidebarPrimitive.GroupLabel.displayName;

const SidebarGroupContent = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.GroupContent>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.GroupContent>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.GroupContent ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
SidebarGroupContent.displayName = SidebarPrimitive.GroupContent.displayName;

const SidebarMenu = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.Menu>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.Menu>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.Menu ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
SidebarMenu.displayName = SidebarPrimitive.Menu.displayName;

const SidebarMenuItem = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.MenuItem>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.MenuItem>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.MenuItem ref={ref} className={cn("", className)} {...props} />
));
SidebarMenuItem.displayName = SidebarPrimitive.MenuItem.displayName;

const SidebarMenuSub = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.MenuSub>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.MenuSub>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.MenuSub ref={ref} className={cn("flex flex-col gap-1", className)} {...props} />
));
SidebarMenuSub.displayName = SidebarPrimitive.MenuSub.displayName;

const SidebarMenuSubItem = SidebarPrimitive.MenuSubItem;

const SidebarMenuSubButton = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.MenuSubButton>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.MenuSubButton> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? SidebarPrimitive.MenuSubButton : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex w-full items-center gap-2 overflow-hidden rounded-md px-2 py-1.5 text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = SidebarPrimitive.MenuSubButton.displayName;

const SidebarMenuButton = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.MenuButton>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.MenuButton> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? SidebarPrimitive.MenuButton : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "flex w-full items-center gap-2 overflow-hidden rounded-md px-3 py-2 text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground [&_svg:not([class*='text-'])]:text-sidebar-foreground/70 [&_svg]:size-4 [&_svg]:shrink-0 gap-2 overflow-hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuButton.displayName = SidebarPrimitive.MenuButton.displayName;

const SidebarRailButton = React.forwardRef<
  React.ElementRef<typeof SidebarPrimitive.RailButton>,
  React.ComponentPropsWithoutRef<typeof SidebarPrimitive.RailButton>
>(({ className, ...props }, ref) => (
  <SidebarPrimitive.RailButton
    ref={ref}
    className={cn(
      "flex aspect-square w-full items-center justify-center rounded-sm p-1 text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2",
      className
    )}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
  </SidebarPrimitive.RailButton>
));
SidebarRailButton.displayName = SidebarPrimitive.RailButton.displayName;

export {
  Sidebar,
  SidebarTrigger,
  SidebarRail,
  SidebarInset,
  SidebarInput,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarMenuButton,
  SidebarRailButton,
};