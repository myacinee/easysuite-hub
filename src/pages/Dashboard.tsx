import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import ERPCard from "@/components/ERPCard";
import { Calculator, ShoppingBag, Users, ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  modules: string[];
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("easysuite_user");
    if (!userData) {
      navigate("/");
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  const handleAccessModule = (moduleName: string, moduleKey: string) => {
    if (user?.modules.includes(moduleKey)) {
      toast.success(`Accès à ${moduleName}`, {
        description: "Redirection vers le module...",
      });
      // In production, this would redirect to the actual ERP module
    } else {
      toast.error("Accès non autorisé", {
        description: "Vous ne disposez pas des droits nécessaires pour accéder à ce module.",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">
            Bonjour {user.firstName},
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Voici un aperçu de vos modules et de l'activité récente.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-4 shadow-card animate-slide-up" style={{ animationDelay: "0ms" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Modules actifs</span>
              <span className="text-2xl font-bold text-foreground">3</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Utilisateurs</span>
              <span className="text-2xl font-bold text-foreground">24</span>
            </div>
          </div>
          <div className="bg-card rounded-xl p-4 shadow-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Rôle</span>
              <span className="text-lg font-semibold text-accent">{user.role}</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex items-center gap-2 mb-6 text-muted-foreground animate-fade-in" style={{ animationDelay: "300ms" }}>
          <ArrowRight className="h-4 w-4" />
          <span className="text-sm">Sélectionnez un module pour commencer ou consultez vos indicateurs clés.</span>
        </div>

        {/* ERP Module Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ERPCard
            title="EasyCompta"
            subtitle="Comptabilité & Finance"
            description="Suivi financier, facturation, rapports et écritures comptables."
            icon={Calculator}
            variant="compta"
            onAccess={() => handleAccessModule("EasyCompta", "compta")}
            delay={400}
          />
          <ERPCard
            title="EasyMarket"
            subtitle="Ventes & Activité commerciale"
            description="Gestion des ventes, clients, produits et performances."
            icon={ShoppingBag}
            variant="market"
            onAccess={() => handleAccessModule("EasyMarket", "market")}
            delay={500}
          />
          <ERPCard
            title="EasyRH"
            subtitle="Ressources Humaines"
            description="Collaborateurs, congés, paie et organisation interne."
            icon={Users}
            variant="rh"
            onAccess={() => handleAccessModule("EasyRH", "rh")}
            delay={600}
          />
        </div>

        {/* Footer info */}
        <div className="mt-12 text-center text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "700ms" }}>
          <p>Bienvenue sur votre espace de gestion unifiée.</p>
          <p className="mt-1">Authentification SSO sécurisée • Données cloisonnées par module</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
