import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, ArrowRight } from "lucide-react";

export default function PlansPage() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "1 servidor Discord",
        "Até 10 usuários",
        "Regras básicas de acesso",
        "Suporte por e-mail",
        "Dashboard básico",
      ],
      limitations: ["Sem integração de pagamentos", "Sem regras avançadas"],
      popular: false,
      current: true,
    },
    {
      name: "Profissional",
      price: "R$ 29",
      period: "/mês",
      description: "Para comunidades em crescimento",
      features: [
        "Até 5 servidores Discord",
        "Até 100 usuários",
        "Todas as regras de acesso",
        "Integração com Stripe",
        "Dashboard avançado",
        "Histórico completo",
        "Suporte prioritário",
        "Automação de cargos",
      ],
      limitations: [],
      popular: true,
      current: false,
    },
    {
      name: "Avançado",
      price: "R$ 79",
      period: "/mês",
      description: "Para grandes comunidades",
      features: [
        "Servidores ilimitados",
        "Usuários ilimitados",
        "Todas as funcionalidades",
        "API personalizada",
        "Webhooks customizados",
        "Relatórios avançados",
        "Suporte 24/7",
        "Gerente de conta dedicado",
      ],
      limitations: [],
      popular: false,
      current: false,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-white">
          Escolha o plano ideal para você
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300">
          Comece grátis e faça upgrade quando precisar de mais recursos. Todos
          os planos incluem suporte e atualizações.
        </p>
      </div>

      {/* Current Plan Alert */}
      <Card className="border-[#57F287]/20 bg-[#57F287]/10 backdrop-blur-sm">
        <CardContent className="flex items-center justify-between p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#57F287]/20">
              <Zap className="h-5 w-5 text-[#57F287]" />
            </div>
            <div>
              <h3 className="font-semibold text-white">
                Plano Atual: Gratuito
              </h3>
              <p className="text-sm text-slate-300">
                Você está usando 3 de 10 usuários disponíveis
              </p>
            </div>
          </div>
          <Badge className="bg-[#57F287] text-slate-900">Ativo</Badge>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative border-white/20 bg-white/10 text-white backdrop-blur-sm ${
              plan.popular ? "scale-105 ring-2 ring-[#00D4FF]" : ""
            } ${plan.current ? "ring-2 ring-[#57F287]" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-[#00D4FF] text-slate-900">
                  <Star className="mr-1 h-3 w-3" />
                  Mais Popular
                </Badge>
              </div>
            )}

            {plan.current && (
              <div className="absolute -top-4 right-4">
                <Badge className="bg-[#57F287] text-slate-900">
                  Plano Atual
                </Badge>
              </div>
            )}

            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-slate-300">{plan.period}</span>
              </div>
              <p className="text-slate-300">{plan.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold text-[#57F287]">Incluído:</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm"
                    >
                      <Check className="h-4 w-4 flex-shrink-0 text-[#57F287]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {plan.limitations.length > 0 && (
                <div>
                  <h4 className="mb-3 font-semibold text-slate-400">
                    Limitações:
                  </h4>
                  <ul className="space-y-2">
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <li
                        key={limitationIndex}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <div className="h-4 w-4 flex-shrink-0 rounded-full border border-slate-400" />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Button
                className={`h-12 w-full ${
                  plan.current
                    ? "cursor-not-allowed bg-slate-600 text-slate-300"
                    : plan.popular
                      ? "bg-[#00D4FF] text-slate-900 hover:bg-[#00D4FF]/90"
                      : "bg-white/20 text-white hover:bg-white/30"
                }`}
                disabled={plan.current}
              >
                {plan.current ? (
                  "Plano Atual"
                ) : plan.price === "R$ 0" ? (
                  "Seu Plano Atual"
                ) : (
                  <>
                    Fazer Upgrade
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-center">Perguntas Frequentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">
              Posso cancelar a qualquer momento?
            </h4>
            <p className="text-sm text-slate-300">
              Sim, você pode cancelar sua assinatura a qualquer momento. Não há
              taxas de cancelamento.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              O que acontece se eu exceder os limites?
            </h4>
            <p className="text-sm text-slate-300">
              Você receberá notificações quando estiver próximo dos limites e
              poderá fazer upgrade facilmente.
            </p>
          </div>
          <div>
            <h4 className="mb-2 font-semibold">
              Há desconto para pagamento anual?
            </h4>
            <p className="text-sm text-slate-300">
              Sim, oferecemos 20% de desconto para assinaturas anuais. Entre em
              contato para mais detalhes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
