import { createContext, useEffect, useState } from 'react';

import { items } from '@/mockdata/products';

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products] = useState(items);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    if (product.qty > 0) {
      setCartItems((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
          return prev.map((item) =>
            item.id === product.id
              ? { ...item, qty: item.qty + product.qty }
              : item
          );
        }
        return [...prev, { ...product, qty: product.qty }];
      });
    }
  };
  useEffect(() => {
    console.log('Cart updated:', cartItems);
  }, [cartItems]);

  const updateQuantity = (id, increment) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + increment) }
          : item
      )
    );
  };

  return (
    <ProductsContext.Provider
      value={{ products, cartItems, setCartItems, addToCart, updateQuantity }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
