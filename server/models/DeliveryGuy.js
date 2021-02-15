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
  ratings: {
    type: Number
  },
  registeredOn: {
    type: Date,
    default: Date.now
  }
})

module.exports = DeliveryGuy = mongoose.model("deliveryGuy", deliveryGuySchema)