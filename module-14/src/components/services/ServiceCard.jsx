import ImageCard from "./ImageCard";

const ServiceCard = ({data}) => {
  return (
    <div className="col-lg-6" style={{fontFamily:"Poppins"}}>
      <div className="p-4 rounded-4 shadow m-0">
        <p className="fs-4 fw-bold pt-4 m-0 ">{data.title.toUpperCase()}</p>
        <p className="fs-6 pt-4 pb-3 m-0" style={{color:"#9D9D9D"}}>{data.subtitle}</p>
        
        <ImageCard images={data.images}/>
      </div>
    </div>
  );
};

export default ServiceCard;