import { useState } from "react";
import TableRow from "../Components/TableRow";
import { getStudents } from "../APIServices/StudentCRUD";


const StudentList = () => {
  getStudents().then((data)=>{
    if(data){
      console.log(data)
    }
  })
  
  const [studentData, setStudentData] = useState([{
    name:"Ayan",
    gender:"Male",
    dob:"1998-10-24",
    nationality:"Bangladeshi",
    address:"Dhaka, Bangladesh",
    email:"ayan@gmail.com",
    phone:"01645800408",
    admissionDate:"2023-11-26",
    courses:"Computer"
  }]);
  return (
    <section className="px-5 text-center">
      <h3 className="pb-5">Student Details</h3>

      <div className="table-responsive w-100 d-block ">
        <table className="table table-striped text-start">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Nationality</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Admission Date</th>
              <th scope="col">Courses</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              studentData.map((rowData, index)=><TableRow data={rowData} key={index}/>)
            }
            
          </tbody>
        </table> 
      </div>    
  </section>
  );
};

export default StudentList;