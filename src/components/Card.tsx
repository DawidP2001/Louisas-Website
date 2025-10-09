import React from 'react';

interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-[#FFD7D7] rounded-lg p-6 border border-black my-5 ${className}`}>
      {title && (
        <h3 className="text-lg text-center mb-4 press-start-2p-regular" style={{ color: 'black' }}>{title}</h3>
      )}
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  );
};

export default Card;