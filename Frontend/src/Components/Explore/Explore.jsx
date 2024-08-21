/* eslint-disable react/prop-types */
import exploreItems from "../../exploreItems";
import "./Explore.css";

const Explore = ({ category, setCategory }) => {
  return (
    <div className="explore">
      {exploreItems.map((item, index) => (
        <div
          key={index}
          className="explore-item"
          onClick={() => category === "All" ? setCategory(item.name) : setCategory("All")}
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
  );
};

export default Explore;
