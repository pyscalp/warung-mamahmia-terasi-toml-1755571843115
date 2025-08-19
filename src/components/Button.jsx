import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

function Button({ children, variant = 'primary', className, ...props }) {
  const baseClasses = 'font-semibold py-2 px-6 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-orange-600 focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-red-600 focus:ring-secondary',
    accent: 'bg-accent text-gray-900 hover:bg-yellow-400 focus:ring-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  return (
    <button
      className={twMerge(clsx(baseClasses, variantClasses[variant], className))}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;