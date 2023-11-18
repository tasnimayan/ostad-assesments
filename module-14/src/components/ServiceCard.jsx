import './serviceCard.style.css'

const ServiceCard = () => {
  return (
    <div className="col-md-6 d-sm-block w-50 p-0">
      <div className="row g-3 m-0" style={{height:"270px"}}>
        <div className="col-8"><img src="../../images/hero_1.jpg" alt="" style={{objectFit:"cover", width:"100%", height:"270px"}} className='rounded-3'/></div>
        <div className="col-4">
          <img src="../../images/hero_2.jpg" alt="" style={{objectFit:"cover", width:"100%", height:"270px"}} className='rounded-3'/>
        </div>
      </div>

      <div className="row g-3 m-0 h-auto py-3" style={{height:"160px"}}>
        <div className="col-5">
          <img src="../../images/hero_3.jpg" alt="" style={{objectFit:"cover", width:"100%", height:"160px"}} className='rounded-3'/>
        </div>
        <div className="col-7">
          <img src="../../images/hero_4.jpg" alt="" style={{objectFit:"cover", width:"100%", height:"160px"}} className='rounded-3'/>
        </div>
      </div> 
    </div>
  );
};

export default ServiceCard;