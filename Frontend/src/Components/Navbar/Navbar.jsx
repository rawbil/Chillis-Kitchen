import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import nav_logo from "../../assets/chilli-logo.png";
import profile from '../../assets/profile_icon.png'
import basket from '../../assets/bag_icon.png';
import logout from '../../assets/logout_icon.png'
import { useContext, useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { FaShoppingCart } from "react-icons/fa";
import OutsideClickHandler from "react-outside-click-handler";
import { AppContext } from "../Context/AppContext";

const Navbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [dropdownOn, setDropdownOn] = useState(false);
  const logoRef = useRef();
  const { getTotalCartAmount, token, setToken } = useContext(AppContext);
  useEffect(() => {
    const navScroll = window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        logoRef.current.classList.add("logo-ref");
      } else {
        logoRef.current.classList.remove("logo-ref");
      }
    });

    return () => window.removeEventListener("scroll", navScroll);
  }, []);

  const navigate = useNavigate();

  function logoutFunc() {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }


  return (
    <nav className={`nav ${location.pathname !== "/" ? "nav-black" : ""}`}>
      <RouterLink to={"/"} className="nav-logo" ref={logoRef}>
        <img src={nav_logo} alt="" width={120} className="nav-logo-img" />
      </RouterLink>

      <div className="ul-parent">
      <ul className={`nav-ul ${showMenu ? "show" : ""}`}>
        <li>
          <RouterLink
            to={"/"}
            className={`nav-link ${
              location.pathname === "/" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to={"menus"}
            className={`nav-link ${
              location.pathname === "/menus" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            Menus
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to={"hours&location"}
            className={`nav-link ${
              location.pathname === "/hours&location" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            Hours &amp; Location
          </RouterLink>
        </li>
        <li className="show-small">
          <RouterLink className="nav-link " onClick={() => setShowMenu(false)}>
            Catering
          </RouterLink>
        </li>
        <OutsideClickHandler onOutsideClick={() => setDropdownOn(false)}>
          <li className="nav-events-container">
            <div
              className={`nav-events-header ${
                dropdownOn ? "no-nav-link" : "nav-link"
              }`}
              onClick={() => setDropdownOn(!dropdownOn)}
            >
              <span>Private Events</span>
              <span>{dropdownOn ? <ChevronUp /> : <ChevronDown />}</span>
            </div>
            {dropdownOn ? (
              <div className="nav-events-content">
                <RouterLink
                  to={"corporate-events"}
                  className="dropdown-link"
                  onClick={() => setDropdownOn(false)}
                >
                  Corporate & private events
                </RouterLink>
                <RouterLink
                  to={"private-events"}
                  className="dropdown-link"
                  onClick={() => setDropdownOn(false)}
                >
                  Private Events Form
                </RouterLink>
              </div>
            ) : null}
          </li>
        </OutsideClickHandler>
        <li>
          <RouterLink
            to={"about"}
            className={`nav-link ${
              location.pathname === "/about" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            About
          </RouterLink>
        </li>
        <li className="show-small">
          <RouterLink className="nav-link " onClick={() => setShowMenu(false)}>
            Terms
          </RouterLink>
        </li>
        <li className="show-small">
          <RouterLink className="nav-link " onClick={() => setShowMenu(false)}>
            Privacy
          </RouterLink>
        </li>
        {/*   <li className="show-small">
          <RouterLink to={"/signup"} className="nav-link " onClick={() => setShowMenu(false)}>
            Email Sign-up
          </RouterLink>
        </li> */}
        <li>
          <RouterLink
            to={"/order"}
            className={`nav-link order-online ${
              location.pathname === "/order" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            Order Online
          </RouterLink>
        </li>

        {token && (
          <div className="nav-cart-container">
            <RouterLink
              to={"/cart"}
              className="nav-cart"
              onClick={() => setShowMenu(false)}
            >
              <FaShoppingCart className="nav-cart-svg" title="cart" />
              <div className={getTotalCartAmount() > 0 ? "cart-dot" : ""}></div>
            </RouterLink>
          </div>
        )}

        
      </ul>
      <div className="logout-container">
      {token ? (
            <div className="logout-inner">
              <img src={profile} alt="" className="img"/>
              <ul>
                <li><img src={basket} alt="" /><p>Orders</p></li>
                <li onClick={logoutFunc}><img src={logout} alt="" /><p>Logout</p></li>
              </ul>
            </div>
          
        ): (
          
          <RouterLink
            to={"signup"}
            className={`nav-link signup-btn ${
              location.pathname === "/signup" ? "active-nav" : ""
            }`}
            onClick={() => setShowMenu(false)}
          >
            Signup
          </RouterLink>
        )}</div>
      </div>
      {showMenu ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="svg-bar x"
          onClick={() => setShowMenu(false)}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`svg-bar ${token ? 'svg-bar-login' : ''}`}
          onClick={() => setShowMenu(true)}
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </nav>
  );
};

export default Navbar;
