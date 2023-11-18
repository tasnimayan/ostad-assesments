import './footer.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='row mb-5'>

        <div className='col-lg'>
          <p className='logo-text'>Web Logo</p>
          <p>Some footer text about the agency. Just a little description to help people understand you bettrer</p>
          <div className="icon-container">
            <a href="" target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>        
            <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className='icon'/></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} className='icon'/></a>
          </div>
        </div>

        <div className='col-lg d-flex justify-content-center'>
          <div className='quick-links'>
            <p className='footer-heading'>Quick Links</p>
            <a href="">Services</a>
            <a href="">PortFolio</a>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className='col-lg d-flex justify-content-center'>
          <div>
            <p className='footer-heading'>Address</p>
            <p>Design Agency Head Office.<br/>
              Airport Road <br/>
              United Arab Emirate
            </p>
          </div>
        </div>
      </div>
      <div>
        <span>Copyright Designed Agency {new Date().getFullYear()}</span>
      </div>
      
    </footer>
  );
};

export default Footer;