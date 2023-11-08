import Cover from "../components/about/Cover";
import Intro from "../components/about/Intro";
import Location from "../components/about/Location";
import WorkedWith from "../components/about/WorkedWith";


const About = () => {
  return (
    <section>
      <Cover />
      <section style={{padding:"0 12.5em"}}>
        <Intro />
        <Location />
        <WorkedWith />
      </section>
    </section>
  );
};

export default About;