import { useNavigate } from "react-router-dom";
import EasySuiteLogo from "@/components/EasySuiteLogo";
import { Button } from "@/components/ui/button";
import { ShieldX, ArrowLeft } from "lucide-react";

const AccessDenied = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="mb-8">
        <EasySuiteLogo size="md" />
      </div>

      <div className="text-center max-w-md animate-fade-in">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <ShieldX className="h-10 w-10 text-destructive" />
        </div>

        <h1 className="text-2xl font-bold text-foreground mb-3">
          Accès non autorisé
        </h1>

        <p className="text-muted-foreground mb-8">
          Vous ne disposez pas des droits nécessaires pour accéder à cette section.
          Veuillez contacter votre administrateur si vous pensez qu'il s'agit d'une erreur.
        </p>

        <Button
          onClick={() => navigate("/dashboard")}
          className="bg-primary hover:bg-primary/90"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au tableau de bord
        </Button>
      </div>
    </div>
  );
};

export default AccessDenied;
