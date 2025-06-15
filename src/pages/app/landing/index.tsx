import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Users,
  CreditCard,
  Shield,
  ArrowRight,
  Check,
  Star,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();
  const features = [
    {
      icon: Users,
      title: "Gestão Automática de Grupos",
      description:
        "Conecte múltiplos servidores Discord e gerencie membros automaticamente",
    },
    {
      icon: CreditCard,
      title: "Pagamentos Integrados",
      description:
        "Stripe integrado para controle de assinaturas e acessos pagos",
    },
    {
      icon: Shield,
      title: "Regras Personalizadas",
      description:
        "Crie regras complexas baseadas em pagamentos, matrículas e mais",
    },
  ];

  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Para começar",
      features: ["1 servidor Discord", "10 usuários", "Regras básicas"],
      popular: false,
    },
    {
      name: "Profissional",
      price: "R$ 29",
      period: "/mês",
      description: "Para pequenas comunidades",
      features: [
        "5 servidores Discord",
        "100 usuários",
        "Regras avançadas",
        "Suporte prioritário",
      ],
      popular: true,
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
        "Suporte 24/7",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/20 bg-white/10 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">GuildSync</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate("/login")}
                variant="ghost"
                className="text-white hover:bg-white/20"
              >
                Entrar
              </Button>
              <Button
                onClick={() => navigate("/signup")}
                className="bg-white text-[#5865F2] hover:bg-white/90"
              >
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <Badge className="mb-6 border-white/20 bg-white/10 text-white">
            <Sparkles className="mr-2 h-4 w-4" />
            Plataforma completa para Discord
          </Badge>

          <h1 className="mb-6 text-5xl leading-tight font-bold md:text-6xl">
            Conecte, Gerencie e<span className="text-[#00D4FF]"> Monetize</span>{" "}
            seus
            <span className="text-[#57F287]"> Grupos Discord</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-300">
            A única plataforma que você precisa para automatizar o gerenciamento
            de membros, integrar pagamentos e criar regras personalizadas para
            seus servidores Discord.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="h-12 bg-white px-8 text-[#5865F2] hover:bg-white/90"
              onClick={() => navigate("/signup")}
            >
              Começar Grátis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 border-white/30 px-8 text-white hover:bg-white/10"
            >
              Ver Demonstração
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Tudo que você precisa em uma plataforma
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-300">
              Simplifique o gerenciamento dos seus servidores Discord com
              automação inteligente
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-white/20 bg-white/10 text-white backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#5865F2]/20">
                    <feature.icon className="h-6 w-6 text-[#5865F2]" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Planos para todos os tamanhos
            </h2>
            <p className="text-lg text-slate-300">
              Escolha o plano ideal para sua comunidade
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-white/20 bg-white/10 text-white backdrop-blur-sm ${
                  plan.popular ? "scale-105 ring-2 ring-[#00D4FF]" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#00D4FF] text-slate-900">
                      <Star className="mr-1 h-3 w-3" />
                      Mais Popular
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

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <Check className="h-5 w-5 text-[#57F287]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`h-12 w-full ${
                      plan.popular
                        ? "bg-[#00D4FF] text-slate-900 hover:bg-[#00D4FF]/90"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    {plan.price === "R$ 0" ? "Começar Grátis" : "Assinar Agora"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Pronto para automatizar seus servidores?
          </h2>
          <p className="mb-8 text-xl text-slate-300">
            Junte-se a milhares de administradores que já simplificaram o
            gerenciamento de suas comunidades
          </p>
          <Button
            size="lg"
            className="h-12 bg-white px-8 text-[#5865F2] hover:bg-white/90"
          >
            Começar Agora - É Grátis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-white/5 py-8 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 text-center text-slate-400">
          <p>&copy; 2024 GuildSync. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
