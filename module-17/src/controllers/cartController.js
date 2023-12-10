const {
  CartService,
  AddToCartService,
  RemoveFromCartService} = require('../services/cartService')



exports.UserCart = async (req, res) =>{
  const userID = req.body.user
  try{
     const product = await CartService(userID);

     res.status(200).send({message:"success", data: product})
  }
  catch(err) {
   console.log(err)
   res.status(404).send({err})
  }
}

exports.AddToCart = async (req, res) =>{
  const productID = req.params.productId
  const userID = req.body.user

  try{
     const product = await AddToCartService(userID, productID, req.body.quantity);

     res.status(200).send({message:"success", data: product})
  }
  catch(err) {
   console.log(err)
   res.status(404).send({err})
  }
}

exports.RemoveFromCart = async (req, res) =>{
  // const payload = req.body
  try{
     const product = await RemoveFromCartService(req.params.productId)
     res.status(200).send({message:"success", data:product})
  }
  catch(err) {
     console.log(err)
     res.status(404).send({err})
  }
}

exports.CheckOut = async (req, res) =>{
  try{
   res.status(200).send({message:"success", controller:"CreateProductReview"})
  }
  catch(err) {
   console.log(err)
   res.status(404).send({err})
  }
}

