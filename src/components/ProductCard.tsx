import React from 'react';

interface ProductCardProps {
  name: string;
  imageUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, className = '', children }) => {
  return (
    <div className={`bg-[#FFD7D7] rounded-lg p-1  my-5 ${className}`}>
      {imageUrl && (
        <img src={imageUrl} alt={name} className="mx-auto mb-2 rounded-sm" />
      )}
      <div className="text-gray-600">
        <h3 className="text-sm text-left mb-2 press-start-2p-regular" style={{ color: 'black' }}>{name}</h3>
      </div>
        {children}
    </div>
  );
};

export default ProductCard;