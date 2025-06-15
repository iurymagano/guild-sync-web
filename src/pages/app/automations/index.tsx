"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Zap,
  Plus,
  Play,
  Settings,
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  CreditCard,
  Calendar,
  Target,
} from "lucide-react";

export default function AutomationsPage() {
  const automations = [
    {
      id: "1",
      name: "Boas-vindas Premium",
      description:
        "Envia mensagem personalizada quando usuário se torna premium",
      trigger: "Pagamento confirmado",
      actions: ["Enviar DM", "Adicionar cargo @Premium", "Notificar equipe"],
      status: "active",
      executions: 45,
      successRate: 98.2,
    },
    {
      id: "2",
      name: "Lembrete de Renovação",
      description: "Notifica usuários 3 dias antes da renovação",
      trigger: "3 dias antes do vencimento",
      actions: ["Enviar email", "Mensagem no Discord", "Oferecer desconto"],
      status: "active",
      executions: 23,
      successRate: 87.5,
    },
    {
      id: "3",
      name: "Onboarding Novos Membros",
      description: "Sequência de boas-vindas para novos membros",
      trigger: "Usuário entra no servidor",
      actions: [
        "Mensagem de boas-vindas",
        "Tour guiado",
        "Atribuir cargo @Novato",
      ],
      status: "paused",
      executions: 156,
      successRate: 94.1,
    },
  ];

  const templates = [
    {
      name: "Recuperação de Carrinho",
      description: "Reativa usuários que abandonaram o checkout",
      category: "Vendas",
      icon: CreditCard,
      color: "#57F287",
    },
    {
      name: "Engajamento Semanal",
      description: "Envia resumo semanal de atividades",
      category: "Engajamento",
      icon: Calendar,
      color: "#00D4FF",
    },
    {
      name: "Detecção de Inatividade",
      description: "Identifica e reativa usuários inativos",
      category: "Retenção",
      icon: Target,
      color: "#FEE75C",
    },
    {
      name: "Programa de Referência",
      description: "Recompensa usuários que trazem novos membros",
      category: "Crescimento",
      icon: Users,
      color: "#EB459E",
    },
  ];

  const workflows = [
    {
      step: 1,
      name: "Trigger",
      description: "Usuário faz pagamento",
      icon: Zap,
      color: "#5865F2",
    },
    {
      step: 2,
      name: "Condição",
      description: "Verificar se é primeira compra",
      icon: Target,
      color: "#00D4FF",
    },
    {
      step: 3,
      name: "Ação",
      description: "Enviar mensagem de boas-vindas",
      icon: MessageSquare,
      color: "#57F287",
    },
    {
      step: 4,
      name: "Delay",
      description: "Aguardar 1 hora",
      icon: Clock,
      color: "#FEE75C",
    },
    {
      step: 5,
      name: "Ação Final",
      description: "Adicionar ao grupo VIP",
      icon: Users,
      color: "#EB459E",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Automações Inteligentes
          </h1>
          <p className="text-slate-300">
            Crie workflows automatizados para engajar e converter usuários
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <Plus className="mr-2 h-4 w-4" />
          Nova Automação
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Automações Ativas</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Zap className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Execuções Hoje</p>
                <p className="text-2xl font-bold">234</p>
              </div>
              <Play className="h-8 w-8 text-[#00D4FF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Sucesso</p>
                <p className="text-2xl font-bold">94.2%</p>
              </div>
              <Target className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Tempo Economizado</p>
                <p className="text-2xl font-bold">18h</p>
              </div>
              <Clock className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Automations */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Automações Ativas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {automations.map((automation) => (
            <div
              key={automation.id}
              className="flex items-center justify-between rounded-lg bg-white/5 p-4"
            >
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-semibold">{automation.name}</h3>
                  <Badge
                    className={
                      automation.status === "active"
                        ? "border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]"
                        : "border-slate-500/30 bg-slate-500/20 text-slate-400"
                    }
                  >
                    {automation.status === "active" ? "Ativa" : "Pausada"}
                  </Badge>
                </div>
                <p className="mb-2 text-sm text-slate-300">
                  {automation.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>Trigger: {automation.trigger}</span>
                  <span>•</span>
                  <span>{automation.executions} execuções</span>
                  <span>•</span>
                  <span>{automation.successRate}% sucesso</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Switch checked={automation.status === "active"} />
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

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Workflow Builder Preview */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Construtor Visual de Workflows
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workflows.map((step, index) => (
                <div key={step.step} className="flex items-center gap-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${step.color}20`,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    <step.icon
                      className="h-5 w-5"
                      style={{ color: step.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{step.name}</h4>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>
                  {index < workflows.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  )}
                </div>
              ))}
            </div>
            <Button className="mt-4 w-full bg-[#5865F2] text-white hover:bg-[#4752C4]">
              Abrir Editor Visual
            </Button>
          </CardContent>
        </Card>

        {/* Templates */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Templates Prontos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {templates.map((template, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center justify-between rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `${template.color}20`,
                      border: `1px solid ${template.color}30`,
                    }}
                  >
                    <template.icon
                      className="h-5 w-5"
                      style={{ color: template.color }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-slate-400">
                      {template.description}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-white/30 text-white">
                  {template.category}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      <Card className="border-white/20 bg-gradient-to-r from-[#5865F2]/10 to-[#00D4FF]/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Sugestões Inteligentes de IA
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#57F287]">
                🤖 Automação Sugerida
              </h4>
              <p className="mb-3 text-sm text-slate-300">
                Baseado no seu padrão de usuários, recomendamos criar uma
                automação para usuários que visitam o canal #premium mas não
                convertem em 7 dias.
              </p>
              <Button
                size="sm"
                className="bg-[#57F287] text-slate-900 hover:bg-[#57F287]/80"
              >
                Criar Automação
              </Button>
            </div>

            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#00D4FF]">
                📊 Otimização Detectada
              </h4>
              <p className="mb-3 text-sm text-slate-300">
                Sua automação "Boas-vindas Premium" pode ter 15% mais eficácia
                se adicionarmos um delay de 2 horas antes do primeiro contato.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="border-[#00D4FF]/30 text-[#00D4FF]"
              >
                Aplicar Otimização
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
