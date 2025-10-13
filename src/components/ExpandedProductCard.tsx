import React from 'react';

interface ExpandedProductCardProps {
    name: string;
    imageUrl?: string;
    className?: string;
    children?: React.ReactNode;
    description?: string;
    difficulty?: string;
    originalPattern?: string;
    instagramPost?: string;
}

const ExpandedProductCard: React.FC<ExpandedProductCardProps> = ({ name, imageUrl, className = '', children, description, difficulty, originalPattern, instagramPost }) => {
  return (
    <div className={`bg-[#FFD7D7] rounded-lg p-3 my-5 border border-black ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={name} className="mx-auto mb-2 rounded-lg border border-black" />
      )}
      <div className="text-gray-600">
        <h3 className="text-sm text-left mb-2 press-start-2p-regular" style={{ color: 'black' }}>{name}</h3>
      </div>
        <p className="text-justify text-black">Description: {description}</p>
        <p className="text-justify text-black">Difficulty: {difficulty}</p>
        <p className="text-justify text-black">Original Pattern: {originalPattern}</p>
        <p className="text-justify text-black">Instagram Post: {instagramPost}</p>
        {children}
    </div>
  );
};

export default ExpandedProductCard;