/* eslint-disable react/prop-types */
import { useState } from 'react';
import './List.css'
import axios from 'axios';
import { useEffect } from 'react';
import {toast} from 'react-toastify'

const List = ({url}) => {
  const [listItems, setListItems] = useState([]);
  const getImageUrl = (image) => {
    if (image?.url) return image.url;
    if (typeof image === "string" && image.startsWith("http")) return image;
    return `${url}/images/${image}`;
  };

  useEffect(() => {
    fetchListItems()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchListItems() {
    try {
      const response = await axios.get(`${url}/api/food/list`)
      if(response.data.success) {
        setListItems(response.data.data);
        
      }
      
    } catch (error) {
      console.log(error.message);
    }
  }

  async function removeFromList(foodId) {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {_id: foodId});
      await fetchListItems();
      if(response.data.success) {
        toast.success(response.data.message)
      }
      else {
        toast.error("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='list'>
      <div className="list-header grid">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>

      <div className="list-content">
        {listItems.map((item, index) => (
          <div className="list-item grid" key={index}>
            <img src={getImageUrl(item.image)} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p className='x' onClick={() => removeFromList(item._id)}>x</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List
