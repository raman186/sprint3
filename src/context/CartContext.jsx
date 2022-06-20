import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = React.useState(0);

  const handleCartCount = (val) => {
    //+2
    setCartCount(cartCount + val);
  };
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
