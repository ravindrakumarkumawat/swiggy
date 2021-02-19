const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

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
  coordinates: {
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  customerId: {
    type: ObjectId,
    required: true,
    ref: 'Customer'
  }
})

module.exports = mongoose.model('CustomerAddress', addressSchema)