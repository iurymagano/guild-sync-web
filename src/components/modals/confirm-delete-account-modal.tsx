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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Trash2 } from "lucide-react";
import { useState } from "react";

interface ConfirmDeleteAccountModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConfirmDeleteAccountModal({
  open,
  onOpenChange,
}: ConfirmDeleteAccountModalProps) {
  const [confirmText, setConfirmText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirmText !== "EXCLUIR CONTA") return;

    setIsDeleting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsDeleting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-red-500/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-400">
            <AlertTriangle className="h-5 w-5" />
            Excluir Conta Permanentemente
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Esta ação é irreversível e resultará na perda permanente de todos os
            seus dados.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
            <h4 className="mb-2 font-semibold text-red-400">
              O que será excluído:
            </h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>• Todos os servidores conectados</li>
              <li>• Histórico de atividades</li>
              <li>• Configurações e regras</li>
              <li>• Dados de pagamento</li>
              <li>• Perfil e preferências</li>
            </ul>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmText">
              Digite <strong>EXCLUIR CONTA</strong> para confirmar:
            </Label>
            <Input
              id="confirmText"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="EXCLUIR CONTA"
              className="border-white/20 bg-white/10 text-white"
            />
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
            onClick={handleDelete}
            disabled={confirmText !== "EXCLUIR CONTA" || isDeleting}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isDeleting ? (
              "Excluindo..."
            ) : (
              <>
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir Conta
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
