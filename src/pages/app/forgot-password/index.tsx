"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowLeft, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = () => {
    setEmailSent(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <Zap className="h-5 w-5 text-[#5865F2]" />
          </div>
          <h1 className="text-xl font-bold text-white">GroupSync</h1>
        </div>

        <Card className="border-0 bg-white/95 shadow-2xl backdrop-blur-sm">
          <CardHeader className="pb-6 text-center">
            {!emailSent ? (
              <>
                <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                  Esqueceu sua senha?
                </CardTitle>
                <p className="text-slate-600">
                  Digite seu e-mail para receber as instruções de recuperação
                </p>
              </>
            ) : (
              <>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#57F287]/10">
                  <CheckCircle className="h-8 w-8 text-[#57F287]" />
                </div>
                <CardTitle className="mb-2 text-2xl font-bold text-slate-800">
                  E-mail enviado!
                </CardTitle>
                <p className="text-slate-600">
                  Verifique sua caixa de entrada e siga as instruções para
                  redefinir sua senha
                </p>
              </>
            )}
          </CardHeader>

          <CardContent className="space-y-6">
            {!emailSent ? (
              <>
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

                <Button
                  onClick={handleSubmit}
                  className="h-12 w-full bg-gradient-to-r from-[#5865F2] to-[#4752C4] font-semibold text-white hover:from-[#4752C4] hover:to-[#3C45A5]"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar instruções
                </Button>
              </>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border border-[#57F287]/20 bg-[#57F287]/10 p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Não recebeu o e-mail?</strong> Verifique sua pasta
                    de spam ou aguarde alguns minutos.
                  </p>
                </div>

                <Button
                  onClick={() => setEmailSent(false)}
                  variant="outline"
                  className="h-12 w-full border-slate-200 text-slate-700 hover:bg-slate-50"
                >
                  Tentar outro e-mail
                </Button>
              </div>
            )}

            <div className="text-center">
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-[#5865F2] hover:text-[#4752C4]"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao login
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
