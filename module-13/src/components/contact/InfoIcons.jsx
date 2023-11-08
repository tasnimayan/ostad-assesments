import {faLocationPin, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoIcons = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faLocationPin} />
        <p>Address:<span>Nawabpur, Dhaka-Bangladesh</span></p>
      </div>
      <div>
      <FontAwesomeIcon icon={faPhone} />
        <p>Phone:<span>+8801645800408</span></p>
      </div>
      <div>
      <FontAwesomeIcon icon={faEnvelope} />
        <p>Email:<span>tasnimayan22@gmail.com</span></p>
      </div>
      
    </div>
  );
};

export default InfoIcons;