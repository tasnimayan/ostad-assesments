

const ImageCard = ({images}) => {
  return (
    <div>
      <div className="row g-3 m-0" style={{height:"160px"}}>
        <div className="col-8 ">
          <img src={images[0]} alt="" style={{objectFit:"cover", width:"100%", height:"160px"}} className='rounded-3 shadow'/>
        </div>
        <div className="col-4">
          <img src={images[1]} alt="" style={{objectFit:"cover", width:"100%", height:"160px"}} className='rounded-3 shadow'/>
        </div>
      </div> 

      <div className="row g-3 m-0  h-auto py-3" style={{height:"270px"}}>
        <div className="col-6">
          <img src={images[2]} alt="" style={{objectFit:"cover", width:"100%", height:"270px"}} className='rounded-3 shadow'/></div>
        <div className="col-6">
          <img src={images[3]} alt="" style={{objectFit:"cover", width:"100%", height:"270px"}} className='rounded-3 shadow'/>
        </div>
      </div>

    </div>
  );
};

export default ImageCard;