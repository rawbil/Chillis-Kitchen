/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Add.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState();
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  function handleOnchange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const response = await axios.post(`${url}/api/food/add`, formData);
      if (response.data.success) {
        setImage(null);
        setImageFile(null);
        setData({
          name: "",
          description: "",
          category: "",
          price: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error("Error Adding Food");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div className="add">
      <form className="form-add" onSubmit={handleSubmit}>
        <label htmlFor="image">
          <div className="upload">
            {image ? (
              <img src={image} alt="" className="upload-img" />
            ) : (
              <>
                <FaCloudDownloadAlt />
                <span>Upload</span>
              </>
            )}
          </div>
        </label>
        <input
          onChange={(e) => handleImageChange(e)}
          type="file"
          accept="image/*"
          name="image"
          id="image"
          required
          hidden
        />
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Type here"
          required
          onChange={handleOnchange}
          value={data.name}
        />
        <label htmlFor="description">Product Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="write content here"
          rows={6}
          required
          onChange={handleOnchange}
          value={data.description}
        ></textarea>
        <div className="category-price">
          <div className="category">
            <label htmlFor="category">Product Category</label>
            <select
              name="category"
              id="category"
              required
              onChange={handleOnchange}
              value={data.category}
            >
              <option value="">**Choose the category**</option>
              <option value="spicy">spicy</option>
              <option value="pizza">Pizza</option>
              <option value="icecream">Icecream</option>
              <option value="chicken">Chicken</option>
              <option value="seafood">Seafood</option>
              <option value="ketchup">Ketchup</option>
              <option value="dessert">Dessert</option>
              <option value="french_dishes">French Dishes</option>
            </select>
          </div>
          <div className="price">
            <label htmlFor="price">Product Price</label>
            <input
              type="number"
              name="price"
              placeholder="$20"
              required
              onChange={handleOnchange}
              value={data.price}
            />
          </div>
        </div>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default Add;
