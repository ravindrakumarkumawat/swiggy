const mongoose, { ObjectId } = require("mongoose")
const ratingSchema = new mogoose.Schema({
  orderId: {
    type: ObjectId,
    required: true
  },
  restaurant: {
    type: ObjectId
  },
  deliveryGuy: {
    type: ObjectId
  }
})
module.exports = Rating = mongoose.model("order", ratingSchema)