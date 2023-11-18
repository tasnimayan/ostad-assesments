import ServiceCard from "./ServiceCard";

const Hero = () => {
  return (
    
    <header className="hero" style={{backgroundColor:"var(--bg-primary", fontFamily:"Poppins"}}>
      <div className="row">
        <div className="col-md-6 d-sm-block w-50 pt-5 pe-5">
          <h2 style={{fontFamily:"Poppins",fontSize:"50px", fontWeight:"700"}}>Increase Your Customers Loyalty and Satisfaction</h2>
          <p className="fs-5 fw-medium mb-5 pe-4">We help businesses like yours earn more customers standout from competitors, make more money</p>
          <button className="fs-5 text-white px-4 py-2 rounded-3 border-0 lh-lg" style={{backgroundColor:"var(--color-accent-primary)"}}>Get Started</button>
        </div>

          <ServiceCard />
      </div>
    </header>
  );
};

export default Hero;
