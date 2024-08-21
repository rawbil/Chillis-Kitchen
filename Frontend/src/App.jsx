import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Signup from "./Pages/Signup/Signup";
import Menus from "./Pages/Menu/Menus";
import HoursLocation from "./Pages/HoursLocation/HoursLocation";
import CorportateEvents from "./Pages/CorporateEvents/CorportateEvents";
import PrivateEvents from "./Pages/PrivateEvents/PrivateEvents";
import About from "./Pages/About/About";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";




const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menus" element={<Menus/>} />
                <Route path="/hours&location" element={<HoursLocation/>} />
                <Route path="/corporate-events" element={<CorportateEvents/>} />
                <Route path="/private-events" element={<PrivateEvents/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/order" element={<Order/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/place-order" element={<PlaceOrder/>} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
