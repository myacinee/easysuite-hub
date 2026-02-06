import { useNavigate } from "react-router-dom";
import DashboardHeader from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Shield, Eye, Lock, ArrowLeft } from "lucide-react";

const Settings = () => {
  const navigate = useNavigate();

  const settingsCards = [
    {
      title: "Paramètres du compte",
      description: "Gérez vos informations personnelles et vos préférences de compte.",
      icon: User,
    },
    {
      title: "Gestion des accès",
      description: "Consultez et gérez vos droits d'accès aux différents modules ERP.",
      icon: Shield,
    },
    {
      title: "Préférences d'affichage",
      description: "Personnalisez l'apparence de votre interface utilisateur.",
      icon: Eye,
    },
    {
      title: "Sécurité & mot de passe",
      description: "Modifiez votre mot de passe et configurez l'authentification à deux facteurs.",
      icon: Lock,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container py-8">
        <Button
          variant="ghost"
          className="mb-6 text-muted-foreground hover:text-foreground"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour au tableau de bord
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Paramètres</h1>
          <p className="mt-2 text-muted-foreground">
            Gérez votre compte et vos préférences EasySuite.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {settingsCards.map((card, index) => (
            <Card
              key={card.title}
              className="cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="rounded-lg bg-primary/10 p-3">
                  <card.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {card.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Configurer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Settings;
