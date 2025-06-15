"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Users,
  Activity,
  Clock,
  Target,
  Zap,
  Eye,
  MessageSquare,
} from "lucide-react";

export default function AnalyticsPage() {
  const engagementData = {
    dailyActiveUsers: 234,
    weeklyActiveUsers: 567,
    monthlyActiveUsers: 892,
    averageSessionTime: "23m 45s",
    messagesSent: 1247,
    retentionRate: 78.5,
    conversionRate: 12.3,
    churnRate: 4.2,
  };

  const topChannels = [
    { name: "#geral", messages: 456, users: 89, engagement: 92 },
    { name: "#premium", messages: 234, users: 45, engagement: 87 },
    { name: "#suporte", messages: 123, users: 67, engagement: 76 },
    { name: "#anuncios", messages: 89, users: 234, engagement: 65 },
  ];

  const userJourney = [
    { stage: "Visitante", users: 1000, conversion: 100 },
    { stage: "Cadastro", users: 450, conversion: 45 },
    { stage: "Primeiro Login", users: 380, conversion: 38 },
    { stage: "Engajamento", users: 290, conversion: 29 },
    { stage: "Conversão Paga", users: 123, conversion: 12.3 },
  ];

  const activityHeatmap = [
    { hour: "00h", activity: 15 },
    { hour: "06h", activity: 25 },
    { hour: "12h", activity: 85 },
    { hour: "18h", activity: 95 },
    { hour: "21h", activity: 78 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Analytics & Insights
          </h1>
          <p className="text-slate-300">
            Análises avançadas de engajamento e performance
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <BarChart3 className="mr-2 h-4 w-4" />
          Exportar Relatório
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">
                  Usuários Ativos (Diário)
                </p>
                <p className="text-2xl font-bold">
                  {engagementData.dailyActiveUsers}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+8.2%</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Retenção</p>
                <p className="text-2xl font-bold">
                  {engagementData.retentionRate}%
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+2.1%</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-[#00D4FF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Conversão</p>
                <p className="text-2xl font-bold">
                  {engagementData.conversionRate}%
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+1.8%</span>
                </div>
              </div>
              <Zap className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Tempo Médio de Sessão</p>
                <p className="text-2xl font-bold">
                  {engagementData.averageSessionTime}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingDown className="h-3 w-3 text-red-400" />
                  <span className="text-xs text-red-400">-0.5%</span>
                </div>
              </div>
              <Clock className="h-8 w-8 text-[#5865F2]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* User Journey Funnel */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Funil de Conversão
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {userJourney.map((stage, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{stage.stage}</span>
                  <div className="text-right">
                    <span className="font-bold">{stage.users}</span>
                    <span className="ml-2 text-sm text-slate-400">
                      ({stage.conversion}%)
                    </span>
                  </div>
                </div>
                <Progress value={stage.conversion} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Channels */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Canais Mais Engajados
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topChannels.map((channel, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-white/5 p-3"
              >
                <div>
                  <h4 className="font-semibold">{channel.name}</h4>
                  <p className="text-sm text-slate-400">
                    {channel.messages} mensagens • {channel.users} usuários
                  </p>
                </div>
                <div className="text-right">
                  <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
                    {channel.engagement}% engajamento
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Activity Heatmap */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Mapa de Calor - Atividade por Horário
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {activityHeatmap.map((data, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-sm text-slate-400">{data.hour}</div>
                <div
                  className="flex h-16 items-center justify-center rounded-lg font-bold"
                  style={{
                    backgroundColor: `rgba(88, 101, 242, ${data.activity / 100})`,
                    border: "1px solid rgba(88, 101, 242, 0.3)",
                  }}
                >
                  {data.activity}%
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-sm text-slate-400">
            Horários de maior atividade: 18h-21h (Prime Time)
          </p>
        </CardContent>
      </Card>

      {/* Insights and Recommendations */}
      <Card className="border-white/20 bg-gradient-to-r from-[#5865F2]/10 to-[#00D4FF]/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Insights Inteligentes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#57F287]">
                📈 Oportunidade de Crescimento
              </h4>
              <p className="text-sm text-slate-300">
                Usuários que se engajam no #premium têm 3x mais chance de
                converter. Considere criar mais conteúdo exclusivo neste canal.
              </p>
            </div>

            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#FEE75C]">
                ⚠️ Atenção Necessária
              </h4>
              <p className="text-sm text-slate-300">
                Taxa de churn aumentou 0.8% este mês. Usuários estão saindo após
                2 semanas. Implemente um programa de onboarding mais robusto.
              </p>
            </div>

            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#00D4FF]">
                💡 Recomendação
              </h4>
              <p className="text-sm text-slate-300">
                Horário ideal para anúncios: 18h-21h. Engajamento 40% maior
                neste período. Agende suas campanhas para maximizar alcance.
              </p>
            </div>

            <div className="rounded-lg bg-white/5 p-4">
              <h4 className="mb-2 font-semibold text-[#EB459E]">
                🎯 Meta Sugerida
              </h4>
              <p className="text-sm text-slate-300">
                Com base no crescimento atual, você pode atingir 15% de
                conversão até o final do mês focando em usuários que visitam o
                #premium.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
