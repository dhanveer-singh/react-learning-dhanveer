import { createContext, useState } from 'react';

export const ProductsContext = createContext(null);

export const ProductsProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <ProductsContext.Provider value={{ count, setCount }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
