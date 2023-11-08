import '../../styles/style.css'

const BlogPost = ({postObj}) => {

  return (
    <div>
      <div className='project-section' id="project">
      <div className="project-item flex-row">
        <div>
          <img src="https://images.ctfassets.net/wt70guc1rpin/wp-media-72945/678942b27cee9f0d67be793bd1d83d6d/Best-Free-Construction-Management-Software-Thumbnail.png" alt={"project photo"} />
        </div>
        <div className='project-desc'>
          <h3>{postObj.title}</h3>
          <p>{postObj.details}</p>
          <div className='see more'>See more . . .</div>
        </div>
      </div>
    </div>

      
    </div>
  );
};

export default BlogPost;