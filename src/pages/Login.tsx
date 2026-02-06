import EasySuiteLogo from "@/components/EasySuiteLogo";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-erp-compta/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-erp-market/10 rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-24 h-24 bg-erp-rh/10 rounded-full" />

        <div className="relative z-10">
          <EasySuiteLogo size="lg" variant="light" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl font-bold text-primary-foreground leading-tight">
            Unifiez vos outils.
            <br />
            <span className="text-accent">Pilotez votre activité.</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-md">
            La plateforme ERP unifiée pour piloter votre comptabilité, vos ressources humaines et vos activités commerciales.
          </p>

          {/* Module indicators */}
          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-erp-compta" />
              <span className="text-sm text-primary-foreground/70">Comptabilité</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-erp-market" />
              <span className="text-sm text-primary-foreground/70">Ventes</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-erp-rh" />
              <span className="text-sm text-primary-foreground/70">RH</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-primary-foreground/60">
          © 2024 EasySuite. Tous droits réservés.
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <EasySuiteLogo size="lg" />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-foreground">
              Bienvenue sur EasySuite
            </h2>
            <p className="mt-2 text-muted-foreground">
              Connectez-vous pour accéder à vos modules
            </p>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
