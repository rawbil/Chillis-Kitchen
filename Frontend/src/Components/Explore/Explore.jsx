/* eslint-disable react/prop-types */
import exploreItems from "../../exploreItems";
import "./Explore.css";

const Explore = ({ category, setCategory }) => {
  return (
    <>
      <div className="explore-heading">
        <h2>Explore Our Menu</h2>
        <p>
          Choose from a diverse menu featuring an array of dishes. Our mission
          is to satisfy your cravings and elevate your dining experience, one
          meal at a time.
        </p>
      </div>
      <div className="explore">
        {exploreItems.map((item, index) => (
          <div
            key={index}
            className="explore-item"
            onClick={() =>
              setCategory((prev) => (prev === item.name ? "All" : item.name))
            }
          >
            <img
              src={item.image}
              alt=""
              className={category === item.name ? "active-explore" : ""}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Explore;
