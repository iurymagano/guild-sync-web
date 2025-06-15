"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  Download,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Calendar,
} from "lucide-react";

export default function ReportsPage() {
  const financialData = {
    currentMonth: {
      revenue: 2450.0,
      growth: 12.5,
      transactions: 89,
      activeSubscriptions: 156,
    },
    lastMonth: {
      revenue: 2180.0,
      transactions: 76,
      activeSubscriptions: 142,
    },
  };

  const topServers = [
    { name: "Comunidade Tech", revenue: 1200.0, users: 89, growth: 15.2 },
    { name: "Curso de Programação", revenue: 890.0, users: 67, growth: 8.7 },
    { name: "Gaming Community", revenue: 360.0, users: 23, growth: -2.1 },
  ];

  const recentTransactions = [
    {
      id: "pi_1234567890",
      user: "João Silva",
      amount: 29.9,
      plan: "Premium",
      server: "Comunidade Tech",
      date: "25/03/2024",
      status: "completed",
    },
    {
      id: "pi_0987654321",
      user: "Maria Santos",
      amount: 29.9,
      plan: "Premium",
      server: "Curso de Programação",
      date: "24/03/2024",
      status: "completed",
    },
    {
      id: "pi_1122334455",
      user: "Carlos Admin",
      amount: 79.9,
      plan: "Avançado",
      server: "Gaming Community",
      date: "23/03/2024",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-white">
            Relatórios Financeiros
          </h1>
          <p className="text-slate-300">
            Acompanhe receitas, transações e crescimento
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="30d">
            <SelectTrigger className="w-40 border-white/20 bg-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Últimos 7 dias</SelectItem>
              <SelectItem value="30d">Últimos 30 dias</SelectItem>
              <SelectItem value="90d">Últimos 90 dias</SelectItem>
              <SelectItem value="1y">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Receita do Mês</p>
                <p className="text-2xl font-bold">
                  R${" "}
                  {financialData.currentMonth.revenue.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">
                    +{financialData.currentMonth.growth}%
                  </span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-[#57F287]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Transações</p>
                <p className="text-2xl font-bold">
                  {financialData.currentMonth.transactions}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">
                    +
                    {(
                      ((financialData.currentMonth.transactions -
                        financialData.lastMonth.transactions) /
                        financialData.lastMonth.transactions) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-[#00D4FF]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Assinaturas Ativas</p>
                <p className="text-2xl font-bold">
                  {financialData.currentMonth.activeSubscriptions}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">
                    +
                    {financialData.currentMonth.activeSubscriptions -
                      financialData.lastMonth.activeSubscriptions}
                  </span>
                </div>
              </div>
              <Users className="h-8 w-8 text-[#FEE75C]" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-300">Ticket Médio</p>
                <p className="text-2xl font-bold">
                  R${" "}
                  {(
                    financialData.currentMonth.revenue /
                    financialData.currentMonth.transactions
                  ).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-[#57F287]" />
                  <span className="text-xs text-[#57F287]">+5.2%</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-[#5865F2]" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Top Servers */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Servidores com Maior Receita
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {topServers.map((server, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg bg-white/5 p-4"
              >
                <div>
                  <h4 className="font-semibold">{server.name}</h4>
                  <p className="text-sm text-slate-400">
                    {server.users} usuários pagantes
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    R${" "}
                    {server.revenue.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <div className="flex items-center gap-1">
                    {server.growth > 0 ? (
                      <TrendingUp className="h-3 w-3 text-[#57F287]" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-red-400" />
                    )}
                    <span
                      className={`text-xs ${server.growth > 0 ? "text-[#57F287]" : "text-red-400"}`}
                    >
                      {server.growth > 0 ? "+" : ""}
                      {server.growth}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Transações Recentes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg bg-white/5 p-4"
              >
                <div>
                  <h4 className="font-semibold">{transaction.user}</h4>
                  <p className="text-sm text-slate-400">
                    {transaction.server} • {transaction.plan}
                  </p>
                  <p className="text-xs text-slate-500">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    R${" "}
                    {transaction.amount.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <Badge
                    className={
                      transaction.status === "completed"
                        ? "border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]"
                        : "border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]"
                    }
                  >
                    {transaction.status === "completed"
                      ? "Concluído"
                      : "Pendente"}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Chart Placeholder */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Evolução da Receita
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-64 items-center justify-center rounded-lg bg-white/5">
            <div className="text-center">
              <BarChart3 className="mx-auto mb-4 h-12 w-12 text-slate-400" />
              <p className="text-slate-400">
                Gráfico de receita será exibido aqui
              </p>
              <p className="text-sm text-slate-500">
                Integração com biblioteca de gráficos em desenvolvimento
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
