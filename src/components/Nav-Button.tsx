import React from 'react';

interface NavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  isActive?: boolean;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ 
  children, 
  onClick, 
  href,
  isActive = false,
  className = '' 
}) => {
  const baseStyles = 'px-4 py-1 rounded-3xl font-medium transition-colors bg-[#FFAFAF] border border-black';
  const activeStyles = isActive 
    ? 'bg-blue-600 text-white' 
    : 'text-gray-700 hover:bg-gray-100';

  const buttonClasses = `${baseStyles} ${activeStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default NavButton;