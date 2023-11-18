import Card from "./Card";
import testimonial from '../../../public/database/testimonials.json'
const TestimonialSection = () => {
  return (
    <section>
      <div>
        <p className="section-title">TESTIMONIAL LIST</p>
        <p className="section-slogan">Better Agency/SEO Solution At Your Fingertips</p>
      </div>
      
      <div className="row py-4 g-5">
        {
          testimonial.map((item, index)=> <Card data={item} key={index}/>)
        }

      </div>
      
    </section>
  );
};

export default TestimonialSection;