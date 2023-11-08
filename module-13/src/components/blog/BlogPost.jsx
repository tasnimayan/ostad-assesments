import './blog.style.css'

const BlogPost = ({postObj}) => {

  return (
    <div>
        <div className="blog-wrapper flex-col">
          <div className='blog-item'>
            <img src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?w=900&t=st=1699461842~exp=1699462442~hmac=18c457189dbd10659e85c75a74677b7c6eb98b360461d8c73a97692e02a281bd" alt={"project photo"} />
            <div className='blog-desc'>
              <h3>{postObj.title}</h3>
              <p>{postObj.details}</p>
              <span className='see-more'>See more . . .</span>
            </div>
          </div>
          
        </div>
    </div>
  );
};

export default BlogPost;