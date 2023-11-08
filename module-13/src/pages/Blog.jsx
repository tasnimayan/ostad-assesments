import BlogPost from "../components/blog/BlogPost";
import { useState } from 'react';


const Blog = () => {

  const blogPosts = [
    {
      title: "The Art of Creative Writing",
      details: "Learn the secrets of crafting compelling stories and engaging content that captivates your audience.",
      path: "/images/blog-post-1.jpg"
    },
    {
      title: "10 Tips for a Healthy Lifestyle",
      details: "Discover simple yet effective ways to improve your well-being and lead a healthier life.",
      path: "/images/blog-post-2.jpg"
    },
    {
      title: "Exploring the Wonders of Nature",
      details: "Take a journey through the beauty of the natural world and its incredible landscapes and wildlife.",
      path: "/images/blog-post-3.jpg"
    },
    {
      title: "Cooking Adventures in the Kitchen",
      details: "Delve into the world of culinary creativity with our mouthwatering recipes and cooking tips.",
      path: "/images/blog-post-4.jpg"
    }
  ];
  const [cardData, setCardData] = useState(blogPosts)

  return (
    <div>

      {cardData.map((item, idx)=>(<BlogPost postObj = {item} key={idx}/>))}

    </div>
  );
};

export default Blog;