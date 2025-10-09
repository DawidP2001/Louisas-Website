import React from 'react';

interface IconProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  color = 'currentColor', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const iconClasses = `${sizes[size]} ${className}`;

  const renderIcon = () => {
    switch (name) {
      case 'home':
        return (
          <img className={iconClasses} src="/icons/home.png" alt="Home Icon" />
        );
      
      case 'user':
        return (
          <img className={iconClasses} src="/icons/heart.png" alt="User Icon" />
        );
      
      case 'knit':
        return (
          <img className={iconClasses} src="/icons/knitting.png" alt="Knit Icon" />
        );
      
      case 'crochet':
        return (
          <img className={iconClasses} src="/icons/crochet.png" alt="Crochet Icon" />
        );
      
      case 'knit-crochet':
        return (
          <img className={iconClasses} src="/icons/tools.png" alt="Knit and Crochet Icon" />
        );
      
      case 'heart':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        );
      
      case 'menu':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        );
      
      case 'close':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        );
      
      default:
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        );
    }
  };

  return renderIcon();
};

export default Icon;