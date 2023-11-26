import { Routes, Route } from "react-router";
import StudentList from "../Pages/StudentList";
import StudentRegistration from "../Pages/StudentRegistration";


const Navigation = () => {
  return (
    <nav>
      <div className="py-2 bg-body-tertiary fs-5">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="/">Students</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/registration">Register</a>
          </li>
        </ul>
      </div>
      

      <Routes >
        <Route path="/" element={<StudentList/>} />
        <Route path="/registration" element={<StudentRegistration/>} />
      </Routes>
      
    </nav>
  );
};

export default Navigation;