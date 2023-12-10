const mongoose =require('mongoose')

const orderSchema = new mongoose.Schema({
  userID:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'UserModel',
    required:true
  },
  items: [
    {
      productID:{type:mongoose.Schema.Types.ObjectId, ref:"ProductModel", required:true},
      quantity:{type:Number, required:true, min:1}
    }
  ],

  totalAmount: {type: Number, required:true, min:0},
  shippingAddress:{type: String, required:true},
  status: {type: String, required:true, default: "Pending"},

},{
  timestamps:true,
  versionKey:false
})

const OrderModel = mongoose.model('invoice-products', orderSchema)

module.exports = OrderModel;