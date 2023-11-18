import FeaturedCard from './FeaturedCard';
import './featured.style.css'
import featuredData from '../../../public/database/featuredProducts.json'

const FeaturedProduct = () => {
  return (
    <section className="featured-section" style={{backgroundColor:"var(--bg-secondary)"}}>
      <div>
        <p className="section-title"> FEATURED PROJECTS</p>
        <p className="section-slogan">We provide the Perfect Solution to your business growth</p>
      </div>

      <div className='row py-5 gx-4'>
        {/* === Large Image column === */}
        <div className='col-lg-6'>
          <div className=''>
            <div>
              <img src="../../../images/Mask.jpg" alt="" width={"100%"} className="rounded-4"/>
              <p className='card-date'>App Design - November 15, 2023 </p>
              <p className='fs-4 fw-bold'>App Redesign</p>
            </div>
          </div>
        </div>

        {/* === Four image column === */}
        <div className='col-lg-6'>
          <div className='row g-4'>
          {
            featuredData.map((el, idx)=><FeaturedCard data={el} key={idx}/>
            )
          }
          </div> 
        </div>

      </div>
    </section>
  );
};

export default FeaturedProduct;