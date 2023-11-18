
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WorkCard = ({data}) => {
  // console.log("HEllo",title)
  return (
    <div className='work-card col-md-6 col-lg-4'>
      <div className='rounded-5 py-5 px-4 shadow-hover'>
        <div className='icon group'>
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <p className='work-title'>{data.title}</p>
        <p className='subtitle'>{data.subtitle}</p>
        <div className='btn px-4 py-2'>Learn More &rarr;</div>
      </div>
    </div>
  );
};

export default WorkCard;