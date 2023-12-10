const CartModel = require('../models/cartModel')
const mongoose = require('mongoose')


const CartService = async (userID) =>{
  userID = new mongoose.Types.ObjectId(userID)

  const cart = await CartModel.find({userID:userID})
  return cart
  
}

const AddToCartService = async (userID, productID, quantity) =>{
  
  userID = new mongoose.Types.ObjectId(userID)
  productID = new mongoose.Types.ObjectId(productID)
  const cart = CartModel.create({userID:userID, productID: productID, quantity:quantity})
  return cart
  
}

const RemoveFromCartService = async (productID) =>{
  productID = new mongoose.Types.ObjectId(productID)

  const cart = CartModel.deleteOne({productID})
  return cart
}

// const CheckOutService = async (data) =>{
//   const cart = CartModel.create(data)
//   return cart
// }


module.exports = {
  CartService,
  AddToCartService,
  RemoveFromCartService,

};

