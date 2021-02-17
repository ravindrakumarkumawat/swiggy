const mongoose, { ObjectId } = require("mongoose")
const cartSchema = new mogoose.Schema({
  customerId: {},
  items: [{ 
    orderId: {},
    totalPrice: {},
  } 
  ]
})

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart