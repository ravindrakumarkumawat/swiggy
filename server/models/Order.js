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
  request: { // request regarding food by customer
    type: String,
    required: false
  },
  restaurantId: {
    type: ObjectId
  },
  customerId: {
    type: ObjectId
  },
  status: {
    isPlaced: {
      type: Boolean,
      required: true,
      default: false
    },
    isAccepted: {
      type: Boolean,
      required: true,
      default: false
    },
    isPrepared: {
      type: Boolean,
      required: true,
      default: false
    },
    isReady: {
      type: Boolean,
      required: true,
      default: false
    },
    isPickedUp: {
      type: Boolean,
      required: true,
      default: false
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false
    },
    isDeliverd: {
      type: Boolean,
      required: true,
      default: false
    },
    isCanceled: {
      type: Boolean,
      required: true,
      default: false
    }
  } 
})
module.exports = Order = mongoose.model("order", orderSchema)