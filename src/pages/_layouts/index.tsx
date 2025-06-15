"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Home,
  Settings,
  Users,
  Shield,
  CreditCard,
  LogOut,
  Bell,
  ChevronDown,
  Menu,
  BarChart3,
  UserCog,
  Server,
  HelpCircle,
  FileText,
  Crown,
  Activity,
  Megaphone,
} from "lucide-react";
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = true; // aqui você usa sua lógica real de auth (ex: context, localStorage...)

  const location = useLocation();
  const currentPage = location.pathname.split("/")[1];

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  const navigationSections = [
    {
      title: "Principal",
      items: [
        {
          name: "Dashboard",
          href: "/dashboard",
          icon: Home,
          current: currentPage === "dashboard",
          description: "Visão geral e estatísticas",
        },
        {
          name: "Analytics",
          href: "/analytics",
          icon: BarChart3,
          current: currentPage === "analytics",
          description: "Insights e análises avançadas",
        },
        {
          name: "Atividades",
          href: "/history",
          icon: Activity,
          current: currentPage === "history",
          description: "Histórico de ações e logs",
        },
      ],
    },
    {
      title: "Gerenciamento",
      items: [
        {
          name: "Usuários",
          href: "/users",
          icon: Users,
          current: currentPage === "users",
          description: "Gerenciar usuários conectados",
        },
        {
          name: "Regras de Acesso",
          href: "/rules",
          icon: Shield,
          current: currentPage === "rules",
          description: "Configurar regras automáticas",
        },
        {
          name: "Servidores",
          href: "/servers",
          icon: Server,
          current: currentPage === "servers",
          description: "Gerenciar servidores Discord",
        },
      ],
    },
    {
      title: "Marketing & Automação",
      items: [
        {
          name: "Automações",
          href: "/automations",
          icon: Zap,
          current: currentPage === "automations",
          description: "Workflows automatizados",
        },
        {
          name: "Campanhas",
          href: "/campaigns",
          icon: Megaphone,
          current: currentPage === "campaigns",
          description: "Email marketing e promoções",
        },
      ],
    },
    {
      title: "Financeiro",
      items: [
        {
          name: "Planos",
          href: "/plans",
          icon: CreditCard,
          current: currentPage === "plans",
          description: "Gerenciar assinatura e planos",
        },
        {
          name: "Relatórios",
          href: "/reports",
          icon: BarChart3,
          current: currentPage === "reports",
          description: "Relatórios financeiros",
        },
      ],
    },
  ];

  const quickActions = [
    { name: "Conectar Servidor", href: "/connect-server", icon: Server },
    { name: "Nova Regra", href: "/rules/new", icon: Shield },
    { name: "Verificar Conta", href: "/verification", icon: UserCog },
  ];

  // Get current page info for breadcrumbs
  const getCurrentPageInfo = () => {
    for (const section of navigationSections) {
      const item = section.items.find((item) => item.current);
      if (item) return { section: section.title, page: item.name };
    }
    return { section: "Principal", page: "Dashboard" };
  };

  const currentPageInfo = getCurrentPageInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">GroupSync</h1>
              <Badge
                variant="outline"
                className="border-white/30 text-xs text-white"
              >
                v1.0
              </Badge>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 lg:flex">
              <NavigationMenu>
                <NavigationMenuList className="space-x-1">
                  {navigationSections.map((section) => (
                    <NavigationMenuItem key={section.title}>
                      <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20 data-[state=open]:bg-white/20">
                        {section.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-80 p-4">
                          <div className="grid gap-3">
                            {section.items.map((item) => (
                              <NavigationMenuLink key={item.name} asChild>
                                <a
                                  href={item.href}
                                  className={`flex flex-row items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-100 ${
                                    item.current
                                      ? "border border-[#5865F2]/20 bg-[#5865F2]/10"
                                      : ""
                                  }`}
                                >
                                  <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                                      item.current
                                        ? "bg-[#5865F2]/20"
                                        : "bg-slate-100"
                                    }`}
                                  >
                                    <item.icon
                                      className={`h-5 w-5 ${item.current ? "text-[#5865F2]" : "text-slate-600"}`}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      className={`font-medium ${item.current ? "text-[#5865F2]" : "text-slate-900"}`}
                                    >
                                      {item.name}
                                    </div>
                                    <div className="text-sm text-slate-500">
                                      {item.description}
                                    </div>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Quick Actions */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/20"
                  >
                    <Crown className="mr-2 h-4 w-4" />
                    Ações Rápidas
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Ações Rápidas</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {quickActions.map((action) => (
                    <DropdownMenuItem key={action.name}>
                      <action.icon className="mr-2 h-4 w-4" />
                      {action.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="left"
                  className="w-80 border-white/20 bg-slate-900 text-white"
                >
                  <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white">GroupSync</h1>
                  </div>

                  <div className="space-y-6">
                    {navigationSections.map((section) => (
                      <div key={section.title}>
                        <h3 className="mb-3 font-semibold text-slate-300">
                          {section.title}
                        </h3>
                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={`flex items-center gap-3 rounded-lg p-3 transition-colors ${
                                item.current
                                  ? "bg-[#5865F2]/20 text-[#5865F2]"
                                  : "text-white hover:bg-white/10"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <item.icon className="h-5 w-5" />
                              <div>
                                <div className="font-medium">{item.name}</div>
                                <div className="text-xs text-slate-400">
                                  {item.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white hover:bg-white/20"
              >
                <Bell className="h-5 w-5" />
                <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></div>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white hover:bg-white/20"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="hidden text-left sm:block">
                      <div className="text-sm font-medium">João Silva</div>
                      <div className="text-xs text-slate-300">
                        Plano Gratuito
                      </div>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <UserCog className="mr-2 h-4 w-4" />
                      Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      Cobrança
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <FileText className="mr-2 h-4 w-4" />
                      Documentação
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Suporte
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
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

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm">
          <a
            href="/dashboard"
            className="text-slate-400 transition-colors hover:text-white"
          >
            Dashboard
          </a>
          <span className="text-slate-500">/</span>
          <span className="text-slate-300">{currentPageInfo.section}</span>
          <span className="text-slate-500">/</span>
          <span className="font-medium text-white">{currentPageInfo.page}</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
