const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const outletSchema = new mongoose.Schema({   
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
  coordinates: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  restaurantId: {
    type: ObjectId,
    required: true,
    ref: 'Restaurant'
  }
})

module.exports = mongoose.model('Outlet', outletSchema)