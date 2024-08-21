import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import { hero_items } from "../../heroItems";
import { useEffect, useState } from "react";
import { ChevronLeft,  ChevronRight} from "react-feather";
import Body from "../../Components/Body/Body";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
  const interval =  setInterval(() => {
    setImageIndex(prevIndex => prevIndex === hero_items.length - 1 ? 0 : prevIndex + 1 )
    }, 5000)

    return() => clearInterval(interval)

  }, [imageIndex])
  
  function handleRight() {
    setImageIndex(prevIndex => prevIndex === hero_items.length - 1 ? 0 : prevIndex + 1 )
  }

  function handleLeft() {
    setImageIndex(prevIndex => prevIndex === 0 ? hero_items.length - 1 : prevIndex - 1);
  }

  return (
    <div className="home">
      <div className="carousel-container">
        <Hero hero_items={hero_items} imageIndex={imageIndex} />
        <div className="prev-next">
          <ChevronLeft onClick={handleLeft}/>
          <ChevronRight onClick={handleRight} />
        </div>
      </div>

      <Body/>
    </div>
  );
};

export default Home;
