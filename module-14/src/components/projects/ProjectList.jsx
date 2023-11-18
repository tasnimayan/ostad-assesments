import projectData from '../../../public/database/projects.json'
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section className='project-section' style={{paddingRight:"100px"}}>
      <div>
        <p className="section-title">ALL PROJECT</p>
        <p className="section-slogan">Better Agency/SEO Solution At Your Fingertips</p>
      </div>

      <div>
        <div className='row g-4 pt-5'>
        {
          projectData.map((project, index) => <ProjectCard data={project} key={index}/>)
        }
        </div> 
      </div>
      
    </section>
  );
};

export default ProjectList;