import Navbar from "./Components/Navbar/Navbar";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Orders from "./Pages/Orders/Orders";
import Sidebar from "./Components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const backendUrl = (
  import.meta.env.VITE_BACKEND_URL ||
  "https://chillis-kitchen-backend.vercel.app"
).replace(/\/$/, "");

const App = () => {
  const url = backendUrl;

  return (
    <div className="app">
      <ToastContainer />
      <Navbar />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/list" element={<List url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
