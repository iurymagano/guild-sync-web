"use client";

import { FileQuestion, Home } from "lucide-react";
import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navitate = useNavigate();

  return (
    <div className="container mx-auto flex min-h-screen min-w-full flex-col items-center justify-center bg-[#F9F9F3]">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F5F5]">
            <FileQuestion className="h-12 w-12 text-[#4361EE]" />
          </div>
        </div>

        <h1 className="mb-2 text-3xl font-bold text-[#1A1A3E]">
          Página não encontrada
        </h1>

        <p className="mb-8 text-[#7070A7]">
          A página que você está procurando não existe ou foi removida.
        </p>

        <div className="space-y-3">
          <Button
            className="flex w-full items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3A56D4]"
            onClick={() => navitate("/")}
          >
            <Home className="h-4 w-4" />
            <span>Voltar para a página inicial</span>
          </Button>
        </div>
      </div>

      <div className="mt-8 text-sm text-[#7070A7]">
        Código de erro: 404 | Página não encontrada
      </div>
    </div>
  );
}
