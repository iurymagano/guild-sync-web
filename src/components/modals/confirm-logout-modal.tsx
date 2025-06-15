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
import { LogOut, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface ConfirmLogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConfirmLogoutModal({
  open,
  onOpenChange,
}: ConfirmLogoutModalProps) {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoggingOut(false);
    onOpenChange(false);
    // Redirect to login page
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <LogOut className="h-5 w-5" />
            Confirmar Logout
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Tem certeza que deseja sair da sua conta?
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="rounded-lg border border-[#FEE75C]/20 bg-[#FEE75C]/10 p-3">
            <div className="mb-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-[#FEE75C]" />
              <span className="text-sm font-medium text-[#FEE75C]">
                Atenção
              </span>
            </div>
            <p className="text-xs text-slate-300">
              Você precisará fazer login novamente para acessar sua conta.
            </p>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-white/30 text-white hover:bg-white/10"
          >
            Cancelar
          </Button>
          <Button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isLoggingOut ? (
              "Saindo..."
            ) : (
              <>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
