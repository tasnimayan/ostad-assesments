import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5, faCss3Alt, faSquareJs, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import './aboutme.style.css'
const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='inner-container'>
        <h4>ABOUT ME</h4>
        <p>
          I'm a Frontend Developer based in Morocco who is passionate about delivering value to businesses through technology. I love the challenge of finding creative solutions to problems, and I enjoy collaborating with teams to achieve great results.<br />
          I am dedicated to keeping up-to-date with the latest technologies and trends to provide the best solutions for my clients.<br/>

          I pay great attention to detail in the design and development of my projects. My ultimate goal is to create software that is both user-friendly and impactful in achieving the client's objectives.
        </p>
      </div>

      <div className='inner-container'>
        <h4>Skills</h4>
        <div>
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
      </div>
      
    </section>
  );
};

export default AboutMe;