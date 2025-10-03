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
  const baseStyles = 'px-4 py-1 rounded-3xl border border-black max-w-[200px]';
  const activeStyles = isActive 
    ? 'bg-[#FF5C5C] text-white' 
    : 'text-black hover:bg-[#FF5C5C] bg-[#FFAFAF]';

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