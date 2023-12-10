const ProductModel = require('../models/productModel')

const mongoose = require('mongoose')


const ProductService = async (pID) =>{
  const product = ProductModel.find()
  return product
  
}

const DetailsService = async (pID) =>{
  pID = new mongoose.Types.ObjectId(pID)
  const product = ProductModel.findById(pID)
  return product
  
}

const CreateService = async (data) =>{
  const product = ProductModel.create(data)
  return product
}


module.exports = {
  ProductService,
  DetailsService,
  CreateService,

};

