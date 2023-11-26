import { Routes, Route } from "react-router";
import StudentList from "../Pages/StudentList";
import StudentRegistration from "../Pages/StudentRegistration";


const Navigation = () => {
  return (
    <nav className="">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="/">Students</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/registration">Register</a>
        </li>
      </ul>

      <Routes >
        <Route path="/" element={<StudentList/>} />
        <Route path="/registration" element={<StudentRegistration/>} />
      </Routes>
      
    </nav>
  );
};

export default Navigation;