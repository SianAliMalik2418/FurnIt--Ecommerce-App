
import React, { createContext, useEffect, useState } from "react";

export const storeContext = createContext();

function Context({ children }) {
  let [quantity, setQuantity] = useState(1);
  let [cartProducts, setCartProducts] = useState([]);
  let [totalPriceAfterIncrement, setTotalPriceAfterIncrement] = useState(null);
  let [category, setCategory] = useState("All Products");
  let [cartIcon, setCartIcon] = useState(false);
  let [productDetails,setProductDetails] = useState([]);

  function addToCart(product) {
    setCartProducts((prevProducts) => [...prevProducts, product]);
    setTotalPriceAfterIncrement(product.price);
    // Save the item to localStorage to persist its state
    localStorage.setItem(product.id.toString(), "true");
  }

  const handleRemoveFromCart = (id) => {
    // Remove the item from the cart
    removeFromCart(id);

    // Remove the item from localStorage
    localStorage.removeItem(id.toString());

    // Update the cartIcon state
    setCartIcon(false);
  };

  function removeFromCart(productId) {
    var productsAfterDeletion = cartProducts.filter(function (cartProduct) {
      if (cartProduct.id !== productId) {
        return true;
      } else {
        return false;
      }
    });
    setCartProducts(productsAfterDeletion);
  }

  function handleIncrement(productPrice) {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setTotalPriceAfterIncrement((prevTotal) => prevTotal + productPrice);
  }

  function handleDecrement(productPrice) {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPriceAfterIncrement((prev) => prev - productPrice);
    }
  }

  

  useEffect(() => {
    let totalPrice = cartProducts.reduce(function (acc, cartProduct) {
      return acc + cartProduct.price * quantity;
    }, 0);

    setTotalPriceAfterIncrement(totalPrice);
  }, [cartProducts]);

  return (
    <storeContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addToCart,
        totalPriceAfterIncrement,
        handleDecrement,
        handleIncrement,
        quantity,
        removeFromCart,
        category,
        setCategory,
        handleRemoveFromCart,
        setCartIcon,
        cartIcon,
        setProductDetails,
        productDetails
      }}
    >
      {children}
    </storeContext.Provider>
  );
}

export default Context;
