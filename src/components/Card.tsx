import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-[#FFD7D7] rounded-lg p-3 md:p-6 border border-black my-2 md:my-5 ${className}`}>
      {title && (
        <h3 className="sm:text-3xl text-2xl text-center mb-4 crafty-girls-bold" style={{ color: 'black' }}>{title}</h3>
      )}
      <div className="text-justify text-black text-xs sm:text-sm space-y-2">
        {children}
      </div>
    </div>
  );
};

export default Card;