import "./Navbar.css";
import logo from "../../assets/chilli-logo-white.png";
import profile from "../../assets/profile_image.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <span>Admin Panel</span>
      <img src={profile} className="profile_img" alt="" />
    </div>
  );
};

export default Navbar;
