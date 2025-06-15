import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Zap,
  Home,
  Settings,
  Users,
  Shield,
  CreditCard,
  History,
  LogOut,
  Bell,
  ChevronDown,
} from "lucide-react";
import { Outlet } from "react-router";

interface LayoutProps {
  currentPage?: string;
}

export function Layout({ currentPage }: LayoutProps) {
  const navigation = [
    {
      name: "Dashboard",
      href: "#",
      icon: Home,
      current: currentPage === "dashboard",
    },
    {
      name: "Regras de Acesso",
      href: "#",
      icon: Shield,
      current: currentPage === "rules",
    },
    {
      name: "Usuários",
      href: "#",
      icon: Users,
      current: currentPage === "users",
    },
    {
      name: "Histórico",
      href: "#",
      icon: History,
      current: currentPage === "history",
    },
    {
      name: "Planos",
      href: "#",
      icon: CreditCard,
      current: currentPage === "plans",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">GuildSync</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden space-x-1 md:flex">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={item.current ? "secondary" : "ghost"}
                  className={`text-white hover:bg-white/20 ${item.current ? "bg-white/20" : ""}`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              ))}
            </nav>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <Bell className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:bg-white/20"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden sm:block">João Silva</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Configurações
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
