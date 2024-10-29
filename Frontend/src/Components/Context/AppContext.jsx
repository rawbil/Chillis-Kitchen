/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
//import foodItems from "../../foodItems";
import axios from "axios";

export const AppContext = createContext();

const ProviderFunction = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [foodItems, setFoodItems] = useState([]);
  const url = import.meta.env.VITE_BACKEND_URL;
  const [token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      loadCartData(localStorage.getItem("token"))
    }
    fetchFoodItems();
  }, []);  

  async function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

   if(token) {
    await axios.post(url + "/api/cart/add", {itemId}, {headers: {token}});
   }
  }

  async function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if(token) {
      await axios.post(url + "/api/cart/remove", {itemId}, {headers: {token}});
    }

  }

  async function loadCartData(token) {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, {headers: {token}})
      if(response.data.success) {
        setCartItems(response.data.cartItem);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = foodItems.find(
          (product) => product._id === item
        );

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        } else {
          console.error(`Item with ID ${item} not found in foodItems.`);
        }
      }
    }
    return totalAmount;
  }

  async function fetchFoodItems() {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setFoodItems(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cartItems,
        foodItems,
        setFoodItems,
        getTotalCartAmount,
        url,
        token,
        setToken,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ProviderFunction;
