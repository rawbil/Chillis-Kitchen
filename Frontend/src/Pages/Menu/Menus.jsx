import { useNavigate } from 'react-router-dom'
import './Menus.css'
import design from '../../assets/chillis_design2.png'
const Menus = () => {
  const navigate = useNavigate();
  return (
    <div className="menus">
      <div className="menus-header">
        <h1>MENUS</h1>
        <p>A culinary tour of hot sauces from around the nation and this beautiful planet.Thousands of years ago, humans began using chili peppers, the primary ingridient in most hot sauces.For some reason, this hasn&apos;t led to world peace, but we&apos;re pretty sure if we fire up enough hot sauces, it will.</p>
      </div>
      <div className="menus-order">
        <p>Check out our menu and place your order today</p> 
        
        <button onClick={() => navigate('/order')}>Order Now</button>
      </div>

      <img src={design} alt="" className='design'/>
    </div>
  )
}

export default Menus