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
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings, Save, Trash2 } from "lucide-react";
import { useState } from "react";

interface ServerSettingsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  server: {
    id: string;
    name: string;
    members: number;
    avatar: string;
  };
}

export function ServerSettingsModal({
  open,
  onOpenChange,
  server,
}: ServerSettingsModalProps) {
  const [settings, setSettings] = useState({
    name: server.name,
    description: "",
    autoRole: true,
    welcomeMessage: true,
    logChannel: "",
    prefix: "!",
    moderationEnabled: true,
    paymentIntegration: true,
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
      <DialogContent className="max-h-[80vh] max-w-2xl overflow-y-auto border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Configurações do Servidor
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Personalize as configurações do bot para {server.name}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Server Info */}
          <div className="flex items-center gap-3 rounded-lg bg-white/5 p-4">
            <img
              src={server.avatar || "/placeholder.svg"}
              alt={server.name}
              className="h-12 w-12 rounded-lg"
            />
            <div>
              <h3 className="font-semibold">{server.name}</h3>
              <p className="text-sm text-slate-400">{server.members} membros</p>
            </div>
            <Badge className="ml-auto border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
              Conectado
            </Badge>
          </div>

          {/* Basic Settings */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Configurações Básicas</h4>

            <div className="space-y-2">
              <Label htmlFor="serverName">Nome de Exibição</Label>
              <Input
                id="serverName"
                value={settings.name}
                onChange={(e) =>
                  setSettings({ ...settings, name: e.target.value })
                }
                className="border-white/20 bg-white/10 text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={settings.description}
                onChange={(e) =>
                  setSettings({ ...settings, description: e.target.value })
                }
                placeholder="Descreva o propósito deste servidor..."
                className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="prefix">Prefixo de Comandos</Label>
                <Input
                  id="prefix"
                  value={settings.prefix}
                  onChange={(e) =>
                    setSettings({ ...settings, prefix: e.target.value })
                  }
                  className="border-white/20 bg-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logChannel">Canal de Logs</Label>
                <Input
                  id="logChannel"
                  value={settings.logChannel}
                  onChange={(e) =>
                    setSettings({ ...settings, logChannel: e.target.value })
                  }
                  placeholder="#logs"
                  className="border-white/20 bg-white/10 text-white placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Feature Toggles */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Funcionalidades</h4>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <h5 className="font-medium">
                    Atribuição Automática de Cargos
                  </h5>
                  <p className="text-sm text-slate-400">
                    Aplicar cargos automaticamente baseado em regras
                  </p>
                </div>
                <Switch
                  checked={settings.autoRole}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, autoRole: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <h5 className="font-medium">Mensagem de Boas-vindas</h5>
                  <p className="text-sm text-slate-400">
                    Enviar mensagem quando novos membros entrarem
                  </p>
                </div>
                <Switch
                  checked={settings.welcomeMessage}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, welcomeMessage: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <h5 className="font-medium">Moderação Automática</h5>
                  <p className="text-sm text-slate-400">
                    Filtros de spam e moderação básica
                  </p>
                </div>
                <Switch
                  checked={settings.moderationEnabled}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, moderationEnabled: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-white/5 p-3">
                <div>
                  <h5 className="font-medium">Integração de Pagamentos</h5>
                  <p className="text-sm text-slate-400">
                    Conectar com sistemas de pagamento
                  </p>
                </div>
                <Switch
                  checked={settings.paymentIntegration}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, paymentIntegration: checked })
                  }
                />
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-400">
              Zona de Perigo
            </h4>
            <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
              <h5 className="mb-2 font-medium text-red-400">
                Desconectar Servidor
              </h5>
              <p className="mb-3 text-sm text-slate-300">
                Remove o bot do servidor e exclui todas as configurações. Esta
                ação é irreversível.
              </p>
              <Button
                variant="outline"
                className="border-red-500/30 text-red-400 hover:bg-red-500/10"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Desconectar Servidor
              </Button>
            </div>
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
                Salvar Configurações
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
