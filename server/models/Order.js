const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const cartItemSchema = new mongoose.Schema({
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
  total: {
    type: Number,
    required: true
  }
})

const orderSchema = new mongoose.Schema({
  cart: [{ 
    type: cartItemSchema,
    required: true
  }],
  totalPrice: {
    type: Number,
    required: true
  },
  request: {
    // request regarding food by customer
    type: String,
    required: false,
  },
  restaurantId: {
    type: ObjectId,
    required: true,
    ref: 'Restaurant'
  },
  customerId: {
    type: ObjectId,
    required: true,
    ref: 'Customer'
  },
  deliveryPartnerId: {
    type: ObjectId,
    ref: 'DeliveryPartner'
  },
  deliveryAddress: {  
    type: String,
    required: true
  },
  status: {
    isPlaced: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAssigned: {
      type: Boolean,
      required: true,
      default: false
    },
    isPrepared: {
      type: Boolean,
      required: true,
      default: false,
    },
    isReady: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPickedUp: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isCanceled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  orderedOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Order", orderSchema)


