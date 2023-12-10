
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  { 
    firstName: {type:String, required:true},
    lastName: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    address: {type:String},
    phoneNumber: {type:String},
  },
  {timestamps:true, versionKey:false}
)


const UserModel = mongoose.model('users', userSchema)

module.exports = UserModel;