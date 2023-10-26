

const Hero = () => {

  const code=`
    1  class Person {
    2      constructor() {
    3        this.name = "Tasnim Chowdhury Ayan";
    4        this.traits = ["DESIGN", "DEV"];
    5        this.age = new Date().getFullYear() - 1998;
    6      }
    7  }
    `
  return (
    <section className="hero-section flex-row">
      <div className="hero-left">
        <p>Hello, Im</p>
        <h1>Tasnim Ayan</h1>
        <p>creative full-stack web developer</p>
        <button>Download Resume</button>
        <div>social icons</div>
      </div>
      <div className="hero-right">
        <div>
          <pre>
            <code>
              {code}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;