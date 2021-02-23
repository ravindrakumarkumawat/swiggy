const mongoose = require("mongoose")
const { ROLE } = require("./Role")

const deliveryPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
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
  country: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: ROLE.DELIVERY
  },
  vehicle: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    ref: 'Order'
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
  loginHistory: [{ // login inside the app for orders or onduty
    from: {
      type: Date
    },
    to: {
      type: Date
    }
  }], // firstmile and last should also be included somewhere
  rating: {
    type: Number,
    required: false
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("DeliveryPartner", deliveryPartnerSchema)
