import { cn } from "@/lib/utils";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  subtext?: string;
  className?: string;
  icon?: boolean;
}

export function CTAButton({ 
  text = "QUERO PAGAR SOMENTE NA ENTREGA", 
  subtext, 
  className,
  icon = true,
  ...props 
}: CTAButtonProps) {
  const handleClick = () => {
    window.location.href = "https://app.coinzz.com.br/checkout/1-unidade-hrawf-0";
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
      className={cn(
        "w-full md:w-auto relative group overflow-hidden rounded-xl bg-[#00D93D] text-white px-8 py-5 shadow-lg shadow-green-500/30 transition-all hover:bg-[#00c036] hover:shadow-xl hover:shadow-green-500/40",
        "flex flex-col items-center justify-center",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 relative z-10">
        {icon && <ShoppingBag className="w-6 h-6 animate-bounce" />}
        <span className="text-xl md:text-2xl font-black tracking-tight uppercase drop-shadow-sm">
          {text}
        </span>
        {icon && <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
      </div>
      {subtext && (
        <span className="text-sm font-medium opacity-90 relative z-10 mt-1">
          {subtext}
        </span>
      )}
      
      {/* Shine effect */}
      <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
    </motion.button>
  );
}
