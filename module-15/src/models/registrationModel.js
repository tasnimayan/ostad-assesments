const mongoose = require('mongoose')

// Creating User Schema
const studentSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			trim: true,
			required: true,
			minLength: 2,
			maxLength: 99,
		},
    lastName: {
			type: String,
			trim: true,
			required: true,
			minLength: 2,
			maxLength: 99,
		},
    gender: {type:String},
    dob:Date,
    nationality: {type:String},

    address:{
			type: String,
			trim: true,
			minLength: 2,
			maxLength: 99,
		},

		email: {
			type: String,
			trim: true,
			required: true,
			unique: true,
			lowercase: true,
		},

    phone: {type: String},
		admissionDate: Date,
		courses: {type:String},
  },
	{ timestamps: true,  }
);

const Student = new mongoose.model('Student', studentSchema)
module.exports = Student;