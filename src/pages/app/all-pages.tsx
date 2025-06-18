"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import LandingPage from "./landing";
import LoginPage from "./login";
import SignupPage from "./signup";
import ForgotPasswordPage from "./forgot-password";
import AccountVerificationPage from "./account-verification";
import Dashboard from "./dashboard";
import UsersPage from "./users";
import RulesPage from "./rules";
import ServersPage from "./servers";
import ConnectServerPage from "./connect-serve";
import HistoryPage from "./history";
import PlansPage from "./plans";
import CheckoutPage from "./checkout";
import ReportsPage from "./reports";
import UserProfilePage from "./profile";
import SettingsPage from "./settings";
import {
  ConfirmDeleteAccountModal,
  BanUserModal,
  EditRuleModal,
  ManageRolesModal,
  ServerSettingsModal,
  SendMessageModal,
  ExportDataModal,
  ConfirmLogoutModal,
  PaymentSuccessModal,
} from "@/components/modals";

export default function AllPagesShowcase() {
  const pages = [
    {
      name: "Landing Page",
      component: <LandingPage />,
      description: "Página inicial do site com apresentação do produto",
      category: "Marketing",
    },
    {
      name: "Login Page",
      component: <LoginPage />,
      description: "Página de login tradicional",
      category: "Autenticação",
    },
    {
      name: "Signup Page",
      component: <SignupPage />,
      description: "Página de cadastro de novos usuários",
      category: "Autenticação",
    },
    {
      name: "Forgot Password",
      component: <ForgotPasswordPage />,
      description: "Página para recuperação de senha",
      category: "Autenticação",
    },
    {
      name: "Account Verification",
      component: <AccountVerificationPage />,
      description: "Página de verificação de conta",
      category: "Autenticação",
    },
    {
      name: "Dashboard",
      component: <Dashboard />,
      description: "Painel principal com métricas e visão geral",
      category: "Principal",
    },
    {
      name: "Users Management",
      component: <UsersPage />,
      description: "Gerenciamento de usuários conectados",
      category: "Gerenciamento",
    },
    {
      name: "Access Rules",
      component: <RulesPage />,
      description: "Configuração de regras de acesso automáticas",
      category: "Gerenciamento",
    },
    {
      name: "Servers Management",
      component: <ServersPage />,
      description: "Gerenciamento de servidores Discord",
      category: "Gerenciamento",
    },
    {
      name: "Connect Server",
      component: <ConnectServerPage />,
      description: "Página para conectar novos servidores",
      category: "Gerenciamento",
    },
    {
      name: "Activity History",
      component: <HistoryPage />,
      description: "Histórico de ações e logs do sistema",
      category: "Principal",
    },
    {
      name: "Plans & Pricing",
      component: <PlansPage />,
      description: "Página de planos e preços",
      category: "Financeiro",
    },
    {
      name: "Checkout",
      component: <CheckoutPage />,
      description: "Página de finalização de compra",
      category: "Financeiro",
    },
    {
      name: "Reports",
      component: <ReportsPage />,
      description: "Relatórios financeiros e de performance",
      category: "Financeiro",
    },
    {
      name: "User Profile",
      component: <UserProfilePage />,
      description: "Perfil do usuário e configurações pessoais",
      category: "Configurações",
    },
    {
      name: "Settings",
      component: <SettingsPage />,
      description: "Configurações gerais do sistema",
      category: "Configurações",
    },
    {
      name: "Confirm Delete Account Modal",
      component: (
        <ConfirmDeleteAccountModal open={false} onOpenChange={() => {}} />
      ),
      description: "Modal de confirmação para exclusão de conta",
      category: "Modais",
    },
    {
      name: "Ban User Modal",
      component: (
        <BanUserModal
          open={false}
          onOpenChange={() => {}}
          user={{
            username: "joao_silva",
            name: "João Silva",
            avatar: "/placeholder.svg?height=40&width=40",
          }}
        />
      ),
      description: "Modal para banir usuários",
      category: "Modais",
    },
    {
      name: "Edit Rule Modal",
      component: (
        <EditRuleModal
          open={false}
          onOpenChange={() => {}}
          rule={{
            id: "1",
            name: "Acesso Premium",
            description: "Usuários com plano premium",
            server: "Comunidade Tech",
            trigger: "Entrou no servidor",
            role: "Membro Premium",
            status: "Ativo",
          }}
        />
      ),
      description: "Modal para editar regras de acesso",
      category: "Modais",
    },
    {
      name: "Manage Roles Modal",
      component: (
        <ManageRolesModal
          open={false}
          onOpenChange={() => {}}
          user={{
            avatar: "1",
            name: "João Silva",
            username: "joao@email.com",
          }}
        />
      ),
      description: "Modal para gerenciar cargos de usuários",
      category: "Modais",
    },
    {
      name: "Server Settings Modal",
      component: (
        <ServerSettingsModal
          open={false}
          onOpenChange={() => {}}
          server={{
            id: "123456789",
            name: "Servidor de Teste",
            avatar: "/placeholder.svg?height=40&width=40",
            members: 150,
          }}
        />
      ),
      description: "Modal de configurações do servidor",
      category: "Modais",
    },
    {
      name: "Send Message Modal",
      component: (
        <SendMessageModal
          open={false}
          onOpenChange={() => {}}
          user={{
            username: "joao_silva",
            name: "João Silva",
            avatar: "/placeholder.svg?height=40&width=40",
          }}
        />
      ),
      description: "Modal para enviar mensagens",
      category: "Modais",
    },
    {
      name: "Export Data Modal",
      component: (
        <ExportDataModal open={false} onOpenChange={() => {}} type="users" />
      ),
      description: "Modal para exportar dados",
      category: "Modais",
    },
    {
      name: "Confirm Logout Modal",
      component: <ConfirmLogoutModal open={false} onOpenChange={() => {}} />,
      description: "Modal de confirmação de logout",
      category: "Modais",
    },
    {
      name: "Payment Success Modal",
      component: (
        <PaymentSuccessModal
          open={false}
          onOpenChange={() => {}}
          payment={{
            id: "123456789",
            amount: "100.00",
            plan: "Premium",
            date: "2023-01-01",
          }}
        />
      ),
      description: "Modal de confirmação de pagamento",
      category: "Modais",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Marketing: "bg-green-100 text-green-800",
      Autenticação: "bg-blue-100 text-blue-800",
      Principal: "bg-purple-100 text-purple-800",
      Gerenciamento: "bg-orange-100 text-orange-800",
      Financeiro: "bg-yellow-100 text-yellow-800",
      Configurações: "bg-gray-100 text-gray-800",
      Modais: "bg-pink-100 text-pink-800",
    };
    return (
      colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      <main className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-white">
              📋 Showcase de Todas as Páginas
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-slate-300">
              Visualização completa de todas as páginas do projeto GroupSync.
              Total de{" "}
              <Badge variant="outline" className="border-white/30 text-white">
                {pages.length} páginas
              </Badge>{" "}
              organizadas por categoria.
            </p>
          </div>

          {/* Pages Showcase */}
          <div className="space-y-12">
            {pages.map((page, index) => (
              <div key={page.name} className="space-y-4">
                {/* Page Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-white">
                        {String(index + 1).padStart(2, "0")}. {page.name}
                      </h2>
                      <Badge className={getCategoryColor(page.category)}>
                        {page.category}
                      </Badge>
                    </div>
                    <p className="text-slate-300">{page.description}</p>
                  </div>
                </div>

                {/* Page Content */}
                <Card className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-white">
                      🖥️ Preview da Página
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="overflow-hidden rounded-lg shadow-2xl">
                      <div className="h-auto w-[111.11%] origin-top-left scale-90 transform">
                        {page.component}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Separator */}
                {index < pages.length - 1 && (
                  <div className="py-8">
                    <Separator className="bg-white/20" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="space-y-4 py-12 text-center">
            <h3 className="text-2xl font-bold text-white">
              🎉 Fim do Showcase
            </h3>
            <p className="text-slate-300">
              Todas as {pages.length} páginas do projeto GroupSync foram
              exibidas com sucesso!
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Marketing",
                "Autenticação",
                "Principal",
                "Gerenciamento",
                "Financeiro",
                "Configurações",
                "Modais",
              ].map((category) => (
                <Badge key={category} className={getCategoryColor(category)}>
                  {category}:{" "}
                  {pages.filter((p) => p.category === category).length} páginas
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
