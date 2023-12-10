const {
   ProductService,
  DetailsService,
  CreateService,
 } = require('../services/productServices')


 exports.GetAllProducts = async (req, res) =>{
   try{
      const product = await ProductService();

      res.status(200).send({message:"success", data: product})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductDetails = async (req, res) =>{
   const productId = req.params.productId
   try{
      const product = await DetailsService(productId);

      res.status(200).send({message:"success", data: product})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

exports.ProductCreate = async (req, res) =>{
   const payload = req.body
   try{
      const product = await CreateService(payload)
      res.status(200).send({message:"success", controller:"ProductListByKeyword"})
   }
   catch(err) {
      console.log(err)
      res.status(404).send({err})
   }
}

exports.CreateProductReview = async (req, res) =>{
   try{
    res.status(200).send({message:"success", controller:"CreateProductReview"})
   }
   catch(err) {
    console.log(err)
    res.status(404).send({err})
   }
}

