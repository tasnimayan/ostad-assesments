const Student = require("../models/registrationModel");

exports.registerStudent = async (req, res)=> {
  try {
    // Create and save user to DB
    const userData = { ...req.body };
    console.log(userData)
    const student = await Student.create(userData);

    if (!student) {
      return res.status(400).send();
    }
    res
      .status(201)
      .send({ message: 'Student data inserted successfully!'});
  }
  catch (err) {
    res.status(400).send({ error: err.message });
  }
}


// ==========  Data Update Functionalities ===========
exports.updateStudent = async (req, res)=> {
  try {
    // handling request object
    const updates = req.body;
    const id = req.params["id"]

    const student = await Student.findByIdAndUpdate(id, updates);

    if (!student) {
      return res.status(404).send();
    }

    res.status(200).send({ message: 'Data updated!', student });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}


// ========== Data deletion Functionalities ===========
exports.deleteStudent = async (req, res) =>{
  try {
    const id= req.params["id"]
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      return res.status(404).send({ message: 'No student found!' });
    }
    res.status(204).send({message:"delete successful"});
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}

// Get student Details
exports.getStudentData = async (req, res)=> {
  try {
    const allStudents = await Student.find();

    if (allStudents.length === 0) {
      return res.status(200).send({ message: 'No students found' });
    }
    res.status(200).send(allStudents);
  } catch (err) {
    res.status(400).send(err.message);
  }
}
