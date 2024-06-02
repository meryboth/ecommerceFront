import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className='product-image w-full h-auto'
        />
      ) : (
        <div className='w-full h-[18rem] bg-gray-300 flex items-center justify-center'>
          {/* <span className='text-gray-600'>No Image Available</span> */}
        </div>
      )}
      <h2 className='product-title text-xl text-primary'>{product.title}</h2>
      <p className='product-price text-lg text-muted'>{product.price}</p>
      <p className='product-summary text-sm text-text'>{product.description}</p>
    </div>
  );
};

export default ProductCard;
