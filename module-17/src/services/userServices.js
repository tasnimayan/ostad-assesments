
const mongoose = require('mongoose')
const UserModel = require('../models/userModel')

module.exports = {

  SignUpService: async (userData) =>{

    try{
      const user = await UserModel.create(userData)
      return user;
    }
    catch(err){
      console.log(err)
      return false
    }
  },

  LoginService: async (formData) =>{

    try{
      const user = await UserModel.findOne({$and:[{email:formData.email}, {password:formData.password}]})

      console.log(user)
      return user;
    }
    catch(err){
      console.log(err);
      return false
    }

  }
}