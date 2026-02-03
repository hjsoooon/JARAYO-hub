
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = "", 
  variant = 'primary',
  href,
  target,
  rel
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 min-h-[48px]";
  
  const variants = {
    primary: "bg-[#ff8a00] text-white hover:bg-[#ff9d26] orange-glow",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-[#ff8a00] hover:bg-[#ff8a00]/10"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
