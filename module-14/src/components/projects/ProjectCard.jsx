
const ProjectCard = ({data}) => {
  return (
    <div className="col-lg-6">
      <div className="p-4 rounded-4 shadow m-0">
        <div>
          <img src={data.imgSrc} alt="" className='rounded-4' />
        </div>
        {/* <p className='card-date'>{data.title} - {data.date} </p> */}
        <p className="fs-4 fw-bold pt-4 pb-3 m-0 ">{data.title.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default ProjectCard;