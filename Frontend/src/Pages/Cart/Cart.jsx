import "./Cart.css";
import design from "../../assets/chillis_design1.png";
import { useContext } from "react";
import { AppContext } from "../../Components/Context/AppContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { foodItems, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="cart">
        <div className="cart-img">
          <img src={design} alt="" />
        </div>
        <div className="cart-heading heading">
          <p>Image</p>
          <p>Name</p>
          <p>Price</p>
          <p>Qty</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        {foodItems.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-heading cart-item" key={index}>
                <img src={`${url}/images/${item.image}`} alt="" />
                <p className="title">{item.name}</p>
                <p className="price">${item.price}</p>
                <p className="quantity">{cartItems[item._id]}</p>
                <p className="total">${item.price * cartItems[item._id]}</p>
                <p className="remove" onClick={() => removeFromCart(item._id)}>
                  x
                </p>
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
        
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
        
          <div className="total">
            <p><b>Total</b></p>
            <p><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b></p>
          </div>

          <button className="checkout-btn" onClick={() => navigate("/place-order")}>PROCEED TO CHECKOUT</button>
        </div>

        <div className="promocode">
          <label htmlFor="promocode">If you have a promo code, enter it here</label>
          <div className="promocode-input">
            <input type="text" placeholder="promocode" id="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
