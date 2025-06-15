"use client";

import { Home } from "lucide-react";
import { useNavigate, useRouteError } from "react-router";

import { Button } from "@/components/ui/button";

export default function Error() {
  /**
   * ! Com esse error, poderia realizar uma requisição para salvamento desse erro especifico -logs
   */

  const error = useRouteError() as Error;
  const navitate = useNavigate();

  console.log(error);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, algo aconteceu...</h1>
      <p className="text-accent-foreground">
        Um error aconteceu na aplicação, abaixo você encontra mais detalhes
      </p>

      <Button
        className="flex items-center justify-center gap-2 bg-[#4361EE] hover:bg-[#3A56D4]"
        onClick={() => navitate("/")}
      >
        <Home className="h-4 w-4" />
        <span>Voltar para a página inicial</span>
      </Button>
    </div>
  );
}
