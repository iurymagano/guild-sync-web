"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Plus,
  Search,
  Settings,
  Users,
  Activity,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ServersPage() {
  const servers = [
    {
      id: "1",
      name: "Comunidade Tech",
      description: "Servidor principal da comunidade de tecnologia",
      icon: "/placeholder.svg?height=60&width=60",
      members: 1247,
      onlineMembers: 89,
      status: "connected",
      botStatus: "online",
      rulesCount: 5,
      lastActivity: "2 min atrás",
      owner: "João Silva",
      createdAt: "15/01/2024",
    },
    {
      id: "2",
      name: "Curso de Programação",
      description: "Servidor dedicado aos alunos do curso",
      icon: "/placeholder.svg?height=60&width=60",
      members: 456,
      onlineMembers: 23,
      status: "connected",
      botStatus: "online",
      rulesCount: 3,
      lastActivity: "15 min atrás",
      owner: "Maria Santos",
      createdAt: "20/02/2024",
    },
    {
      id: "3",
      name: "Gaming Community",
      description: "Comunidade de jogos e entretenimento",
      icon: "/placeholder.svg?height=60&width=60",
      members: 892,
      onlineMembers: 156,
      status: "warning",
      botStatus: "offline",
      rulesCount: 2,
      lastActivity: "2h atrás",
      owner: "Carlos Admin",
      createdAt: "05/03/2024",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Conectado
          </Badge>
        );
      case "warning":
        return (
          <Badge className="border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]">
            Atenção
          </Badge>
        );
      case "error":
        return (
          <Badge className="border-red-500/30 bg-red-500/20 text-red-400">
            Erro
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const getBotStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="h-4 w-4 text-[#57F287]" />;
      case "offline":
        return <AlertTriangle className="h-4 w-4 text-red-400" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-[#FEE75C]" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Servidores Discord
          </h1>
          <p className="text-slate-300">
            Gerencie todos os servidores conectados à plataforma
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <Plus className="mr-2 h-4 w-4" />
          Conectar Servidor
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Total de Servidores</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <Activity className="h-8 w-8 text-[#5865F2]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Membros Totais</p>
                <p className="text-2xl font-bold">2,595</p>
              </div>
              <Users className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Online Agora</p>
                <p className="text-2xl font-bold">268</p>
              </div>
              <CheckCircle className="h-8 w-8 text-[#00D4FF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Regras Ativas</p>
                <p className="text-2xl font-bold">10</p>
              </div>
              <Activity className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-slate-400" />
            <Input
              placeholder="Buscar servidores..."
              className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-slate-400"
            />
          </div>
        </CardContent>
      </Card>

      {/* Servers List */}
      <div className="grid gap-6">
        {servers.map((server) => (
          <Card
            key={server.id}
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={server.icon || "/placeholder.svg"}
                      alt={server.name}
                    />
                    <AvatarFallback className="text-xl">
                      {server.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="text-xl font-semibold">{server.name}</h3>
                      {getStatusBadge(server.status)}
                      <div className="flex items-center gap-1">
                        {getBotStatusIcon(server.botStatus)}
                        <span className="text-sm text-slate-300">
                          Bot {server.botStatus}
                        </span>
                      </div>
                    </div>
                    <p className="mb-3 text-sm text-slate-300">
                      {server.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                      <div>
                        <span className="text-slate-400">Membros:</span>
                        <span className="ml-2 font-medium">
                          {server.members.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400">Online:</span>
                        <span className="ml-2 font-medium text-[#57F287]">
                          {server.onlineMembers}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400">Regras:</span>
                        <span className="ml-2 font-medium">
                          {server.rulesCount}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400">
                          Última atividade:
                        </span>
                        <span className="ml-2 font-medium">
                          {server.lastActivity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Abrir Discord
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-white/30 text-white hover:bg-white/10"
                      >
                        <Settings className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        Configurações
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        Ver Membros
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Activity className="mr-2 h-4 w-4" />
                        Estatísticas
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <AlertTriangle className="mr-2 h-4 w-4" />
                        Desconectar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Setup */}
      <Card className="border-white/20 bg-gradient-to-r from-[#5865F2]/10 to-[#00D4FF]/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">Configuração Rápida</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <Button
              variant="outline"
              className="h-auto border-white/30 p-4 text-white hover:bg-white/10"
            >
              <div className="text-center">
                <Plus className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Conectar Novo Servidor</div>
                <div className="text-xs text-slate-400">
                  Adicione um servidor Discord
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto border-white/30 p-4 text-white hover:bg-white/10"
            >
              <div className="text-center">
                <Settings className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Configurar Bot</div>
                <div className="text-xs text-slate-400">
                  Configure permissões do bot
                </div>
              </div>
            </Button>

            <Button
              variant="outline"
              className="h-auto border-white/30 p-4 text-white hover:bg-white/10"
            >
              <div className="text-center">
                <Activity className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Criar Regras</div>
                <div className="text-xs text-slate-400">
                  Configure regras automáticas
                </div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
