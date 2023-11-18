import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUsers, faQrcode, faThumbsUp, faFaceSmile, faGlobe} from '@fortawesome/free-solid-svg-icons'
import "@fortawesome/fontawesome-svg-core"

const StatCard = ({data}) => {
  let icon;
  switch(data.icon){
    case "faUsers":
      icon=faUsers;
      break;
    case "faFaceSmile":
      icon=faFaceSmile;
      break;
    case "faThumbsUp":
      icon=faThumbsUp;
      break;
    case "faQrcode":
      icon=faQrcode;
      break;
    default:
      icon=faGlobe;

  }

  return (
    <div className="col-md-3">
      <div className='stat-card'>
        <div className='icon group'>
          <FontAwesomeIcon icon={icon} />
        </div>
        <p className='counts'>{data.count}</p>
        <p className='count-title'>{data.title}</p>
      </div>
    </div>
  );
};

export default StatCard;