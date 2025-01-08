import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function PageNavigation() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant="outline"
        size="icon"
        onClick={() => navigate(-1)}
        title="Retour"
      >
        <ArrowLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => navigate("/")}
        title="Accueil"
      >
        <Home className="h-4 w-4" />
      </Button>
    </div>
  );
}