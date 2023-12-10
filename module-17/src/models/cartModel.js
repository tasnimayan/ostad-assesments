const mongoose =require('mongoose')

const cartSchema = new mongoose.Schema({
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'UserModel',
    required:[true, "A product should be added"]
  },

  productID:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'ProductModel',
    required:[true, "A product should be added"]
  },
  
  quantity:{ type:Number, required:true, min:1}
},{
  timestamps:true,
  versionKey:false
})

const CartModel = mongoose.model('carts', cartSchema)

module.exports = CartModel;