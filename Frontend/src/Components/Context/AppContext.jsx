/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import foodItems from "../../foodItems";

export const AppContext = createContext();

const ProviderFunction = (props) => {
  const [cartItems, setCartItems] = useState({});

  function addToCart(itemId) {
    if(!cartItems[itemId]) {
      setCartItems(prev => ({...prev, [itemId]: 1}))
    }
    else {
      setCartItems(prev => ({...prev, [itemId]: prev[itemId] + 1}));
    }
  }

  function removeFromCart(itemId) {
    setCartItems(prev => ({...prev, [itemId]: prev[itemId] - 1}))

  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodItems.find(product => product.id === Number(item));
        
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error(`Item with ID ${item} not found in foodItems.`);
        }
      }
    }
    return totalAmount;
  }
  
  return (
    <AppContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems, 
        foodItems,
        getTotalCartAmount
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ProviderFunction;
