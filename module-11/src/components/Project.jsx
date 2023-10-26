

const Project = () => {
  const projects = [
    {title:"First Project", desc:"Description of the project details is shown here"}, 
    {title:"Second Project", desc:"Description of the project details is shown here"},
    {title:"Third Project", desc:"Description of the project details is shown here"}
  ];

  return (
    <div className='project-section' id="project">
      <h2>Projects</h2>
      {projects.map((item, index)=>{
        return(
          <div className="project-item flex-row" key={index}>
            <div>
              <img src="https://images.ctfassets.net/wt70guc1rpin/wp-media-72945/678942b27cee9f0d67be793bd1d83d6d/Best-Free-Construction-Management-Software-Thumbnail.png" alt={"project photo"} />
            </div>
            <div className='project-desc'>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button>Live Demo</button>
            </div>
          </div>
        )
        
      })}
    </div>

  );
};

export default Project;