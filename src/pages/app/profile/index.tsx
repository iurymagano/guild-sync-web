"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowLeft,
  User,
  Calendar,
  Shield,
  Crown,
  Activity,
  Ban,
  RefreshCw,
  MessageSquare,
} from "lucide-react";

export default function UserProfilePage() {
  const user = {
    id: "123456789",
    username: "joao_silva",
    displayName: "João Silva",
    discriminator: "1234",
    avatar: "/placeholder.svg?height=80&width=80",
    joinedAt: "15/03/2024",
    lastSeen: "Online",
    status: "active",
    paymentStatus: "paid",
    servers: [
      {
        name: "Comunidade Tech",
        roles: ["@Premium", "@Moderador"],
        joinedAt: "15/03/2024",
      },
      {
        name: "Curso de Programação",
        roles: ["@Estudante"],
        joinedAt: "20/03/2024",
      },
    ],
    recentActivity: [
      {
        type: "role_added",
        message: "Cargo @Premium adicionado",
        server: "Comunidade Tech",
        timestamp: "2024-03-25 14:30:25",
      },
      {
        type: "payment_received",
        message: "Pagamento processado",
        server: "Comunidade Tech",
        timestamp: "2024-03-25 14:25:10",
      },
      {
        type: "joined_server",
        message: "Entrou no servidor",
        server: "Curso de Programação",
        timestamp: "2024-03-20 10:15:33",
      },
    ],
    paymentHistory: [
      {
        id: "pi_1234567890",
        amount: "R$ 29,90",
        status: "paid",
        date: "25/03/2024",
        description: "Plano Premium - Comunidade Tech",
      },
      {
        id: "pi_0987654321",
        amount: "R$ 29,90",
        status: "paid",
        date: "25/02/2024",
        description: "Plano Premium - Comunidade Tech",
      },
    ],
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Ativo
          </Badge>
        );
      case "banned":
        return (
          <Badge className="border-red-500/30 bg-red-500/20 text-red-400">
            Banido
          </Badge>
        );
      default:
        return <Badge variant="outline">Inativo</Badge>;
    }
  };

  const getPaymentBadge = (paymentStatus: string) => {
    switch (paymentStatus) {
      case "paid":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Em Dia
          </Badge>
        );
      case "pending":
        return (
          <Badge className="border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]">
            Pendente
          </Badge>
        );
      case "expired":
        return (
          <Badge className="border-red-500/30 bg-red-500/20 text-red-400">
            Expirado
          </Badge>
        );
      default:
        return <Badge variant="outline">N/A</Badge>;
    }
  };

  const getRoleIcon = (role: string) => {
    if (role.includes("Admin") || role.includes("Moderador")) {
      return <Shield className="h-3 w-3" />;
    }
    if (role.includes("VIP") || role.includes("Premium")) {
      return <Crown className="h-3 w-3" />;
    }
    return <User className="h-3 w-3" />;
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar aos Usuários
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">Perfil do Usuário</h1>
          <p className="text-slate-300">
            Informações detalhadas e histórico de atividades
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* User Info */}
        <div className="space-y-6">
          {/* Basic Info */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-6 text-center">
                <Avatar className="mx-auto mb-4 h-20 w-20">
                  <AvatarImage
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.displayName}
                  />
                  <AvatarFallback className="text-2xl">
                    {user.displayName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.displayName}</h2>
                <p className="text-slate-300">
                  @{user.username}#{user.discriminator}
                </p>
                <div className="mt-3 flex justify-center gap-2">
                  {getStatusBadge(user.status)}
                  {getPaymentBadge(user.paymentStatus)}
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Discord ID:</span>
                  <span>{user.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Cadastrado em:</span>
                  <span>{user.joinedAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Último acesso:</span>
                  <span className="text-[#57F287]">{user.lastSeen}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Ações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-[#5865F2] text-white hover:bg-[#4752C4]">
                <MessageSquare className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Sincronizar Dados
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <Ban className="mr-2 h-4 w-4" />
                Banir Usuário
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Servers */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Servidores Conectados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.servers.map((server, index) => (
                <div key={index} className="rounded-lg bg-white/5 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="font-semibold">{server.name}</h3>
                    <span className="text-sm text-slate-400">
                      Entrou em {server.joinedAt}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {server.roles.map((role, roleIndex) => (
                      <Badge
                        key={roleIndex}
                        variant="outline"
                        className="border-[#5865F2]/30 text-[#5865F2]"
                      >
                        {getRoleIcon(role)}
                        <span className="ml-1">{role}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Atividade Recente
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {user.recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg bg-white/5 p-3"
                >
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#57F287]" />
                  <div className="flex-1">
                    <p className="text-sm">{activity.message}</p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-slate-400">
                        {activity.server}
                      </span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-400">
                        {activity.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Histórico de Pagamentos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {user.paymentHistory.map((payment, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-white/5 p-4"
                  >
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-slate-400">ID: {payment.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{payment.amount}</p>
                      <div className="flex items-center gap-2">
                        <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
                          Pago
                        </Badge>
                        <span className="text-sm text-slate-400">
                          {payment.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
