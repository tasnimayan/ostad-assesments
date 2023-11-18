import serviceData from '../../../public/database/services.json'
import ServiceCard from './ServiceCard';

const ServiceList = () => {
  return (
    <section className='service-section' style={{paddingRight:"100px"}}>
      <div>
        <p className="section-title">ALL PROJECT</p>
        <p className="section-slogan">Better Agency/SEO Solution At Your Fingertips</p>
      </div>

      <div>
        <div className='row g-4 pt-5'>
        {
          serviceData.map((service, index) => <ServiceCard data={service} key={index}/>)
        }
        </div> 
      </div>
      
    </section>
  );
};

export default ServiceList;