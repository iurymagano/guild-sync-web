"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  AlertTriangle,
  User,
  Bot,
  CreditCard,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function AccountVerificationPage() {
  const verificationSteps = [
    {
      id: "profile",
      title: "Informações Pessoais",
      description: "Complete seu perfil com informações básicas",
      icon: User,
      status: "completed",
      required: true,
    },
    {
      id: "discord",
      title: "Integração Discord",
      description: "Conecte sua conta Discord",
      icon: Bot,
      status: "completed",
      required: true,
    },
    {
      id: "bot_token",
      title: "Token do Bot",
      description: "Configure o token do seu bot Discord",
      icon: Shield,
      status: "pending",
      required: true,
    },
    {
      id: "payment",
      title: "Método de Pagamento",
      description: "Adicione um cartão para recursos premium",
      icon: CreditCard,
      status: "pending",
      required: false,
    },
  ];

  const completedSteps = verificationSteps.filter(
    (step) => step.status === "completed",
  ).length;
  const totalSteps = verificationSteps.filter((step) => step.required).length;
  const progress = (completedSteps / totalSteps) * 100;

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-[#57F287]" />;
      case "pending":
        return <AlertTriangle className="h-5 w-5 text-[#FEE75C]" />;
      default:
        return (
          <div className="h-5 w-5 rounded-full border-2 border-slate-400" />
        );
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Concluído
          </Badge>
        );
      case "pending":
        return (
          <Badge className="border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]">
            Pendente
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="border-slate-400 text-slate-400">
            Não iniciado
          </Badge>
        );
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold text-white">
          Verificação da Conta
        </h1>
        <p className="text-slate-300">
          Complete a verificação para acessar todos os recursos da plataforma
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Progresso da Verificação
              </h3>
              <p className="text-sm text-slate-300">
                {completedSteps} de {totalSteps} etapas obrigatórias concluídas
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{Math.round(progress)}%</div>
              <div className="text-sm text-slate-300">Completo</div>
            </div>
          </div>
          <Progress value={progress} className="h-3" />
        </CardContent>
      </Card>

      {/* Verification Steps */}
      <div className="space-y-4">
        {verificationSteps.map((step) => (
          <Card
            key={step.id}
            className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#5865F2]/20">
                    <step.icon className="h-6 w-6 text-[#5865F2]" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-3">
                      <h3 className="font-semibold">{step.title}</h3>
                      {getStatusBadge(step.status)}
                      {step.required && (
                        <Badge
                          variant="outline"
                          className="border-red-400/30 text-xs text-red-400"
                        >
                          Obrigatório
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-slate-300">{step.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {getStatusIcon(step.status)}
                  {step.status === "pending" && (
                    <Button
                      size="sm"
                      className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
                    >
                      {step.id === "bot_token" ? "Configurar" : "Completar"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bot Token Configuration */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Configurar Token do Bot
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-[#FEE75C]/20 bg-[#FEE75C]/10 p-4">
            <h4 className="mb-2 font-semibold text-[#FEE75C]">
              Por que precisamos do token?
            </h4>
            <p className="text-sm text-slate-300">
              O token do bot é necessário para que possamos gerenciar
              automaticamente os cargos e permissões dos usuários em seu
              servidor Discord. Seus dados são criptografados e armazenados com
              segurança.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="botToken">Token do Bot Discord</Label>
            <Input
              id="botToken"
              type="password"
              placeholder="Cole aqui o token do seu bot"
              className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
            />
            <p className="text-xs text-slate-400">
              Encontre o token na aba "Bot" do Discord Developer Portal
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="serverName">Nome do Servidor</Label>
            <Input
              id="serverName"
              placeholder="Ex: Minha Comunidade"
              className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="flex gap-4">
            <Button className="bg-[#57F287] font-semibold text-slate-900 hover:bg-[#57F287]/80">
              <Shield className="mr-2 h-4 w-4" />
              Salvar Token
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Preciso de Ajuda
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Benefits */}
      <Card className="border-white/20 bg-gradient-to-r from-[#5865F2]/10 to-[#00D4FF]/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <h3 className="mb-4 text-lg font-semibold">
            Benefícios da Conta Verificada
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-[#57F287]" />
              <span className="text-sm">
                Gerenciamento automático de cargos
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-[#57F287]" />
              <span className="text-sm">
                Integração com sistemas de pagamento
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-[#57F287]" />
              <span className="text-sm">Regras de acesso avançadas</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-[#57F287]" />
              <span className="text-sm">Suporte prioritário</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
