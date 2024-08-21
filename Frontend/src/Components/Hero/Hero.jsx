/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Hero.css'
const Hero = ({hero_items, imageIndex}) => {
  return (
    <div className="heroitems">
    {hero_items.map((item, index) => (
      <div className="hero-item" key={index} style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .2)), url(${item.image})`,
        width: "100%",
        backgroundPosition: "center",
        transform: `translateX(-${imageIndex * 100}%)`
      }}>
        <h1 className='heading'>{item.heading}</h1>
        <span className="description">{item.description}</span>
        
          <Link to={item.route}>
          <button className="hero-btn">
          {item.button_content}
          </button>
          </Link>
      </div>
    ))}
  </div> 
  )
}



export default Hero