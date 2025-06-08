import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, size = 'medium', shape = 'rounded-md', onClick }) => {
  let sizeClasses = '';
  switch (size) {
    case 'small':
      sizeClasses = 'px-3 py-1 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-4 py-2 text-base';
      break;
    case 'large':
      sizeClasses = 'px-6 py-3 text-lg';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${shape} ${sizeClasses} hover:bg-blue-700 transition-all`}
    >
      {label}
    </button>
  );
};

export default Button;
