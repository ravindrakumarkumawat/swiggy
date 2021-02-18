const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  location: {
    city: {
      type: String
    }, 
    landmark: {
      type: String
    },   
    address: {
      type: String
    },
    coordinates: {
      latitude: {
        type: Number
      },
      longitude: {
        type: Number
      }
    }
  },
  orders: {
    type: Array
  },
  registeredOn: {
    type: Date,
    default: Date.now
  }
})

const Customer = mongoose.model("customer", customerSchema)

module.exports = Customer