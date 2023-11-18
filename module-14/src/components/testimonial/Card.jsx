
const Card = ({data}) => {
  return (
    <div className="col-md-6 col-lg-4 text-center">
      <div className="rounded-4 shadow py-5 px-4 d-flex flex-column align-items-center">
        <img src={data.imgSrc} alt="" width={"100%"} className="icon group object-fit-cover"/>
        <p className="py-4 m-0">{data.review}</p>
        <p className='counts m-0'>{data.name}</p>
        <p className="subtitle mt-2 mb-0">{data.position}</p>
      </div>
    </div>
  );
};

export default Card;