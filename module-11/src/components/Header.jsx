

const Header = () => {

  let isEmployed = false;
  return (
    <nav className="top-nav">
      <div>Logo</div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#project">Projects</a></li>
      </ul>
      <div>
        {isEmployed?<span>Send an email</span>:<span>Hire Me</span>}
      </div>
    </nav>
  );
};

export default Header;