interface EasySuiteLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  variant?: "light" | "dark";
}

const EasySuiteLogo = ({ size = "md", showText = true, variant = "dark" }: EasySuiteLogoProps) => {
  const sizeMap = {
    sm: { icon: 32, text: "text-lg" },
    md: { icon: 40, text: "text-xl" },
    lg: { icon: 56, text: "text-3xl" },
  };

  const { icon, text } = sizeMap[size];
  const textColor = variant === "dark" ? "text-primary" : "text-primary-foreground";

  return (
    <div className="flex items-center gap-3">
      {/* Modular Logo Icon - 3 blocks representing the 3 ERPs */}
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Background hexagon shape */}
        <path
          d="M24 2L44 14V34L24 46L4 34V14L24 2Z"
          fill="hsl(213 66% 17%)"
          className="drop-shadow-md"
        />
        
        {/* EasyCompta block - top */}
        <rect x="19" y="10" width="10" height="8" rx="2" fill="#4DA3FF" />
        
        {/* EasyMarket block - bottom left */}
        <rect x="10" y="22" width="10" height="8" rx="2" fill="#F2994A" />
        
        {/* EasyRH block - bottom right */}
        <rect x="28" y="22" width="10" height="8" rx="2" fill="#2F9E44" />
        
        {/* Connection lines */}
        <path
          d="M24 18V22M15 22V18L24 18M33 22V18L24 18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Central dot */}
        <circle cx="24" cy="35" r="2" fill="white" opacity="0.8" />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold ${text} ${textColor} tracking-tight`}>
            EasySuite
          </span>
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            Unified ERP Platform
          </span>
        </div>
      )}
    </div>
  );
};

export default EasySuiteLogo;
