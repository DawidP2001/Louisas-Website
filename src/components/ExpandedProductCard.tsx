import React from 'react';
import {allProducts}  from '../constants/ProductConstants';

interface ExpandedProductCardProps {
  id: number | null;
}

const ExpandedProductCard: React.FC<ExpandedProductCardProps> = ({ id }) => {
  const product = id ? allProducts.find(p => p.id === id) : null;
  
  if (!product) return null;
  
  return (
    <>
    <div className={`bg-[#FFD7D7] rounded-lg p-3 my-5 border border-black hidden sm:grid `}>
      <img src={product.imageUrl} alt={product.name} className="mx-auto mb-2 rounded-lg border border-black" />
      <div className="text-gray-600">
        <h3 className="text-sm text-left mb-1 press-start-2p-regular" style={{ color: 'black' }}>{product.name}</h3>
      </div>
        <p className="text-left text-black mb-1"><span className='font-semibold'>Description:</span> {product.description}</p>
        <p className="text-left text-black mb-1"><span className='font-semibold'>Category:</span> {product.category}</p>
    </div>
    <div className={`bg-[#FFD7D7] rounded-lg p-3 my-1 border border-black sm:hidden grid `}>
      <img src={product.imageUrl} alt={product.name} className="mx-auto mb-2 rounded-lg border border-black" />
      <div className="text-gray-600">
        <h3 className="text-sm text-left mb-1 press-start-2p-regular" style={{ color: 'black' }}>{product.name}</h3>
      </div>
        <p className="text-left text-black mb-1"><span className='font-semibold'>Description:</span> {product.description}</p>
        <p className="text-left text-black mb-1"><span className='font-semibold'>Category:</span> {product.category}</p>
    </div>
    </>
  );
};

export default ExpandedProductCard;