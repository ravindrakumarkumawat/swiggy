const mongoose, { ObjectId } = require("mongoose")
const orderSchema = new mogoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  restaurantId: {
    type: ObjectId,
    ref: 'Restaurant'
  }
})
module.exports = Order = mongoose.model("order", orderSchema)