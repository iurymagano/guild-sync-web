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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Shield, Crown, User, Save } from "lucide-react";
import { useState } from "react";

interface ManageRolesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: {
    name: string;
    username: string;
    avatar: string;
  };
}

export function ManageRolesModal({
  open,
  onOpenChange,
  user,
}: ManageRolesModalProps) {
  const [roles, setRoles] = useState([
    {
      id: "premium",
      name: "@Premium",
      active: true,
      color: "#5865F2",
      icon: Crown,
    },
    {
      id: "moderator",
      name: "@Moderador",
      active: true,
      color: "#57F287",
      icon: Shield,
    },
    { id: "vip", name: "@VIP", active: false, color: "#FEE75C", icon: Crown },
    {
      id: "student",
      name: "@Estudante",
      active: false,
      color: "#00D4FF",
      icon: User,
    },
    {
      id: "supporter",
      name: "@Apoiador",
      active: false,
      color: "#EB459E",
      icon: User,
    },
  ]);
  const [isSaving, setIsSaving] = useState(false);

  const toggleRole = (roleId: string) => {
    setRoles(
      roles.map((role) =>
        role.id === roleId ? { ...role, active: !role.active } : role,
      ),
    );
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSaving(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Gerenciar Cargos
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Adicione ou remova cargos do usuário nos servidores conectados.
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

          {/* Roles List */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-slate-300">
              Cargos Disponíveis:
            </h4>
            {roles.map((role) => (
              <div
                key={role.id}
                className="flex items-center justify-between rounded-lg bg-white/5 p-3"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${role.color}20` }}
                  >
                    <role.icon
                      className="h-4 w-4"
                      style={{ color: role.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{role.name}</p>
                    {role.active && (
                      <Badge
                        className="mt-1 text-xs"
                        style={{
                          backgroundColor: `${role.color}20`,
                          color: role.color,
                          border: `1px solid ${role.color}30`,
                        }}
                      >
                        Ativo
                      </Badge>
                    )}
                  </div>
                </div>
                <Switch
                  checked={role.active}
                  onCheckedChange={() => toggleRole(role.id)}
                />
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-[#00D4FF]/20 bg-[#00D4FF]/10 p-3">
            <p className="text-xs text-slate-300">
              <strong>Nota:</strong> As alterações serão aplicadas em todos os
              servidores onde o usuário está presente.
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
