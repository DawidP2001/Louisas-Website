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
  const baseStyles = 'button-56';
  const activeStyles = isActive 
    ? 'button-56-active' 
    : '';

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