import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const fetchProducts = (page) => {
    axios
      .get(`http://localhost:3030/api/products?page=${page}`)
      .then((response) => {
        const data = response.data;
        if (data.status === 'success') {
          setProducts(data.payload);
          setCurrentPage(data.page);
          setTotalPages(data.totalPages);
          setHasPrevPage(data.hasPrevPage);
          setHasNextPage(data.hasNextPage);
          setPrevPage(data.prevPage);
          setNextPage(data.nextPage);
        } else {
          throw new Error(
            'La respuesta no contiene el campo payload o no es un array'
          );
        }
      })
      .catch((error) => {
        setError('Hubo un error al obtener los productos');
        console.error('Hubo un error al obtener los productos:', error);
      });
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section>
      <h1>Productos en stock:</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <p>{product.title}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      {hasPrevPage && (
        <button onClick={() => setCurrentPage(prevPage)}>Anterior</button>
      )}
      {hasNextPage && (
        <button onClick={() => setCurrentPage(nextPage)}>Siguiente</button>
      )}
      <p>
        Pagina {currentPage} de {totalPages}
      </p>
    </section>
  );
};

export default ProductList;
