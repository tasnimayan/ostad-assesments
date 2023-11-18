import Socials from "./Socials";

const MemberCard = ({data}) => {
  return (
    <div className="col-lg-4 text-center">
      <div className="rounded-4 shadow pb-4 border">
        <div className="position-relative">
          <img src={data.imgSrc} alt="" width={"100%"} height={"320px"} className="rounded-top-4 object-fit-cover"/>
          <Socials links={data.socials}/>

        </div>
        <p className='counts'>{data.name}</p>
      </div>
    </div>
  );
};

export default MemberCard;