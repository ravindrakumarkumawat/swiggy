const mongoose = require("mongoose")
const { ROLE } = require("./Role")
const { ObjectId } = mongoose.Schema.Types

const addressSchema = new mongoose.Schema({   
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country:{
    type: String,
    required: true
  }, 
  postalCode: {
    type: String,
    required: true
  },
  coordinate: {
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
  }
})

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
    type: String,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: ROLE.CUSTOMER
  },
  addresses: [addressSchema],
  orders: [{
    type: ObjectId,
    ref: 'Order'
  }],
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Customer", customerSchema)
