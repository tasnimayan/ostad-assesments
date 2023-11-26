
import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const StudentRegistration = () => {



// // const FillFrom = async (id) => {
// //   let res = await studentDataById(id)

// //   setFromData({
// //       firstName: res.firstName,
// //       lastName: res.lastName,
// //       gender: res.gender,
// //       dateOfBirth: res.dateOfBirth,
// //       nationality: res.nationality,
// //       address: res.address,
// //       email: res.email,
// //       phone: res.phone,
// //       admissionDate: res.admissionDate,
// //       courses: res.courses,
// //   })
// // }



// // const Save = async () => {
// //   if (UpdateId === null) {
// //       let res = await createStudentData(FormData);
// //       if (res) {
// //           toast.success("Student Data Created")
// //           navigate("/")
// //       }
// //       else {
// //           toast.error("Request Fail")
// //       }
// //   } else {

// //       let res = await updateStudentData(FormValue, UpdateId);
// //       if (res) {
// //           toast.success("Student Data  Update")
// //           navigate("/")
// //       }
// //       else {
// //           toast.error(" Update Request Fail")
// //       }
// //   }

// // };


  // Store the form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
    admissionDate: '',
    courses: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };  

  return (
    <div className='w-100 border'>
      <div className='w-50 d-flex justify-content-center'>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <div>
                  <Form.Check
                    inline
                    type="radio"
                    label="Male"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                  />
                  <Form.Check
                    inline
                    type="radio"
                    label="Female"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="nationality" as={Col}>
            <Form.Label>Nationality</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="admissionDate" as={Col}>
            <Form.Label>Admission Date</Form.Label>
            <Form.Control
              type="date"
              name="admissionDate"
              value={formData.admissionDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Row>
            {/* Other fields like nationality, phone, admissionDate */}
          </Row>
          <Form.Group controlId="courses">
            <Form.Label>Courses</Form.Label>
            <Form.Control
              as="select"
              name="courses"
              value={formData.courses}
              onChange={handleInputChange}
            >
              <option value="">Select Course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      
    </div>
    
  );
};

export default StudentRegistration;