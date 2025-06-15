import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  EyeOff,
  Users,
  CreditCard,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      {/* Left Side - Branding */}
      <div className="hidden flex-col justify-center px-12 text-white lg:flex lg:w-1/2">
        <div className="max-w-md">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Zap className="h-6 w-6 text-[#5865F2]" />
            </div>
            <h1 className="text-2xl font-bold">GuildSync</h1>
          </div>

          <h2 className="mb-6 text-4xl leading-tight font-bold">
            Conecte, Gerencie e<span className="text-[#00D4FF]"> Monetize</span>{" "}
            seus
            <span className="text-[#57F287]"> Grupos</span>
          </h2>

          <p className="mb-8 text-lg text-slate-300">
            A plataforma completa para integrar Discord com sistemas de
            pagamento e gerenciamento de comunidades.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#57F287]/20">
                <Users className="h-4 w-4 text-[#57F287]" />
              </div>
              <span className="text-slate-200">
                Gestão avançada de grupos Discord
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00D4FF]/20">
                <CreditCard className="h-4 w-4 text-[#00D4FF]" />
              </div>
              <span className="text-slate-200">
                Pagamentos integrados e automáticos
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FEE75C]/20">
                <Shield className="h-4 w-4 text-[#FEE75C]" />
              </div>
              <span className="text-slate-200">Segurança e controle total</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-[#5865F2]" />
            </div>
            <h1 className="text-xl font-bold text-white">GuildSync</h1>
          </div>

          <Card className="border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
            <CardHeader className="pb-6 text-center">
              <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                Acesse sua conta
              </CardTitle>
              <p className="text-slate-600">
                Entre para gerenciar seus grupos e pagamentos
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <Badge
                  variant="secondary"
                  className="border-[#5865F2]/20 bg-[#5865F2]/10 text-[#5865F2]"
                >
                  Discord
                </Badge>
                <Badge
                  variant="secondary"
                  className="border-emerald-200 bg-emerald-100 text-emerald-700"
                >
                  Pagamentos
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium text-slate-700">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="h-12 border-slate-200 focus-visible:border-[#5865F2] focus-visible:ring-[#5865F2]"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="font-medium text-slate-700"
                >
                  Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="h-12 border-slate-200 pr-12 focus-visible:border-[#5865F2] focus-visible:ring-[#5865F2]"
                    placeholder="Digite sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-slate-300 text-[#5865F2] focus:ring-[#5865F2]"
                  />
                  <span className="text-sm text-slate-600">Lembrar de mim</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-[#5865F2] hover:text-[#4752C4]"
                >
                  Esqueceu a senha?
                </a>
              </div>

              <Button className="group h-12 w-full bg-gradient-to-r from-[#5865F2] to-[#4752C4] font-semibold text-white transition-all duration-300 hover:from-[#4752C4] hover:to-[#3C45A5]">
                Entrar na plataforma
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white/95 px-4 text-slate-500 backdrop-blur-sm">
                    Ou continue com
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="h-12 w-full border-[#5865F2]/20 text-[#5865F2] transition-all duration-200 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/5"
              >
                <svg
                  className="mr-3 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Conectar com Discord
              </Button>

              <div className="text-center text-sm text-slate-600">
                Não tem uma conta?{" "}
                <a
                  href="#"
                  className="font-medium text-[#5865F2] hover:text-[#4752C4]"
                >
                  Criar conta gratuita
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <p className="text-xs text-white/70">
              Ao continuar, você concorda com nossos{" "}
              <a href="#" className="text-white hover:underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-white hover:underline">
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
