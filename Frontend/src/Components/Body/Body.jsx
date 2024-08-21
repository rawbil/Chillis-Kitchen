import "./Body.css";
import image1 from "../../assets/body1.jpeg";
import image2 from "../../assets/body2.webp";
import menu from '../../assets/peep_menu.png'
import catering from '../../assets/catering.png';
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="body-container">
      {/* slot 1 */}
      <div className="body1">
        <div className="body1-content">
          <img src={image2} alt="" className="body1-img" />
          <h1>Specials</h1>
          <p>
            Our chefs are always up to something! Check out our rotating
            specialty sauces and limited drops, including a Limited Time Only
            Monthly Chef&apos;s Special that will leave you craving for more!
          </p>
          <Link to={"specials"}>
            <button>See The Specials</button>
          </Link>
        </div>

        <div className="body1-content">
          <img src={image1} alt="" className="body1-img" />
          <h1>Monthly-Leaks</h1>
          <p>
            Once a month, our chefs present a new 4-course dine-in experience
            that goes beyond our regular offerings and puts a smoky spin on
            gourmet cuisine.
          </p>
          <Link to={"specials"}>
            <button>See The Specials</button>
          </Link>
        </div>

     {/*    <div className="body1-content">
          <img src={image2} alt="" className="body1-img" />
          <h1>Monthly-Leaks</h1>
          <p>
            Once a month, our chefs present a new 4-course dine-in experience
            that goes beyond our regular offerings and puts a smoky spin on
            gourmet cuisine.
          </p>
          <Link to={"/"}>
            <button>Check Leaks</button>
          </Link>
        </div> */}
      </div>
      <div className="body-menu">
        <div className="left">
        <h1>menu</h1>
        <p>
          We craft our own hot sauces made in-house(always).Get traditions and
          favorites from all over the country - all on one plate.Chilli&apos;
          Kitchen is the place to be for all the spice lovers, with a blend of
          classic traditions you&apos;d find at the most elite cookout.
        </p>
        <p>
          Everything we serve is house-made and prepared by staff that care.You
          could spend a lifetime sampling every flavor combination at
          Chilli&apos;s Kitchen, and we hope you do.
        </p>
        <Link to={"menu"} className="link">
          <button>peep the menu</button>
        </Link>
        </div>
        <div className="right">
            <img src={menu} alt="" />
        </div>
      </div>

      <div className="body-catering">
        <div className="right">
            <img src={catering} alt="" />
        </div>

        <div className="left">
        <h1>Catering</h1>
        <p>
          We&apos;ll bring the &lsquo;que to you&rsquo; from events we have hosted in the recent past including BBQ parties, Birthdays, weddings as well as corporate events.
        </p>
        <Link to={"catering"} className="link">
          <button>Explore Catering</button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Body;
