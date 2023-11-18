import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Socials = ({links}) => {
  return (
    <div className='d-flex-center'>
      <div className='row position-absolute bg-white py-2 px-3 rounded-5 fs-6' style={{bottom:"20px"}}>
        <a href={links.facebook} className='col' style={{color:"#888888"}}><FontAwesomeIcon icon={faFacebookF} className='icon'/></a>
        <a href={links.twitter} className='col' style={{color:"#888888"}}><FontAwesomeIcon icon={faTwitter} className='icon'/></a>
        <a href={links.instagram} className='col' style={{color:"#888888"}}><FontAwesomeIcon icon={faInstagram} className='icon'/></a>

      </div>
    </div>
  );
};

export default Socials;