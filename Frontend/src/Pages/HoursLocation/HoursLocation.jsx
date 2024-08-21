import "./HoursLocation.css";
import { FaSearchLocation,FaCrosshairs } from "react-icons/fa";


const HoursLocation = () => {
  return (
    <div className="hours-location">
      <div className="header">
        <div className="header-content">
          <h1>Find a Chilli&apos;s Kitchen near you</h1>
          <label htmlFor="searchFunc">
            Enter a city, county, ZIP or delivery address(where available) to
            order online or see menu pricing by location.
          </label>
          <div className="input-cont">
            <input
              type="search"
              name="searchFunc"
              id="searchFunc"
              placeholder="Search by City, State, ZIP or Delivery Address"
            />
            <div className="svg-cont">
              <FaSearchLocation />
            </div>
          </div>

          <div className="or"><hr />or <hr /></div>
          <div className="curr-location">
            <span>use my current location</span>
            <FaCrosshairs/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursLocation;
