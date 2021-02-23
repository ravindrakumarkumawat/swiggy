const mongoose = require("mongoose")
const { ROLE } = require("./Role")
const { ObjectId } = mongoose.Schema.Types

const addressSchema = new mongoose.Schema({   
  address: {
    type: String
  },
  landmark: {
    type: String
  },
  city: {
    type: String
  },
  country:{
    type: String
  }, 
  postalCode: {
    type: String
  },
  coordinate: {
    latitude: {
      type: String
    },
    longitude: {
      type: String
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
    type: Number,
    required: true,
    unique: true
  },
  role: {
    type: String,
    default: ROLE.CUSTOMER
  },
  address: [addressSchema],
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
