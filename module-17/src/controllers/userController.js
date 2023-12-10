const { SignUpService, LoginService } = require("../services/userServices");


exports.userSignUp = async (req, res) => {
  const payload = req.body;

  const user = await SignUpService(payload);
  if(!user){
    res.status(400).send({message:"Couldn't create user"})
  }
  res.status(200).send({message:"User created", data:user})
}

exports.userProfile = async (req, res) => {

}

exports.userLogin = async (req, res) => {

  const payload = req.body
  const user = await LoginService(payload)

  if(!user){
    res.status(404).send({message:"No user matched"})
  }
  else 
    res.status(200).send({message:"Login Successful", data:user})

}

exports.userProfile = async (req, res) =>{
  res.status(200).send({message:"OK"})
}
