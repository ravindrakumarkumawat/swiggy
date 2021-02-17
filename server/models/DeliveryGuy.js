const mongoose = require("mongoose")
const deliveryGuySchema = new mogoose.Schema({
  name: {
    type: String,
    required: true
  },
  serviceArea: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  vehical: {
    type: String,
    required: true
  },
  referralCode: {
    type: Number,
    required: true,
    unique: true
  },
  deliverOrders: {
    type: Array
  },
  recieveOrders: {
    type: Array
  },
  earnings: {},
  incentives: {},
  adjustments: {}, // flating cash me se adjustment
  floatingCash: {}, // cash deposit to swiggy of orders
  isOnDuty: {
    type: Boolean,
    required: true,
    default: false
  }, 
  loginHistory: {}, // login inside the app for orders or onduty
  ratings: {
    type: Number
  },
  registeredOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = DeliveryGuy = mongoose.model("deliveryGuy", deliveryGuySchema)