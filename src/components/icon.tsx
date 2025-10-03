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
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        );
      
      case 'user':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
        );
      
      case 'knit':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M3 6h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zM5 10h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM3 14h2v2H3zm4 0h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zM5 18h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2z"/>
          </svg>
        );
      
      case 'crochet':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M12 2L8 6h8l-4-4zM6 8v2h2v6h2v2h4v-2h2v-6h2V8H6zm2 4h8v2H8v-2z"/>
            <circle cx="12" cy="19" r="2"/>
          </svg>
        );
      
      case 'knit-crochet':
        return (
          <svg className={iconClasses} fill={color} viewBox="0 0 24 24">
            <path d="M2 4h3v2H2zm5 0h3v2H7zm5 0h3v2h-3zm5 0h3v2h-3zM4 8h3v2H4zm5 0h3v2H9zm5 0h3v2h-3zM2 12h3v2H2zm5 0h3v2H7zm5 0h3v2h-3zm5 0h3v2h-3z"/>
            <path d="M15 16l2-2v4l2 2h-4z"/>
            <circle cx="19" cy="20" r="1"/>
          </svg>
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