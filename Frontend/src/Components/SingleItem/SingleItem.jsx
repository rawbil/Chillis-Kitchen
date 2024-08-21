import "./SingleItem.css";
import PropTypes from "prop-types";
import add_green from "../../assets/add_icon_green.png";
import add_white from "../../assets/add_icon_white.png";
import remove_icon from "../../assets/remove_icon_red.png";
import { useContext, } from "react";
import { AppContext } from "../Context/AppContext";

const SingleItem = ({ item }) => {
  //const [added, setAdded] = useState(0);
  const {cartItems, addToCart, removeFromCart} = useContext(AppContext);
  return (
    <div className="single-item">
      <img src={item.image} alt="" className="main-img" />
      <div className="content">
        <h2>{item.title}</h2>
        <p className="description">{item.description}</p>
        <p className="price">${item.price}</p>
        <div className="buttons">
        {!cartItems[item.id] ? (
         <img
            src={add_white}
            alt=""
            className="add-white"
            onClick={() => addToCart(item.id)}
          /> 
        ) : (
          <div className="add-remove">
            <img src={remove_icon} alt="" onClick={() => removeFromCart(item.id)}/>
            <p>{cartItems[item.id]}</p>
            <img src={add_green} alt="" onClick={() => addToCart(item.id)}/>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

SingleItem.propTypes = {
  item: PropTypes.object,
};

export default SingleItem;
