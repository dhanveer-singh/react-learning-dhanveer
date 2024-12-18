import { createContext, useEffect, useState } from 'react';

import { items } from '@/mockdata/products';

export const ProductsContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : items;
  });
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
  useEffect(() => { }, [cartItems]);

  const updateQuantity = (id, updatedValue) => {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id
          ? { ...product, qty: Math.max((product.qty || 0) + updatedValue, 0) }
          : product
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });

    setCartItems((prevCartItems) => {
      const updatedCartItems = prevCartItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max((item.qty || 0) + updatedValue, 0) }
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const updatedCartItems = prev.filter((item) => item.id !== id);
     
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.map((product) =>
          product.id === id
            ? { ...product, qty: 0 } 
            : product
        );
       
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        return updatedProducts;
      });

     
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };
  return (
    <ProductsContext.Provider
      value={{ products, cartItems, setCartItems, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
