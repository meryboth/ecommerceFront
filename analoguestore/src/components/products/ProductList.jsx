import React, { useEffect } from 'react';
import useProductStore from '../../store/useProductStore';
import ProductCard from './ProductCard';

const ProductList = () => {
  const {
    products,
    fetchProducts,
    loading,
    error,
    currentPage,
    totalPages,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage,
  } = useProductStore();

  useEffect(() => {
    fetchProducts(currentPage);
  }, [fetchProducts, currentPage]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='flex justify-between mt-4'>
        {hasPrevPage && (
          <button
            className='bg-primary text-secondary py-2 px-4 rounded'
            onClick={() => fetchProducts(prevPage)}
          >
            Anterior
          </button>
        )}
        {hasNextPage && (
          <button
            className='bg-primary text-secondary py-2 px-4 rounded'
            onClick={() => fetchProducts(nextPage)}
          >
            Siguiente
          </button>
        )}
      </div>
      <p className='text-center mt-4'>
        Página {currentPage} de {totalPages}
      </p>
    </section>
  );
};

export default ProductList;
