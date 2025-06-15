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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Edit, Save } from "lucide-react";
import { useState } from "react";

interface EditRuleModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  rule: {
    id: string;
    name: string;
    description: string;
    server: string;
    trigger: string;
    role: string;
    status: string;
  };
}

export function EditRuleModal({
  open,
  onOpenChange,
  rule,
}: EditRuleModalProps) {
  const [formData, setFormData] = useState({
    name: rule.name,
    description: rule.description,
    server: rule.server,
    trigger: rule.trigger,
    role: rule.role,
    active: rule.status === "active",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Editar Regra
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Modifique as configurações da regra de acesso.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ruleName">Nome da Regra</Label>
              <Input
                id="ruleName"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-white/20 bg-white/10 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="server">Servidor</Label>
              <Select
                value={formData.server}
                onValueChange={(value) =>
                  setFormData({ ...formData, server: value })
                }
              >
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Comunidade Tech">
                    Comunidade Tech
                  </SelectItem>
                  <SelectItem value="Curso de Programação">
                    Curso de Programação
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="trigger">Gatilho</Label>
              <Select
                value={formData.trigger}
                onValueChange={(value) =>
                  setFormData({ ...formData, trigger: value })
                }
              >
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payment">Pagamento Recebido</SelectItem>
                  <SelectItem value="enrollment">
                    Matrícula Confirmada
                  </SelectItem>
                  <SelectItem value="subscription_expired">
                    Assinatura Expirada
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Cargo a Atribuir</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="border-white/20 bg-white/10 text-white"
              />
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-white/5 p-4">
            <div>
              <h4 className="font-medium">Regra Ativa</h4>
              <p className="text-sm text-slate-400">
                A regra será executada automaticamente quando ativada
              </p>
            </div>
            <Switch
              checked={formData.active}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, active: checked })
              }
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
            onClick={handleSave}
            disabled={isSaving}
            className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
          >
            {isSaving ? (
              "Salvando..."
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
