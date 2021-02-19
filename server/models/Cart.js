const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types

const cartSchema = new mongoose.Schema({
  customerId: {
    type: ObjectId,
    required: true
  },
  orders: [
    {
      orderId: {
        type: ObjectId,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema)

 
