import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ERPCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  variant: "compta" | "market" | "rh";
  onAccess: () => void;
  delay?: number;
}

const ERPCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  variant,
  onAccess,
  delay = 0,
}: ERPCardProps) => {
  const variantStyles = {
    compta: {
      card: "erp-card-compta",
      iconBg: "icon-bg-compta",
      button: "btn-erp-compta",
      accent: "text-erp-compta",
    },
    market: {
      card: "erp-card-market",
      iconBg: "icon-bg-market",
      button: "btn-erp-market",
      accent: "text-erp-market",
    },
    rh: {
      card: "erp-card-rh",
      iconBg: "icon-bg-rh",
      button: "btn-erp-rh",
      accent: "text-erp-rh",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={`${styles.card} animate-slide-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`rounded-xl p-3 ${styles.iconBg}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className={`text-sm font-medium ${styles.accent}`}>{subtitle}</p>
        </div>
      </div>

      <p className="mt-4 text-secondary-foreground leading-relaxed">
        {description}
      </p>

      <Button
        onClick={onAccess}
        className={`mt-6 w-full h-11 font-semibold transition-all duration-200 ${styles.button}`}
      >
        Accéder à {title}
      </Button>
    </div>
  );
};

export default ERPCard;
