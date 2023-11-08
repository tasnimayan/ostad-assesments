import { useState } from "react";
import ServiceCard from "../components/service/ServiceCard";


const Service = () => {
  const data = [{imgSrc:'', title:"CSS3 spin preloader + preloader page"},{imgSrc:'', title:"Search Input context animation"}, {imgSrc:'', title:"Brick Boilerplate"}, {imgSrc:'', title:"Open and close menu animation"}]
  const [cardData, setCardData] = useState(data)
  return (
    <section className="experiments-section">
      {cardData.map((item, idx) => <ServiceCard key={idx+1}imgSrc={item.imgSrc} title={item.title} />)}
      {/* <ServiceCard /> */}
    </section>
  );
};

export default Service;