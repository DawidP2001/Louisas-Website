import React from 'react';
import {allProducts}  from '../constants/ProductConstants';
import { motion } from 'framer-motion';

interface ExpandedProductCardProps {
  id: number | null;
}

const ExpandedProductCard: React.FC<ExpandedProductCardProps> = ({ id }) => {
  const product = id ? allProducts.find(p => p.id === id) : null;
  
  if (!product) return null;
  
  return (
    <>
    {/**Desktop */}
    <motion.div
      layout 
      className={`bg-[#FFD7D7] rounded-lg p-3 my-5 border border-black hidden sm:grid`}
      transition={{ type: "spring", duration: 0.6 }}
    >
      <img src={product.imageUrl} alt={product.name} className="mx-auto mb-2 rounded-lg border border-black" />
      <div className="text-gray-600">
        <h3 className="text-sm text-left mb-1 press-start-2p-regular" style={{ color: 'black' }}>{product.name}</h3>
      </div>
      <p className="text-left text-black mb-1"><span className='font-semibold'>Description:</span> {product.description}</p>
      <p className="text-left text-black mb-1"><span className='font-semibold'>Category:</span> {product.category}</p>
    </motion.div>

    {/**Mobile */}
    <div
      className={`bg-[#FFD7D7] rounded-lg flex sm:hidden h-58 border border-black items-center`}
    >
      <div className='w-1/2 mr-3 h-58 p-1 flex items-center'>
        <img src={product.imageUrl} alt={product.name} className="rounded-lg border border-black object-contain my-auto" />
      </div>
      <div className='flex-1'>
        <div className="text-gray-600">
          <h3 className="text-sm text-left mb-1 press-start-2p-regular" style={{ color: 'black' }}>{product.name}</h3>
        </div>
        <p className="text-left text-xs text-black mb-1"><span className='font-semibold'>Description:</span> {product.description}</p>
        <p className="text-left text-xs text-black mb-1"><span className='font-semibold'>Category:</span> {product.category}</p>
      </div>
    </div>
    </>
  );
};

export default ExpandedProductCard;