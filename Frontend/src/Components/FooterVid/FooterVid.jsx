import './FooterVid.css'
import video from '../../assets/chilli-vid.mp4'

const FooterVid = () => {
  return (
    <div className="footer-video-container">
    <video src={video}   muted autoPlay loop></video>
  </div>
  )
}

export default FooterVid