import './About.css'
import design from '../../assets/chillis_design8.png';
import design2 from '../../assets/chillis_design9.png';

const About = () => {
  return (
    <div className='about'>
        <h1>All the sauces. All in one plate. All good</h1>
        <p>Welcome to <b>Chilli’s Kitchen</b>, where flavor meets fire and every dish tells a story of spice. We’re passionate about bringing the heat to your plate, with an array of dishes that celebrate the vibrant, bold flavors of the world&apos;s spiciest cuisines.</p>
        <p>At Chilli’s Kitchen, we believe that food is more than just sustenance—it’s an experience. That’s why we’ve crafted a menu that showcases the rich diversity of spices and sauces from around the globe. From the tangy and fiery hot sauces of Mexico to the aromatic and spicy curries of India, our dishes are designed to tantalize your taste buds and ignite your senses.</p>
        <p>Our journey started with a simple love for spice and a desire to share that passion with others. We source only the freshest ingredients, blending them with care to create unique, mouth-watering flavors that will leave you craving more. Whether you’re a spice aficionado or just starting to explore the world of heat, our dishes cater to all levels of spice tolerance—so don’t worry, we’ve got something for everyone.</p>

        <p>But we’re more than just about heat; we’re about community. We’ve created a warm, inviting space where you can enjoy good food with great company. Whether you’re here for a casual lunch, a cozy dinner, or a special celebration, we’re committed to making your experience unforgettable.</p>
        <p>So come on in, take a seat, and get ready to embark on a culinary adventure. At Chilli’s Kitchen, we’re turning up the heat on flavor, one dish at a time.</p>

        <p className="salute">
            <span className="heading">Chilli’s Kitchen</span>
            <span className="slogan">Never Gets Spicier</span>
        </p>
        <img src={design2} alt="" />
        <img src={design} alt="" />
    </div>
  )
}

export default About