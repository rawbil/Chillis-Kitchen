import { Link } from 'react-router-dom'
import './Footer.css'
import {FaFacebook, FaXTwitter} from 'react-icons/fa6'
import FooterVid from '../FooterVid/FooterVid'

const Footer = () => {
  return (
    <>
    <FooterVid/>
    <div className="footer-container">
 
    <div className='footer'>
        <div className="footer-icons">
            <FaFacebook/>
            <FaXTwitter/>
        </div>
        <ul className="footer-content">
        <li>
          <Link className="footer-link">Catering</Link>
        </li>
        <li>
          <Link className="footer-link">Terms</Link>
        </li>
        <li>
          <Link className="footer-link">Privacy</Link>
        </li>
        <li>
          <Link to={'/signup'} className="footer-link email-link">Email Sign-up</Link>
        </li>
        </ul>
    </div>

    <div className="footer-year">
        &copy;chilli&apos;s kitchen {new Date().getFullYear()}
    </div>
           
    </div>
    </>
  )
}

export default Footer