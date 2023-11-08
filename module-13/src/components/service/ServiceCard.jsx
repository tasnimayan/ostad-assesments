import './service-card.style.css'

const ServiceCard = (props) => {
  const {imgSrc, title} = props
  return (
    <>
      <a href={imgSrc} className="experiment">
        <div className="experiment-mask"></div>
        <div className="experiment-circle">
          <div className="experiment-image"></div>
        </div>
        <div className="experiment-title-area">
          <div className="experiment-title-label">Title</div>
          <div className="experiment-title">{title}</div>
        </div>
        <div className="experiment-number-area">&nbsp;</div>
      </a>
    </>
  );
};

export default ServiceCard;