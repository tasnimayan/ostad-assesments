import SubscribeForm from "../forms/SubscribeForm";
import './subscribe.style.css'
const Subscribe = () => {
  return (
    <section>
      <div className="newsletter-container">
        <div className="d-flex flex-column align-items-center w-50 text-center">
          <p className="section-title">SUBSCRIBE</p>
          <h5 className="section-slogan">Subscribe To Get The Latest News About Us</h5>
          <p className="text-sm">Please Drop Your Email Below To Get Daily Update About What We Do</p>
          <SubscribeForm />
        </div>
        
      </div>
    </section>
  );
};

export default Subscribe;