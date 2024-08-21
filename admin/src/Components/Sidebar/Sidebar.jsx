//import { SidebarItems } from "../../SidebarContent";
import { FaList } from "react-icons/fa";
import { Link as NavLink, useLocation } from "react-router-dom";
import add_icon from "../../assets/add_icon.jpg";
import order_icon from "../../assets/order_icon.png";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        {/* Instead of using location, when you click on the navLink, in the elements  section automatically the link will have an attribute active.You can just use the style active in your css and set the style for the active class*/}
        <NavLink
          to={"add"}
          className={`sidebar-option ${location.pathname === "/add" ? "active-option" : ""}`}
        >
          <img src={add_icon} alt="" className="sidebar-img" />
          <p>Add Items</p>
        </NavLink>
        <NavLink
          to={"list"}
          className={`sidebar-option ${location.pathname === "/list" ? "active-option" : ""}`}
        >
          {/* <img src={assets.order_icon} alt="" className="sidebar-img" /> */}
          <FaList className="sidebar-img-svg" />
          <p>List Items</p>
        </NavLink>
        <NavLink
          to={"orders"}
          className={`sidebar-option ${location.pathname === "/orders" ? "active-option" : ""}`}
        >
          <img src={order_icon} alt="" className="sidebar-img" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
