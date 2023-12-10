const mongoose =require('mongoose')

const productSchema = new mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String, required:true},
  price: {type:Number, required:true, min:0},
  stock: {type:Number, required:true, min:0},
  category: { type:String, required:true },
  imageURL: {type:String},
},{
  timestamps:true,
  versionKey:false
})

const ProductModel = mongoose.model('products', productSchema)

module.exports = ProductModel;