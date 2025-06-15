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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Ban, AlertTriangle } from "lucide-react";
import { useState } from "react";

interface BanUserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
}

export function BanUserModal({ open, onOpenChange, user }: BanUserModalProps) {
  const [reason, setReason] = useState("");
  const [duration, setDuration] = useState("");
  const [isBanning, setIsBanning] = useState(false);

  const handleBan = async () => {
    setIsBanning(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsBanning(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-red-500/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-red-400">
            <Ban className="h-5 w-5" />
            Banir Usuário
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Esta ação removerá o usuário de todos os servidores conectados.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* User Info */}
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-3">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={user.avatar || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{user.name}</p>
              <p className="text-sm text-slate-400">@{user.username}</p>
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration">Duração do Banimento</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="border-white/20 bg-white/10 text-white">
                <SelectValue placeholder="Selecione a duração" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1 hora</SelectItem>
                <SelectItem value="24h">24 horas</SelectItem>
                <SelectItem value="7d">7 dias</SelectItem>
                <SelectItem value="30d">30 dias</SelectItem>
                <SelectItem value="permanent">Permanente</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Reason */}
          <div className="space-y-2">
            <Label htmlFor="reason">Motivo do Banimento</Label>
            <Textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Descreva o motivo do banimento..."
              className="min-h-[80px] border-white/20 bg-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3">
            <div className="mb-1 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span className="text-sm font-medium text-red-400">Atenção</span>
            </div>
            <p className="text-xs text-slate-300">
              O usuário será notificado sobre o banimento e poderá contestar a
              decisão.
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
            onClick={handleBan}
            disabled={!duration || !reason || isBanning}
            className="bg-red-600 text-white hover:bg-red-700"
          >
            {isBanning ? (
              "Banindo..."
            ) : (
              <>
                <Ban className="mr-2 h-4 w-4" />
                Confirmar Banimento
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
