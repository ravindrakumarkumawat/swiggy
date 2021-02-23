const mongoose = require("mongoose")
const { ROLE } = require("./Role")

const deliveryPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  serviceArea: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLE.DELIVERY
  },
  vehicle: {
    type: String,
    required: true,
  },
  referralCode: {
    type: Number,
    unique: true,
  },
  earnings: {
    type: Array
  },
  incentives: {
    type: Array
  },
  adjustments: {
    type: Array
  }, // floting cash me se adjustment
  floatingCash: {
    type: Array
  }, // cash deposit to swiggy of orders
  isOnDuty: {
    type: Boolean,
    required: true,
    default: false,
  },
  loginHistory: [{
    from: {
      type: Date,
      required: true
    },
    to: {
      type: Date
    }
  }], // login inside the app for orders or onduty
  firstMile: {}, // Distance between deliveryGuy to Restaurant
  lastMile: {}, // Distance between deliveryGuy to customer
  rating: {},
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("DeliveryPartner", deliveryPartnerSchema)
