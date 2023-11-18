
const FeaturedCard = ({data}) => {
  console.log(data.imgSrc)
  return ( 
    <div className="col-6">
      <div>
        <div>
          <img src={data.imgSrc} alt="" className='rounded-4' />
        </div>
        <p className='card-date'>{data.category} - {data.date} </p>
        <p className="card-title">{data.title}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;