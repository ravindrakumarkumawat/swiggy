const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

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
  locations: [{
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
    },
    isSelected: {
      type: Boolean,
      required: true,
      default: false
    }
  }],
  orders: [{
    orderId: {
      type: ObjectId
    } 
  }],
  registeredOn: {
    type: Date,
    default: Date.now
  }
})

const Customer = mongoose.model("customer", customerSchema)

module.exports = Customer