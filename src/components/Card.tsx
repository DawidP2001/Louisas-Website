import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-[#FFD7D7] rounded-lg p-3 md:p-6 border border-black my-3 md:my-5 ${className}`}>
      {title && (
        <h3 className="md:text-lg text-xs text-center mb-4 press-start-2p-regular" style={{ color: 'black' }}>{title}</h3>
      )}
      <div className="text-justify text-black text-xs md:text-sm space-y-2">
        {children}
      </div>
    </div>
  );
};

export default Card;