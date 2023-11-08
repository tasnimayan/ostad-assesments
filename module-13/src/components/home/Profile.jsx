import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './profile.style.css'
import { faFacebookF, faLinkedinIn, faGithub  } from '@fortawesome/free-brands-svg-icons';
import Cover from './Cover';
// import {Link} from 'react-router-dom';

function Profile() {
  return (
    <div>
      <Cover />

      <div className="profile-wrapper">
        <div className='profile-border'>
          <img src="./src/assets/profile_demo.jpg" alt="ayan" className="profile-img" width={"180px"} />
        </div>
        <div className='social'>
          <button>Follow <FontAwesomeIcon icon={faFacebookF} color='#1111dd'/></button>
          <button>Follow <FontAwesomeIcon icon={faLinkedinIn} color='#00f'/></button>
          <button>Follow <FontAwesomeIcon icon={faGithub} color='#555'/></button>
        </div>
      </div>
    </div>
  );
}

export default Profile;