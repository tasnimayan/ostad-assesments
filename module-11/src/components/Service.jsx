

const Service = () => {

  const myService = ["HTML & CSS","Vanilla Js", "React", "Backend", "MongoDB"];

  return (
    <section style={{backgroundColor:"var(--color-dark)"}} id="service">
      <div>
        <h2>Services</h2>
      </div>

      {myService.map((item, index) => (
        <div className="service-item" key={index}>
          <img src="https://databox.com/wp-content/themes/databox/inc/img/templates/software-development.jpg" alt={`Image ${index + 1}`} />
          <p>Short Title about the service</p>
        </div>
      ))}

      
    </section>
  );
};

export default Service;