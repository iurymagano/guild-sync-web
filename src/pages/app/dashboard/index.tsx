import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus,
  Users,
  Shield,
  Activity,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Settings,
} from "lucide-react";

export default function Dashboard() {
  const servers = [
    {
      id: "1",
      name: "Comunidade Tech",
      members: 245,
      status: "connected",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Curso de Programação",
      members: 89,
      status: "connected",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const recentActivity = [
    {
      type: "role_added",
      message: "Cargo 'Premium' adicionado para @usuario123",
      server: "Comunidade Tech",
      time: "2 min atrás",
    },
    {
      type: "payment_received",
      message: "Pagamento recebido de João Silva",
      server: "Curso de Programação",
      time: "15 min atrás",
    },
    {
      type: "rule_triggered",
      message: "Regra 'Acesso VIP' executada com sucesso",
      server: "Comunidade Tech",
      time: "1h atrás",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-slate-300">
            Visão geral dos seus servidores e atividades
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <Plus className="mr-2 h-4 w-4" />
          Conectar Servidor
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Servidores</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5865F2]/20">
                <Shield className="h-6 w-6 text-[#5865F2]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Usuários Ativos</p>
                <p className="text-2xl font-bold">334</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#57F287]/20">
                <Users className="h-6 w-6 text-[#57F287]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Regras Ativas</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#00D4FF]/20">
                <Activity className="h-6 w-6 text-[#00D4FF]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Receita Mensal</p>
                <p className="text-2xl font-bold">R$ 1.2k</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FEE75C]/20">
                <Activity className="h-6 w-6 text-[#FEE75C]" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Account Status */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-[#FEE75C]" />
            Status da Conta
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Verificação da Conta</h4>
              <p className="text-sm text-slate-300">
                Complete a verificação para acessar recursos avançados
              </p>
            </div>
            <Badge
              variant="outline"
              className="border-[#FEE75C] text-[#FEE75C]"
            >
              Pendente
            </Badge>
          </div>
          <Progress value={60} className="h-2" />
          <div className="flex justify-between text-sm text-slate-300">
            <span>3 de 5 etapas concluídas</span>
            <span>60%</span>
          </div>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            Completar Verificação
          </Button>
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Connected Servers */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Servidores Conectados</CardTitle>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <Plus className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {servers.map((server) => (
              <div
                key={server.id}
                className="flex items-center justify-between rounded-lg bg-white/5 p-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={server.avatar || "/placeholder.svg"}
                    alt={server.name}
                    className="h-10 w-10 rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold">{server.name}</h4>
                    <p className="text-sm text-slate-300">
                      {server.members} membros
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
                    <CheckCircle className="mr-1 h-3 w-3" />
                    Conectado
                  </Badge>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Atividade Recente</CardTitle>
            <Button
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Tudo
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
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
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
