import MemberCard from "./MemberCard";
import memberData from '../../../public/database/teamMember.json'

const Members = () => {
  return (
    <section>
      <div>
        <p className="section-title">OUR TEAM MEMBER</p>
        <p className="section-slogan">Check our awesome team members</p>
      </div>
      
      <div className="row py-4 g-5">
        {
          memberData.map((member, index) => <MemberCard data={member} key={index}/>)
        }
      </div>
    </section>
  );
};

export default Members;