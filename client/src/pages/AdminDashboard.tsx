import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { FileText, Package, Users, CreditCard, LogOut, Shield } from "lucide-react";
import BlogsManager from "@/components/admin/BlogsManager";
import PackagesManager from "@/components/admin/PackagesManager";
import ContactsManager from "@/components/admin/ContactsManager";
import PaymentsManager from "@/components/admin/PaymentsManager";

type Section = "blogs" | "packages" | "contacts" | "payments";

interface User {
  id: string;
  username: string;
}

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [activeSection, setActiveSection] = useState<Section>("blogs");
  const { toast } = useToast();

  const { data: session, isLoading, error } = useQuery<{ user: User }>({
    queryKey: ["/api/auth/session"],
    retry: false,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return apiRequest("POST", "/api/auth/logout");
    },
    onSuccess: () => {
      toast({ title: "Logged out successfully" });
      setLocation("/admin/login");
    },
    onError: () => {
      toast({
        title: "Logout failed",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (!isLoading && (error || !session)) {
      setLocation("/admin/login");
    }
  }, [isLoading, session, error, setLocation]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-orange/10">
        <div className="text-center space-y-4">
          <Shield className="w-16 h-16 mx-auto text-primary animate-pulse" />
          <p className="text-lg text-muted-foreground">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const menuItems = [
    {
      title: "Blogs",
      icon: FileText,
      section: "blogs" as Section,
    },
    {
      title: "Packages",
      icon: Package,
      section: "packages" as Section,
    },
    {
      title: "Contacts",
      icon: Users,
      section: "contacts" as Section,
    },
    {
      title: "Payments",
      icon: CreditCard,
      section: "payments" as Section,
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case "blogs":
        return <BlogsManager />;
      case "packages":
        return <PackagesManager />;
      case "contacts":
        return <ContactsManager />;
      case "payments":
        return <PaymentsManager />;
      default:
        return <BlogsManager />;
    }
  };

  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <SidebarProvider style={style as React.CSSProperties}>
      <div className="flex h-screen w-full bg-gradient-to-br from-primary/5 via-background to-orange/5">
        <Sidebar>
          <SidebarHeader className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gradient-primary">Mentoria</h2>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Management</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.section}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.section)}
                        isActive={activeSection === item.section}
                        data-testid={`nav-${item.section}`}
                        className="hover-elevate"
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4">
            <div className="space-y-4">
              <div className="px-3 py-2 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Logged in as</p>
                <p className="font-semibold text-foreground">{session.user.username}</p>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => logoutMutation.mutate()}
                disabled={logoutMutation.isPending}
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                {logoutMutation.isPending ? "Logging out..." : "Logout"}
              </Button>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          {renderSection()}
        </main>
      </div>
    </SidebarProvider>
  );
}
