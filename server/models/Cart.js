const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const cartSchema = new mogoose.Schema({
  orders: [{ 
    orderId: {
      type: ObjectId,
      required: true
    }
  } 
  ]
})

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart