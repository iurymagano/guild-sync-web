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
import { MessageSquare, Send } from "lucide-react";
import { useState } from "react";

interface SendMessageModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
}

export function SendMessageModal({
  open,
  onOpenChange,
  user,
}: SendMessageModalProps) {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("dm");
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;

    setIsSending(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSending(false);
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Enviar Mensagem
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Envie uma mensagem direta para o usuário.
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

          {/* Message Type */}
          <div className="space-y-2">
            <Label htmlFor="messageType">Tipo de Mensagem</Label>
            <Select value={messageType} onValueChange={setMessageType}>
              <SelectTrigger className="border-white/20 bg-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dm">Mensagem Direta</SelectItem>
                <SelectItem value="warning">Aviso</SelectItem>
                <SelectItem value="notification">Notificação</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="min-h-[100px] border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              maxLength={2000}
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>Máximo 2000 caracteres</span>
              <span>{message.length}/2000</span>
            </div>
          </div>

          {messageType === "warning" && (
            <div className="rounded-lg border border-[#FEE75C]/20 bg-[#FEE75C]/10 p-3">
              <p className="text-xs text-slate-300">
                <strong>Aviso:</strong> Esta mensagem será marcada como um aviso
                oficial e ficará registrada no histórico.
              </p>
            </div>
          )}
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
            onClick={handleSend}
            disabled={!message.trim() || isSending}
            className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
          >
            {isSending ? (
              "Enviando..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
