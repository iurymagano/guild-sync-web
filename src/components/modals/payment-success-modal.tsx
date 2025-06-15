"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

interface PaymentSuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  payment: {
    id: string;
    amount: string;
    plan: string;
    date: string;
  };
}

export function PaymentSuccessModal({
  open,
  onOpenChange,
  payment,
}: PaymentSuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/20 bg-slate-900 text-white">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#57F287]/10">
            <CheckCircle className="h-8 w-8 text-[#57F287]" />
          </div>
          <DialogTitle className="text-2xl">Pagamento Confirmado!</DialogTitle>
          <DialogDescription className="text-slate-300">
            Seu upgrade foi processado com sucesso. Bem-vindo ao plano{" "}
            {payment.plan}!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-3 rounded-lg bg-white/5 p-4">
            <div className="flex justify-between">
              <span className="text-slate-400">ID da Transação:</span>
              <span className="font-mono text-sm">{payment.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Valor:</span>
              <span className="font-semibold">{payment.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Plano:</span>
              <Badge className="border-[#5865F2]/30 bg-[#5865F2]/20 text-[#5865F2]">
                {payment.plan}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Data:</span>
              <span>{payment.date}</span>
            </div>
          </div>

          <div className="rounded-lg border border-[#57F287]/20 bg-[#57F287]/10 p-4">
            <h4 className="mb-2 font-semibold text-[#57F287]">
              Recursos Desbloqueados:
            </h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Até 5 servidores Discord</li>
              <li>• Até 100 usuários</li>
              <li>• Integração com Stripe</li>
              <li>• Suporte prioritário</li>
            </ul>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10"
          >
            <Download className="mr-2 h-4 w-4" />
            Baixar Recibo
          </Button>
          <Button
            onClick={() => onOpenChange(false)}
            className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
          >
            Ir para Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
