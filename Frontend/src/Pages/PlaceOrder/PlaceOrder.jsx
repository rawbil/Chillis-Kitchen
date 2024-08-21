import { useContext } from "react";
import "./PlaceOrder.css";
import { AppContext } from "../../Components/Context/AppContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(AppContext);
  return (
    <form className="place-order">
      <div className="delivery-information">
        <h1>Delivery Information</h1>

        <div className="dub-cont">
          <input type="text" placeholder="First Name" name="firstName" />
          <input type="text" placeholder="Last Name" name="lastName" />
        </div>
        <input type="email" placeholder="Email Address" name="email" />
        <input type="text" placeholder="Street" name="street" />
        <div className="dub-cont">
          <input type="text" placeholder="City/County" name="city" />
          <input type="text" placeholder="Zip Code" name="zip" />
        </div>
        <input type="text" placeholder="phone" name="phone" />
      </div>

      <div className="cart-total del-total">
        <h2>Cart Total</h2>
        <div className="cart-total-details del-det">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>

        <div className="cart-total-details del-det">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>

        <div className="total">
          <p>
            <b>Total</b>
          </p>
          <p>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </p>
        </div>

        <button className="checkout-btn">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
