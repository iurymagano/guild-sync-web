"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  Bot,
  ExternalLink,
  Copy,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export default function ConnectServerPage() {
  const [step, setStep] = useState(1);
  const [botToken, setBotToken] = useState("");

  const botInviteUrl =
    "https://discord.com/api/oauth2/authorize?client_id=123456789&permissions=268435456&scope=bot";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao Dashboard
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">
            Conectar Servidor Discord
          </h1>
          <p className="text-slate-300">
            Configure a integração com seu servidor Discord
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                    step >= stepNumber
                      ? "bg-[#5865F2] text-white"
                      : "bg-white/20 text-slate-400"
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`mx-4 h-1 w-20 ${step > stepNumber ? "bg-[#5865F2]" : "bg-white/20"}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm">
            <span className={step >= 1 ? "text-white" : "text-slate-400"}>
              Criar Bot
            </span>
            <span className={step >= 2 ? "text-white" : "text-slate-400"}>
              Adicionar ao Servidor
            </span>
            <span className={step >= 3 ? "text-white" : "text-slate-400"}>
              Configurar Token
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      {step === 1 && (
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Passo 1: Criar Bot no Discord
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-[#00D4FF]/20 bg-[#00D4FF]/10 p-4">
              <h4 className="mb-2 font-semibold text-[#00D4FF]">Instruções:</h4>
              <ol className="list-inside list-decimal space-y-2 text-sm text-slate-300">
                <li>Acesse o Discord Developer Portal</li>
                <li>Clique em "New Application" e dê um nome ao seu bot</li>
                <li>Vá para a aba "Bot" e clique em "Add Bot"</li>
                <li>Copie o token do bot (você precisará dele no passo 3)</li>
              </ol>
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
                onClick={() =>
                  window.open(
                    "https://discord.com/developers/applications",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Abrir Developer Portal
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => setStep(2)}
              >
                Já criei o bot
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Passo 2: Adicionar Bot ao Servidor
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-[#FEE75C]/20 bg-[#FEE75C]/10 p-4">
              <h4 className="mb-2 font-semibold text-[#FEE75C]">
                Link de Convite:
              </h4>
              <div className="flex items-center gap-2 rounded-lg bg-white/10 p-3">
                <code className="flex-1 text-sm break-all text-slate-300">
                  {botInviteUrl}
                </code>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={() => copyToClipboard(botInviteUrl)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Substitua "123456789" pelo ID do seu bot no Developer Portal
              </p>
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
                onClick={() => window.open(botInviteUrl, "_blank")}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Adicionar Bot ao Servidor
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => setStep(3)}
              >
                Bot adicionado
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Passo 3: Configurar Token
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <div className="mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <h4 className="font-semibold text-red-400">Importante:</h4>
              </div>
              <p className="text-sm text-slate-300">
                Nunca compartilhe o token do seu bot. Ele é como uma senha e
                deve ser mantido em segredo.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="botToken">Token do Bot</Label>
              <Input
                id="botToken"
                type="password"
                value={botToken}
                onChange={(e) => setBotToken(e.target.value)}
                placeholder="Cole aqui o token do seu bot"
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              />
              <p className="text-xs text-slate-400">
                Encontre o token na aba "Bot" do Discord Developer Portal
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serverName">Nome do Servidor (opcional)</Label>
              <Input
                id="serverName"
                placeholder="Ex: Minha Comunidade"
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="flex gap-4">
              <Button
                className="bg-[#57F287] font-semibold text-slate-900 hover:bg-[#57F287]/80"
                disabled={!botToken}
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Conectar Servidor
              </Button>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => setStep(2)}
              >
                Voltar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Help Section */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Precisa de Ajuda?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-slate-300">
            Se você está tendo dificuldades para conectar seu servidor, consulte
            nossa documentação ou entre em contato com o suporte.
          </p>
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver Documentação
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contatar Suporte
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
