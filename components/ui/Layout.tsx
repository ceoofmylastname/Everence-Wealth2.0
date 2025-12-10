import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, className = "", id = "" }: { children?: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`relative py-16 px-4 md:py-24 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    {children}
  </section>
);

export const Container = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <div className={`max-w-7xl mx-auto relative z-10 ${className}`}>
    {children}
  </div>
);

export const GradientText = ({ children, className = "" }: { children?: ReactNode; className?: string }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-gold to-brand-green ${className}`}>
    {children}
  </span>
);

export const GlassCard: React.FC<{ children?: ReactNode; className?: string; hoverEffect?: boolean }> = ({ children, className = "", hoverEffect = true }) => (
  <motion.div 
    whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px -10px rgba(212, 175, 55, 0.15)" } : {}}
    className={`glass-card rounded-2xl p-6 md:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

export const Button = ({ children, variant = "primary", className = "", onClick }: { children?: ReactNode; variant?: "primary" | "secondary" | "outline"; className?: string; onClick?: () => void }) => {
  const baseStyles = "px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group text-sm md:text-base";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-brand-gold-light text-navy-900 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]",
    secondary: "bg-white text-navy-900 hover:bg-gray-100",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-brand-gold/40 hover:text-brand-gold-light"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      )}
    </motion.button>
  );
};

export const Badge = ({ children }: { children?: ReactNode }) => (
  <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold-light text-[10px] md:text-xs font-mono uppercase tracking-wider mb-4 md:mb-6">
    {children}
  </span>
);