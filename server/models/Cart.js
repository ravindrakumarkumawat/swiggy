const mongoose, { ObjectId } = require("mongoose")
const cartSchema = new mogoose.Schema({
  customerId: {},
  items: [{ 
    orderId: {},
    totalPrice: {},
  } 
  ]
})

module.exports = Cart = mongoose.model("cart", cartSchema)