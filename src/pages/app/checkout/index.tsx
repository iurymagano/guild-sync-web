"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Shield, Check, ArrowLeft, Lock } from "lucide-react";

export default function CheckoutPage() {
  const selectedPlan = {
    name: "Profissional",
    price: "R$ 29",
    period: "/mês",
    features: [
      "Até 5 servidores Discord",
      "Até 100 usuários",
      "Todas as regras de acesso",
      "Integração com Stripe",
      "Dashboard avançado",
      "Histórico completo",
      "Suporte prioritário",
    ],
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:bg-white/10">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar aos Planos
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white">
            Finalizar Assinatura
          </h1>
          <p className="text-slate-300">
            Complete seu upgrade para o plano Profissional
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Informações de Pagamento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Card Details */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Número do Cartão</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Validade</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/AA"
                      className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input
                      id="cvc"
                      placeholder="123"
                      className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardName">Nome no Cartão</Label>
                  <Input
                    id="cardName"
                    placeholder="João Silva"
                    className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <Separator className="bg-white/20" />

              {/* Billing Address */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Endereço de Cobrança</h3>

                <div className="space-y-2">
                  <Label htmlFor="country">País</Label>
                  <Select>
                    <SelectTrigger className="border-white/20 bg-white/10 text-white">
                      <SelectValue placeholder="Selecione o país" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="br">Brasil</SelectItem>
                      <SelectItem value="us">Estados Unidos</SelectItem>
                      <SelectItem value="pt">Portugal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">CEP</Label>
                    <Input
                      id="zipCode"
                      placeholder="12345-678"
                      className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">Estado</Label>
                    <Input
                      id="state"
                      placeholder="SP"
                      className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    placeholder="São Paulo"
                    className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço</Label>
                  <Input
                    id="address"
                    placeholder="Rua das Flores, 123"
                    className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-slate-300 text-[#5865F2] focus:ring-[#5865F2]"
                />
                <span className="text-sm text-slate-300">
                  Eu concordo com os{" "}
                  <a
                    href="#"
                    className="font-medium text-[#5865F2] hover:text-[#4752C4]"
                  >
                    Termos de Serviço
                  </a>{" "}
                  e{" "}
                  <a
                    href="#"
                    className="font-medium text-[#5865F2] hover:text-[#4752C4]"
                  >
                    Política de Privacidade
                  </a>
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-8 border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">{selectedPlan.name}</h3>
                  <Badge className="border-[#00D4FF]/30 bg-[#00D4FF]/20 text-[#00D4FF]">
                    Upgrade
                  </Badge>
                </div>
                <p className="mb-4 text-sm text-slate-300">
                  Cobrança mensal recorrente
                </p>

                <div className="space-y-2">
                  {selectedPlan.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-3 w-3 text-[#57F287]" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="bg-white/20" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Plano Profissional</span>
                  <span>R$ 29,00</span>
                </div>
                <div className="flex justify-between text-sm text-slate-300">
                  <span>Impostos</span>
                  <span>R$ 5,22</span>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>R$ 34,22</span>
                </div>
                <p className="text-xs text-slate-400">
                  Cobrança recorrente mensal
                </p>
              </div>

              <Button className="h-12 w-full bg-gradient-to-r from-[#5865F2] to-[#4752C4] font-semibold text-white hover:from-[#4752C4] hover:to-[#3C45A5]">
                <Lock className="mr-2 h-4 w-4" />
                Confirmar Pagamento
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <Shield className="h-3 w-3" />
                <span>Pagamento seguro processado pelo Stripe</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
