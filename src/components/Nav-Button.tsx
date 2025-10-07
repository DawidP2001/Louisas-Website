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
  const baseStyles = 'px-4 py-1 border rounded-3xl border-black max-w-[200px] shadow-lg transform transition-all duration-150 active:scale-95';
  const activeStyles = isActive 
    ? 'bg-gradient-to-b from-[#FF8080] to-[#FF5C5C] text-white shadow-inner' 
    : 'bg-gradient-to-b from-[#FFD0D0] to-[#FFAFAF] text-black hover:from-[#FF8080] hover:to-[#FF5C5C] hover:shadow-xl';

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