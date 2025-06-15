"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Lock,
  Bell,
  Shield,
  CreditCard,
  Trash2,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold text-white">
          Configurações da Conta
        </h1>
        <p className="text-slate-300">
          Gerencie suas informações pessoais e preferências
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Profile Section */}
        <div className="space-y-6 lg:col-span-2">
          {/* Personal Information */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Informações Pessoais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    src="/placeholder.svg?height=80&width=80"
                    alt="João Silva"
                  />
                  <AvatarFallback className="text-2xl text-neutral-400">
                    JS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button
                    variant="outline"
                    className="mb-2 border-white/30 text-white hover:bg-white/10"
                  >
                    Alterar Foto
                  </Button>
                  <p className="text-sm text-slate-400">
                    JPG, PNG ou GIF. Máximo 2MB.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <Input
                    id="firstName"
                    defaultValue="João"
                    className="border-white/20 bg-white/10 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input
                    id="lastName"
                    defaultValue="Silva"
                    className="border-white/20 bg-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="joao.silva@email.com"
                  className="border-white/20 bg-white/10 text-white"
                />
              </div>

              <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
                <Save className="mr-2 h-4 w-4" />
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5" />
                Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Senha Atual</Label>
                <div className="relative">
                  <Input
                    id="currentPassword"
                    type={showCurrentPassword ? "text" : "password"}
                    className="border-white/20 bg-white/10 pr-12 text-white"
                    placeholder="Digite sua senha atual"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword">Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    className="border-white/20 bg-white/10 pr-12 text-white"
                    placeholder="Digite a nova senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="border-white/20 bg-white/10 pr-12 text-white"
                    placeholder="Confirme a nova senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <Button className="bg-[#5865F2] text-white hover:bg-[#4752C4]">
                <Lock className="mr-2 h-4 w-4" />
                Alterar Senha
              </Button>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Notificações por E-mail</h4>
                  <p className="text-sm text-slate-400">
                    Receba atualizações importantes por e-mail
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Relatórios de Atividade</h4>
                  <p className="text-sm text-slate-400">
                    Resumo semanal das atividades dos servidores
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Alertas de Erro</h4>
                  <p className="text-sm text-slate-400">
                    Notificações quando ocorrem erros no sistema
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Novidades e Atualizações</h4>
                  <p className="text-sm text-slate-400">
                    Informações sobre novos recursos e melhorias
                  </p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Account Status */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Status da Conta
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Plano Atual</span>
                <Badge className="border-[#57F287]/30 bg-[#57F287]/20 text-[#57F287]">
                  Gratuito
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Conta Verificada</span>
                <Badge className="border-[#FEE75C]/30 bg-[#FEE75C]/20 text-[#FEE75C]">
                  Pendente
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Servidores</span>
                <span className="text-sm text-slate-300">2 / 1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Usuários</span>
                <span className="text-sm text-slate-300">334 / 10</span>
              </div>
              <Button
                size="sm"
                className="w-full bg-[#5865F2] text-white hover:bg-[#4752C4]"
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Fazer Upgrade
              </Button>
            </CardContent>
          </Card>

          {/* Discord Integration */}
          <Card className="border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Integração Discord</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Discord"
                  />
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">João Silva#1234</p>
                  <p className="text-sm text-slate-400">Conectado</p>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="w-full border-white/30 text-white hover:bg-white/10"
              >
                Reconectar Discord
              </Button>
            </CardContent>
          </Card>

          {/* Danger Zone */}
          <Card className="border-red-500/20 bg-red-500/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-400">
                <Trash2 className="h-5 w-5" />
                Zona de Perigo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="mb-2 font-medium text-red-400">Excluir Conta</h4>
                <p className="mb-4 text-sm text-slate-400">
                  Esta ação é irreversível. Todos os seus dados serão
                  permanentemente removidos.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Excluir Conta
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
