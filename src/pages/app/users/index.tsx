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
  MoreHorizontal,
  Shield,
  Crown,
  User,
  Ban,
  RefreshCw,
  Download,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UsersPage() {
  const users = [
    {
      id: "1",
      discordId: "123456789",
      username: "joao_silva",
      displayName: "João Silva",
      avatar: "/placeholder.svg?height=40&width=40",
      server: "Comunidade Tech",
      roles: ["@Premium", "@Moderador"],
      status: "active",
      joinedAt: "15/03/2024",
      lastSeen: "Online",
      paymentStatus: "paid",
    },
    {
      id: "2",
      discordId: "987654321",
      username: "maria_dev",
      displayName: "Maria Desenvolvedora",
      avatar: "/placeholder.svg?height=40&width=40",
      server: "Curso de Programação",
      roles: ["@Estudante"],
      status: "active",
      joinedAt: "20/03/2024",
      lastSeen: "2h atrás",
      paymentStatus: "pending",
    },
    {
      id: "3",
      discordId: "456789123",
      username: "carlos_admin",
      displayName: "Carlos Admin",
      avatar: "/placeholder.svg?height=40&width=40",
      server: "Comunidade Tech",
      roles: ["@VIP", "@Admin"],
      status: "banned",
      joinedAt: "10/03/2024",
      lastSeen: "1 semana atrás",
      paymentStatus: "expired",
    },
  ];

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
      case "inactive":
        return (
          <Badge className="border-slate-500/30 bg-slate-500/20 text-slate-400">
            Inativo
          </Badge>
        );
      default:
        return <Badge variant="outline">Desconhecido</Badge>;
    }
  };

  const getPaymentBadge = (paymentStatus: string) => {
    switch (paymentStatus) {
      case "paid":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Pago
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Usuários Vinculados
          </h1>
          <p className="text-slate-300">
            Gerencie todos os usuários conectados aos seus servidores
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
          <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
            <RefreshCw className="mr-2 h-4 w-4" />
            Sincronizar
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Total de Usuários</p>
                <p className="text-2xl font-bold">334</p>
              </div>
              <User className="h-8 w-8 text-[#5865F2]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Usuários Ativos</p>
                <p className="text-2xl font-bold">298</p>
              </div>
              <Shield className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Pagamentos Ativos</p>
                <p className="text-2xl font-bold">156</p>
              </div>
              <Crown className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Novos (30 dias)</p>
                <p className="text-2xl font-bold">47</p>
              </div>
              <User className="h-8 w-8 text-[#00D4FF]" />
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
                  placeholder="Buscar por nome, username ou Discord ID..."
                  className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Servidor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os servidores</SelectItem>
                <SelectItem value="tech">Comunidade Tech</SelectItem>
                <SelectItem value="course">Curso de Programação</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="active">Ativos</SelectItem>
                <SelectItem value="banned">Banidos</SelectItem>
                <SelectItem value="inactive">Inativos</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Pagamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="paid">Pagos</SelectItem>
                <SelectItem value="pending">Pendentes</SelectItem>
                <SelectItem value="expired">Expirados</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Lista de Usuários</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.displayName}
                    />
                    <AvatarFallback>
                      {user.displayName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="font-semibold">{user.displayName}</h3>
                      {getStatusBadge(user.status)}
                      {getPaymentBadge(user.paymentStatus)}
                    </div>
                    <div className="mb-2 flex items-center gap-2 text-sm text-slate-300">
                      <span>@{user.username}</span>
                      <span>•</span>
                      <span>ID: {user.discordId}</span>
                      <span>•</span>
                      <span>{user.server}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {user.roles.map((role, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-[#5865F2]/30 text-xs text-[#5865F2]"
                        >
                          {getRoleIcon(role)}
                          <span className="ml-1">{role}</span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-right text-sm text-slate-300">
                    <p>Entrou: {user.joinedAt}</p>
                    <p>Visto: {user.lastSeen}</p>
                  </div>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/10"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Ver Perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Shield className="mr-2 h-4 w-4" />
                      Gerenciar Cargos
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Sincronizar
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Ban className="mr-2 h-4 w-4" />
                      Banir Usuário
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
            <p className="text-sm text-slate-300">
              Mostrando 3 de 334 usuários
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
