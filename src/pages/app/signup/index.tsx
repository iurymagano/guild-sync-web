import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, EyeOff, Zap, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900">
      {/* Left Side - Benefits */}
      <div className="hidden flex-col justify-center px-12 text-white lg:flex lg:w-1/2">
        <div className="max-w-md">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <Zap className="h-6 w-6 text-[#5865F2]" />
            </div>
            <h1 className="text-2xl font-bold">GuildSync</h1>
          </div>

          <h2 className="mb-6 text-4xl leading-tight font-bold">
            Comece <span className="text-[#57F287]">grátis</span> hoje mesmo
          </h2>

          <p className="mb-8 text-lg text-slate-300">
            Crie sua conta e tenha acesso imediato às funcionalidades básicas.
            Upgrade quando precisar de mais recursos.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#57F287]/20">
                <Check className="h-3 w-3 text-[#57F287]" />
              </div>
              <span className="text-slate-200">Conta gratuita para sempre</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#57F287]/20">
                <Check className="h-3 w-3 text-[#57F287]" />
              </div>
              <span className="text-slate-200">
                1 servidor Discord incluído
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#57F287]/20">
                <Check className="h-3 w-3 text-[#57F287]" />
              </div>
              <span className="text-slate-200">
                Até 10 usuários gerenciados
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#57F287]/20">
                <Check className="h-3 w-3 text-[#57F287]" />
              </div>
              <span className="text-slate-200">Suporte por e-mail</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
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
                Criar conta
              </CardTitle>
              <p className="text-slate-600">Preencha os dados para começar</p>
              <Badge className="mx-auto border-[#57F287]/20 bg-[#57F287]/10 text-[#57F287]">
                Grátis para sempre
              </Badge>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-medium text-slate-700">
                  Nome completo
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="h-12 border-slate-200 focus-visible:border-[#5865F2] focus-visible:ring-[#5865F2]"
                  placeholder="Seu nome completo"
                />
              </div>

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
                    placeholder="Mínimo 8 caracteres"
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

              <div className="space-y-2">
                <Label
                  htmlFor="confirmPassword"
                  className="font-medium text-slate-700"
                >
                  Confirmar senha
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="h-12 border-slate-200 pr-12 focus-visible:border-[#5865F2] focus-visible:ring-[#5865F2]"
                    placeholder="Digite a senha novamente"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 transition-colors hover:text-slate-600"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-slate-300 text-[#5865F2] focus:ring-[#5865F2]"
                />
                <span className="text-sm text-slate-600">
                  Eu concordo com os{" "}
                  <a
                    href="#"
                    className="font-medium text-[#5865F2] hover:text-[#4752C4]"
                  >
                    Termos de Uso
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

              <Button className="group h-12 w-full bg-gradient-to-r from-[#5865F2] to-[#4752C4] font-semibold text-white transition-all duration-300 hover:from-[#4752C4] hover:to-[#3C45A5]">
                Criar conta gratuita
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="text-center text-sm text-slate-600">
                Já tem uma conta?{" "}
                <a
                  href="#"
                  className="font-medium text-[#5865F2] hover:text-[#4752C4]"
                >
                  Fazer login
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
