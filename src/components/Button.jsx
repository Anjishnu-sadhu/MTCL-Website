import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  type = 'button',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 active:scale-95 text-center text-sm sm:text-base';
  
  const variants = {
    primary: 'bg-limeAccent text-forest-900 hover:bg-limeAccent-hover shadow-sm hover:shadow-md px-5 sm:px-7 py-2.5 sm:py-3',
    outline: 'border border-cream-100/40 text-cream-50 hover:bg-white/10 hover:border-cream-100 px-5 sm:px-7 py-2.5 sm:py-3',
    dark: 'bg-forest text-cream-50 hover:bg-forest-light px-5 sm:px-7 py-2.5 sm:py-3',
    secondary: 'bg-white text-forest-900 hover:bg-gray-100 border border-gray-200 px-5 sm:px-7 py-2.5 sm:py-3'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
