import { create } from "zustand";

const useCart = create((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  increaseCount: (id) => {
    return set((state) => {
      return {
        products: state.products.map((item) => {
          if (item.id == id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        }),
      };
    });
  },
  decreaseCount: (id) => {
    return set((state) => {
      const product = state.products.find(item => item.id === id);
      if (product.count === 1) {
        return { products: state.products.filter((item) => item.id != id) };
      } else {
        return {
          products: state.products.map((item) => {
            if (item.id == id) {
              return { ...item, count: item.count - 1 };
            } else {
              return item;
            }
          }),
        };
      }
    });
  },
}));
export default useCart;
