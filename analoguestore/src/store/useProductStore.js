import create from 'zustand';
import axios from 'axios';

const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
  fetchProducts: async (page = 1) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/products?page=${page}`
      );
      const data = response.data;
      if (data.status === 'success') {
        set({
          products: data.payload,
          currentPage: data.page,
          totalPages: data.totalPages,
          hasPrevPage: data.hasPrevPage,
          hasNextPage: data.hasNextPage,
          prevPage: data.prevPage,
          nextPage: data.nextPage,
          loading: false,
        });
      } else {
        throw new Error(
          'La respuesta no contiene el campo payload o no es un array'
        );
      }
    } catch (error) {
      set({ error: 'Hubo un error al obtener los productos', loading: false });
      console.error('Hubo un error al obtener los productos:', error);
    }
  },
}));

export default useProductStore;
