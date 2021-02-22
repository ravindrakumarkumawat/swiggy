const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const itemSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  isVeg: {
    type: Boolean,
    required: true,
    default: true
  },
  isInStock: {
    type: Boolean,
    required: true,
    default: true
  },
  images: {
    type: Array
  },
  restaurant:{
    restaurantId: {
      type: ObjectId,
      required: true,
      ref: 'Restaurant'
    },
    outletId: {
      type: ObjectId,
      required: true,
      ref: 'Outlet'
    }
  },
  addedOn: {
    type: Date,
    default: Date.now
  }
}) 

module.exports = mongoose.model('Item', itemSchema)