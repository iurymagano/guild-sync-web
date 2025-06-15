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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, FileText } from "lucide-react";
import { useState } from "react";

interface ExportDataModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "users" | "history" | "rules";
}

export function ExportDataModal({
  open,
  onOpenChange,
  type,
}: ExportDataModalProps) {
  const [format, setFormat] = useState("csv");
  const [dateRange, setDateRange] = useState("30d");
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [isExporting, setIsExporting] = useState(false);

  const getFieldOptions = () => {
    switch (type) {
      case "users":
        return [
          { id: "name", label: "Nome" },
          { id: "username", label: "Username" },
          { id: "discord_id", label: "Discord ID" },
          { id: "email", label: "E-mail" },
          { id: "roles", label: "Cargos" },
          { id: "status", label: "Status" },
          { id: "payment_status", label: "Status de Pagamento" },
          { id: "joined_at", label: "Data de Entrada" },
          { id: "last_seen", label: "Último Acesso" },
        ];
      case "history":
        return [
          { id: "timestamp", label: "Data/Hora" },
          { id: "type", label: "Tipo de Ação" },
          { id: "user", label: "Usuário" },
          { id: "server", label: "Servidor" },
          { id: "rule", label: "Regra" },
          { id: "status", label: "Status" },
          { id: "details", label: "Detalhes" },
        ];
      case "rules":
        return [
          { id: "name", label: "Nome da Regra" },
          { id: "description", label: "Descrição" },
          { id: "server", label: "Servidor" },
          { id: "trigger", label: "Gatilho" },
          { id: "role", label: "Cargo" },
          { id: "status", label: "Status" },
          { id: "executions", label: "Execuções" },
          { id: "created_at", label: "Data de Criação" },
        ];
      default:
        return [];
    }
  };

  const handleFieldToggle = (fieldId: string) => {
    setSelectedFields((prev) =>
      prev.includes(fieldId)
        ? prev.filter((id) => id !== fieldId)
        : [...prev, fieldId],
    );
  };

  const handleExport = async () => {
    setIsExporting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsExporting(false);
    onOpenChange(false);
  };

  const getTitle = () => {
    switch (type) {
      case "users":
        return "Exportar Usuários";
      case "history":
        return "Exportar Histórico";
      case "rules":
        return "Exportar Regras";
      default:
        return "Exportar Dados";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-white/20 bg-slate-900 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            {getTitle()}
          </DialogTitle>
          <DialogDescription className="text-slate-300">
            Configure as opções de exportação dos dados.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Format */}
          <div className="space-y-2">
            <Label htmlFor="format">Formato do Arquivo</Label>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger className="border-white/20 bg-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="csv">CSV (Excel)</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date Range */}
          {type === "history" && (
            <div className="space-y-2">
              <Label htmlFor="dateRange">Período</Label>
              <Select value={dateRange} onValueChange={setDateRange}>
                <SelectTrigger className="border-white/20 bg-white/10 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 dias</SelectItem>
                  <SelectItem value="30d">Últimos 30 dias</SelectItem>
                  <SelectItem value="90d">Últimos 90 dias</SelectItem>
                  <SelectItem value="all">Todos os registros</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Fields Selection */}
          <div className="space-y-3">
            <Label>Campos a Exportar</Label>
            <div className="max-h-48 space-y-2 overflow-y-auto">
              {getFieldOptions().map((field) => (
                <div key={field.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={field.id}
                    checked={selectedFields.includes(field.id)}
                    onCheckedChange={() => handleFieldToggle(field.id)}
                  />
                  <Label htmlFor={field.id} className="cursor-pointer text-sm">
                    {field.label}
                  </Label>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                setSelectedFields(getFieldOptions().map((f) => f.id))
              }
              className="border-white/30 text-white hover:bg-white/10"
            >
              Selecionar Todos
            </Button>
          </div>

          <div className="rounded-lg border border-[#00D4FF]/20 bg-[#00D4FF]/10 p-3">
            <div className="mb-1 flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#00D4FF]" />
              <span className="text-sm font-medium text-[#00D4FF]">
                Informação
              </span>
            </div>
            <p className="text-xs text-slate-300">
              O arquivo será gerado e enviado para seu e-mail. Arquivos grandes
              podem levar alguns minutos.
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
            onClick={handleExport}
            disabled={selectedFields.length === 0 || isExporting}
            className="bg-[#5865F2] text-white hover:bg-[#4752C4]"
          >
            {isExporting ? (
              "Exportando..."
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Exportar
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
