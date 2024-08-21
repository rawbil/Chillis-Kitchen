/* eslint-disable react/prop-types */
import { useContext } from "react";
import SingleItem from "../SingleItem/SingleItem";
import "./OrderItems.css";
import { AppContext } from "../Context/AppContext";

const OrderItems = ({category, }) => {
  const {foodItems} = useContext(AppContext)
  return (
    <div className="order-items">
      {foodItems.map((item, index) => {
         if(category === "All" || category === item.category) {
            return (
          <SingleItem key={index} item={item} />
        );
         }
        
        
      })}
    </div>
  );
};

export default OrderItems;
