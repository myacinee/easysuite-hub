import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail, AlertCircle, Shield } from "lucide-react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Veuillez renseigner tous les champs requis");
      return;
    }

    setIsLoading(true);

    // Simulate authentication delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication - in production, this would call an API
    if (email && password) {
      // Store mock user data
      localStorage.setItem("easysuite_user", JSON.stringify({
        email,
        firstName: "Jean",
        lastName: "Dupont",
        role: "Admin",
        modules: ["compta", "market", "rh"]
      }));
      navigate("/dashboard");
    } else {
      setError("Adresse e-mail ou mot de passe incorrect");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="flex items-center gap-3 rounded-lg bg-destructive/10 p-4 text-sm text-destructive animate-scale-in">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="email" className="text-secondary-foreground font-medium">
          Adresse e-mail
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="Adresse e-mail professionnelle"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 pl-11 bg-card border-border focus:border-accent focus:ring-accent"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-secondary-foreground font-medium">
          Mot de passe
        </Label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="password"
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 pl-11 bg-card border-border focus:border-accent focus:ring-accent"
          />
        </div>
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 transition-all duration-200"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
            Connexion...
          </div>
        ) : (
          "Se connecter"
        )}
      </Button>

      <div className="flex flex-col items-center gap-3 pt-2">
        <button
          type="button"
          className="text-sm text-accent hover:text-accent/80 hover:underline transition-colors"
        >
          Mot de passe oublié ?
        </button>
        <button
          type="button"
          className="text-sm text-muted-foreground hover:text-secondary-foreground transition-colors"
        >
          Contacter l'administrateur
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 pt-4 text-xs text-muted-foreground">
        <Shield className="h-4 w-4" />
        <span>Accès sécurisé – Vos données sont protégées</span>
      </div>
    </form>
  );
};

export default LoginForm;
