const Student = require("../models/registrationModel");

exports.registerStudent = async (req, res)=> {
  try {
    // Create and save user to DB
    const userData = { ...req.body };
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
    const updates = Object.keys(req.body);

    const student = await Student.findByIdAndUpdate(req.user._id, updates);

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

    res.status(204).send("delete successful");
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
}