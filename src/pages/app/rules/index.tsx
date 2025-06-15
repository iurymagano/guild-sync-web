"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Shield,
  Edit,
  Trash2,
  Play,
  Pause,
  Search,
  CreditCard,
  Users,
  Clock,
} from "lucide-react";

export default function RulesPage() {
  const rules = [
    {
      id: "1",
      name: "Acesso Premium",
      description: "Usuários com pagamento ativo recebem cargo Premium",
      server: "Comunidade Tech",
      trigger: "payment",
      role: "@Premium",
      status: "active",
      executions: 45,
      lastExecution: "2 min atrás",
    },
    {
      id: "2",
      name: "Estudantes Verificados",
      description: "Estudantes com matrícula válida recebem acesso ao curso",
      server: "Curso de Programação",
      trigger: "enrollment",
      role: "@Estudante",
      status: "active",
      executions: 23,
      lastExecution: "1h atrás",
    },
    {
      id: "3",
      name: "VIP Expirado",
      description: "Remove cargo VIP quando assinatura expira",
      server: "Comunidade Tech",
      trigger: "subscription_expired",
      role: "@VIP",
      status: "paused",
      executions: 8,
      lastExecution: "1 dia atrás",
    },
  ];

  const getTriggerIcon = (trigger: string) => {
    switch (trigger) {
      case "payment":
        return <CreditCard className="h-4 w-4" />;
      case "enrollment":
        return <Users className="h-4 w-4" />;
      case "subscription_expired":
        return <Clock className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getTriggerLabel = (trigger: string) => {
    switch (trigger) {
      case "payment":
        return "Pagamento";
      case "enrollment":
        return "Matrícula";
      case "subscription_expired":
        return "Expiração";
      default:
        return "Outro";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Regras de Acesso
          </h1>
          <p className="text-slate-300">
            Gerencie regras automatizadas para seus servidores Discord
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <Plus className="mr-2 h-4 w-4" />
          Nova Regra
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Total de Regras</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <Shield className="h-8 w-8 text-[#5865F2]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Regras Ativas</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <Play className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Execuções Hoje</p>
                <p className="text-2xl font-bold">76</p>
              </div>
              <Users className="h-8 w-8 text-[#00D4FF]" />
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
              <Shield className="h-8 w-8 text-[#57F287]" />
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
                  placeholder="Buscar regras..."
                  className="border-white/20 bg-white/10 pl-10 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48 border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Filtrar por servidor" />
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
                <SelectItem value="active">Ativas</SelectItem>
                <SelectItem value="paused">Pausadas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Rules List */}
      <div className="space-y-4">
        {rules.map((rule) => (
          <Card
            key={rule.id}
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5865F2]/20">
                    {getTriggerIcon(rule.trigger)}
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="text-lg font-semibold">{rule.name}</h3>
                      <Badge
                        className={
                          rule.status === "active"
                            ? "border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]"
                            : "border-slate-500/30 bg-slate-500/20 text-slate-400"
                        }
                      >
                        {rule.status === "active" ? "Ativa" : "Pausada"}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#00D4FF]/30 text-[#00D4FF]"
                      >
                        {getTriggerLabel(rule.trigger)}
                      </Badge>
                    </div>
                    <p className="mb-2 text-sm text-slate-300">
                      {rule.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span>Servidor: {rule.server}</span>
                      <span>•</span>
                      <span>Cargo: {rule.role}</span>
                      <span>•</span>
                      <span>{rule.executions} execuções</span>
                      <span>•</span>
                      <span>Última: {rule.lastExecution}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className={`text-white hover:bg-white/10 ${
                      rule.status === "active"
                        ? "text-[#FEE75C]"
                        : "text-[#57F287]"
                    }`}
                  >
                    {rule.status === "active" ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Rule Form */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Criar Nova Regra
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="ruleName">Nome da Regra</Label>
              <Input
                id="ruleName"
                placeholder="Ex: Acesso Premium"
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="server">Servidor</Label>
              <Select>
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue placeholder="Selecione o servidor" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Comunidade Tech</SelectItem>
                  <SelectItem value="course">Curso de Programação</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Input
              id="description"
              placeholder="Descreva o que esta regra faz..."
              className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="trigger">Gatilho</Label>
              <Select>
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue placeholder="Quando executar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payment">Pagamento Recebido</SelectItem>
                  <SelectItem value="enrollment">
                    Matrícula Confirmada
                  </SelectItem>
                  <SelectItem value="subscription_expired">
                    Assinatura Expirada
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Cargo a Atribuir</Label>
              <Input
                id="role"
                placeholder="@Premium"
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="autoStart" />
              <Label htmlFor="autoStart">Ativar regra automaticamente</Label>
            </div>
            <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
              <Plus className="mr-2 h-4 w-4" />
              Criar Regra
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
