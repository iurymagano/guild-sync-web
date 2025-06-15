"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Mail,
  Plus,
  Send,
  Eye,
  MousePointer,
  TrendingUp,
  Calendar,
  Target,
  Megaphone,
  Gift,
  Star,
} from "lucide-react";

export default function CampaignsPage() {
  const campaigns = [
    {
      id: "1",
      name: "Promoção Black Friday",
      type: "email",
      status: "active",
      sent: 1247,
      opened: 623,
      clicked: 89,
      converted: 23,
      revenue: 2890.5,
      startDate: "20/11/2024",
      endDate: "30/11/2024",
    },
    {
      id: "2",
      name: "Onboarding Novos Membros",
      type: "sequence",
      status: "active",
      sent: 456,
      opened: 398,
      clicked: 156,
      converted: 67,
      revenue: 1567.3,
      startDate: "01/11/2024",
      endDate: "Contínua",
    },
    {
      id: "3",
      name: "Reativação de Inativos",
      type: "discord",
      status: "completed",
      sent: 234,
      opened: 189,
      clicked: 45,
      converted: 12,
      revenue: 456.8,
      startDate: "15/10/2024",
      endDate: "25/10/2024",
    },
  ];

  const templates = [
    {
      name: "Welcome Series",
      description: "Sequência de 5 emails para novos usuários",
      category: "Onboarding",
      openRate: "68%",
      conversionRate: "12%",
    },
    {
      name: "Win-Back Campaign",
      description: "Reative usuários inativos com ofertas especiais",
      category: "Retenção",
      openRate: "45%",
      conversionRate: "8%",
    },
    {
      name: "Upgrade Push",
      description: "Converta usuários gratuitos para premium",
      category: "Conversão",
      openRate: "72%",
      conversionRate: "15%",
    },
    {
      name: "Event Promotion",
      description: "Promova eventos e webinars",
      category: "Engajamento",
      openRate: "58%",
      conversionRate: "22%",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
            Ativa
          </Badge>
        );
      case "completed":
        return (
          <Badge className="border-[#00D4FF]/30 bg-[#00D4FF]/20 text-[#00D4FF]">
            Concluída
          </Badge>
        );
      case "draft":
        return (
          <Badge className="border-slate-500/30 bg-slate-500/20 text-slate-400">
            Rascunho
          </Badge>
        );
      default:
        return <Badge variant="outline">Pausada</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "email":
        return <Mail className="h-4 w-4" />;
      case "discord":
        return <Megaphone className="h-4 w-4" />;
      case "sequence":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Send className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Campanhas de Marketing
          </h1>
          <p className="text-slate-300">
            Crie e gerencie campanhas de email e Discord para engajar usuários
          </p>
        </div>
        <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
          <Plus className="mr-2 h-4 w-4" />
          Nova Campanha
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Emails Enviados</p>
                <p className="text-2xl font-bold">12.4K</p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+18%</span>
                </div>
              </div>
              <Mail className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Abertura</p>
                <p className="text-2xl font-bold">64.2%</p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+2.1%</span>
                </div>
              </div>
              <Eye className="h-8 w-8 text-[#00D4FF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Taxa de Clique</p>
                <p className="text-2xl font-bold">12.8%</p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+0.8%</span>
                </div>
              </div>
              <MousePointer className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Receita Gerada</p>
                <p className="text-2xl font-bold">R$ 4.9K</p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+25%</span>
                </div>
              </div>
              <Target className="h-8 w-8 text-[#EB459E]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Campaigns */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Send className="h-5 w-5" />
            Campanhas Ativas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="rounded-lg bg-white/5 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5865F2]/20">
                    {getTypeIcon(campaign.type)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{campaign.name}</h3>
                    <p className="text-sm text-slate-400">
                      {campaign.startDate} - {campaign.endDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(campaign.status)}
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-5">
                <div>
                  <p className="text-slate-400">Enviados</p>
                  <p className="font-semibold">
                    {campaign.sent.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Abertos</p>
                  <p className="font-semibold">
                    {campaign.opened} (
                    {((campaign.opened / campaign.sent) * 100).toFixed(1)}%)
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Cliques</p>
                  <p className="font-semibold">
                    {campaign.clicked} (
                    {((campaign.clicked / campaign.sent) * 100).toFixed(1)}%)
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Conversões</p>
                  <p className="font-semibold">
                    {campaign.converted} (
                    {((campaign.converted / campaign.sent) * 100).toFixed(1)}%)
                  </p>
                </div>
                <div>
                  <p className="text-slate-400">Receita</p>
                  <p className="font-semibold text-[#57F287]">
                    R${" "}
                    {campaign.revenue.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-sm">
                  <span>Performance</span>
                  <span>
                    {((campaign.opened / campaign.sent) * 100).toFixed(1)}%
                    abertura
                  </span>
                </div>
                <Progress
                  value={(campaign.opened / campaign.sent) * 100}
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Campaign Templates */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Templates de Campanha
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {templates.map((template, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-slate-400">
                      {template.description}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="border-white/30 text-xs text-white"
                  >
                    {template.category}
                  </Badge>
                </div>
                <div className="flex gap-4 text-xs text-slate-400">
                  <span>📧 {template.openRate} abertura</span>
                  <span>🎯 {template.conversionRate} conversão</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5" />
              Ações Rápidas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="h-auto w-full bg-[#5865F2] p-4 text-white hover:bg-[#4752C4]">
              <div className="text-center">
                <Mail className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Campanha de Email</div>
                <div className="text-xs text-slate-200">
                  Crie uma nova campanha de email marketing
                </div>
              </div>
            </Button>

            <Button className="h-auto w-full bg-[#00D4FF] p-4 text-slate-900 hover:bg-[#00D4FF]/80">
              <div className="text-center">
                <Megaphone className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Anúncio no Discord</div>
                <div className="text-xs text-slate-700">
                  Envie mensagem para todos os servidores
                </div>
              </div>
            </Button>

            <Button className="h-auto w-full bg-[#57F287] p-4 text-slate-900 hover:bg-[#57F287]/80">
              <div className="text-center">
                <Gift className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Campanha Promocional</div>
                <div className="text-xs text-slate-700">
                  Crie ofertas e cupons de desconto
                </div>
              </div>
            </Button>

            <Button className="h-auto w-full bg-[#FEE75C] p-4 text-slate-900 hover:bg-[#FEE75C]/80">
              <div className="text-center">
                <Calendar className="mx-auto mb-2 h-6 w-6" />
                <div className="font-medium">Sequência Automática</div>
                <div className="text-xs text-slate-700">
                  Configure emails em sequência
                </div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
