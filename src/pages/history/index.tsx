"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Download,
  RefreshCw,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Calendar,
} from "lucide-react";

export default function HistoryPage() {
  const activities = [
    {
      id: "1",
      type: "role_added",
      status: "success",
      message: "Cargo @Premium adicionado para usuário",
      user: {
        name: "João Silva",
        username: "joao_silva",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      server: "Comunidade Tech",
      rule: "Acesso Premium",
      timestamp: "2024-03-25 14:30:25",
      details: "Pagamento confirmado via Stripe",
    },
    {
      id: "2",
      type: "role_removed",
      status: "success",
      message: "Cargo @VIP removido por expiração",
      user: {
        name: "Maria Dev",
        username: "maria_dev",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      server: "Comunidade Tech",
      rule: "VIP Expirado",
      timestamp: "2024-03-25 14:15:10",
      details: "Assinatura expirada em 24/03/2024",
    },
    {
      id: "3",
      type: "payment_received",
      status: "success",
      message: "Pagamento processado com sucesso",
      user: {
        name: "Carlos Admin",
        username: "carlos_admin",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      server: "Curso de Programação",
      rule: "Estudantes Verificados",
      timestamp: "2024-03-25 13:45:33",
      details: "Valor: R$ 29,90 - Stripe ID: pi_1234567890",
    },
    {
      id: "4",
      type: "error",
      status: "error",
      message: "Falha ao adicionar cargo - Usuário não encontrado",
      user: {
        name: "Usuário Desconhecido",
        username: "unknown_user",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      server: "Comunidade Tech",
      rule: "Acesso Premium",
      timestamp: "2024-03-25 13:20:15",
      details: "Discord ID: 999999999 não encontrado no servidor",
    },
    {
      id: "5",
      type: "rule_triggered",
      status: "warning",
      message: "Regra executada com limitações",
      user: {
        name: "Ana Santos",
        username: "ana_santos",
        avatar: "/placeholder.svg?height=32&width=32",
      },
      server: "Curso de Programação",
      rule: "Estudantes Verificados",
      timestamp: "2024-03-25 12:55:42",
      details: "Usuário já possui o cargo solicitado",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-[#57F287]" />;
      case "error":
        return <XCircle className="h-4 w-4 text-red-400" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-[#FEE75C]" />;
      default:
        return <Info className="h-4 w-4 text-[#00D4FF]" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Sucesso
          </Badge>
        );
      case "error":
        return (
          <Badge className="border-red-500/30 bg-red-500/20 text-red-400">
            Erro
          </Badge>
        );
      case "warning":
        return (
          <Badge className="border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]">
            Aviso
          </Badge>
        );
      default:
        return (
          <Badge className="border-[#00D4FF]/30 bg-[#00D4FF]/20 text-[#00D4FF]">
            Info
          </Badge>
        );
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "role_added":
        return "Cargo Adicionado";
      case "role_removed":
        return "Cargo Removido";
      case "payment_received":
        return "Pagamento Recebido";
      case "rule_triggered":
        return "Regra Executada";
      case "error":
        return "Erro do Sistema";
      default:
        return "Ação Desconhecida";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Histórico de Ações
          </h1>
          <p className="text-slate-300">
            Acompanhe todas as atividades e logs do sistema
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar Logs
          </Button>
          <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
            <RefreshCw className="mr-2 h-4 w-4" />
            Atualizar
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Ações Hoje</p>
                <p className="text-2xl font-bold">76</p>
              </div>
              <CheckCircle className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Sucesso</p>
                <p className="text-2xl font-bold">98%</p>
              </div>
              <CheckCircle className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Erros (24h)</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <XCircle className="h-8 w-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Avisos (24h)</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
                <Input
                  placeholder="Buscar por usuário, ação ou servidor..."
                  className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Período" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mês</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="success">Sucesso</SelectItem>
                <SelectItem value="error">Erro</SelectItem>
                <SelectItem value="warning">Aviso</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="role_added">Cargo Adicionado</SelectItem>
                <SelectItem value="role_removed">Cargo Removido</SelectItem>
                <SelectItem value="payment_received">Pagamento</SelectItem>
                <SelectItem value="error">Erros</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Activity Log */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Log de Atividades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="mt-1 flex-shrink-0">
                  {getStatusIcon(activity.status)}
                </div>

                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="font-semibold">{activity.message}</h3>
                    {getStatusBadge(activity.status)}
                    <Badge
                      variant="outline"
                      className="border-[#00D4FF]/30 text-[#00D4FF]"
                    >
                      {getTypeLabel(activity.type)}
                    </Badge>
                  </div>

                  <div className="mb-2 flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage
                          src={activity.user.avatar || "/placeholder.svg"}
                          alt={activity.user.name}
                        />
                        <AvatarFallback className="text-xs">
                          {activity.user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-slate-300">
                        {activity.user.name} (@{activity.user.username})
                      </span>
                    </div>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-300">
                      {activity.server}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-sm text-slate-300">
                      {activity.rule}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">{activity.details}</p>
                    <span className="text-xs text-slate-500">
                      {activity.timestamp}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-slate-300">
              Mostrando 5 de 1,234 registros
            </p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Anterior
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Próximo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
