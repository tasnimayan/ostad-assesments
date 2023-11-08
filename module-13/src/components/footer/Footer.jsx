import './footer.style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithub, faLinkedinIn, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faCopyright, faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPersonBiking } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="" className="footer-logo"><FontAwesomeIcon icon={faPersonBiking} /></a>
        <div>
          <div className="footer-slogan">
            <h1>Living, learning, & leveling up one day at a time</h1>
          </div>
        </div>

        <div className="icon-container">
          <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
          <a href="" target="_blank"><FontAwesomeIcon icon={faDribbble} className='icon'/></a>
          <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className='icon'/></a>
          <a href="" target="_blank"><FontAwesomeIcon icon={faGithub} className='icon'/></a>
          <a href="" target="_blank"><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>        
          <a href="" target="_blank"><FontAwesomeIcon icon={faEnvelope} className='icon'/></a>        
        </div>

        <div className="copyright">Handcrafted by TasnimAyan<FontAwesomeIcon icon={faCopyright} />{ new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;