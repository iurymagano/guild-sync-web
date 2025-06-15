"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ConfirmDeleteAccountModal,
  BanUserModal,
  EditRuleModal,
  ManageRolesModal,
  ServerSettingsModal,
  SendMessageModal,
  ExportDataModal,
  ConfirmLogoutModal,
  PaymentSuccessModal,
} from ".";

export default function ExampleUsage() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const sampleUser = {
    name: "João Silva",
    username: "joao_silva",
    avatar: "/placeholder.svg?height=40&width=40",
  };

  const sampleRule = {
    id: "1",
    name: "Acesso Premium",
    description: "Usuários com pagamento ativo recebem cargo Premium",
    server: "Comunidade Tech",
    trigger: "payment",
    role: "@Premium",
    status: "active",
  };

  const sampleServer = {
    id: "1",
    name: "Comunidade Tech",
    members: 245,
    avatar: "/placeholder.svg?height=40&width=40",
  };

  const samplePayment = {
    id: "pi_1234567890",
    amount: "R$ 34,22",
    plan: "Profissional",
    date: "25/03/2024",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#5865F2] to-indigo-900 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-white">
          Demonstração dos Modais
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Button
            onClick={() => setActiveModal("deleteAccount")}
            variant="outline"
            className="border-red-500/30 text-red-400"
          >
            Excluir Conta
          </Button>

          <Button
            onClick={() => setActiveModal("banUser")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Banir Usuário
          </Button>

          <Button
            onClick={() => setActiveModal("editRule")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Editar Regra
          </Button>

          <Button
            onClick={() => setActiveModal("manageRoles")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Gerenciar Cargos
          </Button>

          <Button
            onClick={() => setActiveModal("serverSettings")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Config. Servidor
          </Button>

          <Button
            onClick={() => setActiveModal("sendMessage")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Enviar Mensagem
          </Button>

          <Button
            onClick={() => setActiveModal("exportData")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Exportar Dados
          </Button>

          <Button
            onClick={() => setActiveModal("logout")}
            variant="outline"
            className="border-white/30 text-white"
          >
            Logout
          </Button>

          <Button
            onClick={() => setActiveModal("paymentSuccess")}
            variant="outline"
            className="border-green-500/30 text-green-400"
          >
            Pagamento Sucesso
          </Button>
        </div>
      </div>

      {/* Modals */}
      <ConfirmDeleteAccountModal
        open={activeModal === "deleteAccount"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />

      <BanUserModal
        open={activeModal === "banUser"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        user={sampleUser}
      />

      <EditRuleModal
        open={activeModal === "editRule"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        rule={sampleRule}
      />

      <ManageRolesModal
        open={activeModal === "manageRoles"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        user={sampleUser}
      />

      <ServerSettingsModal
        open={activeModal === "serverSettings"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        server={sampleServer}
      />

      <SendMessageModal
        open={activeModal === "sendMessage"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        user={sampleUser}
      />

      <ExportDataModal
        open={activeModal === "exportData"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        type="users"
      />

      <ConfirmLogoutModal
        open={activeModal === "logout"}
        onOpenChange={(open) => !open && setActiveModal(null)}
      />

      <PaymentSuccessModal
        open={activeModal === "paymentSuccess"}
        onOpenChange={(open) => !open && setActiveModal(null)}
        payment={samplePayment}
      />
    </div>
  );
}
