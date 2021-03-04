const mongoose = require("mongoose")
const { ROLE } = require("../utils/Role")
const { ObjectId } = mongoose.Schema.Types
const addressSchema = require('./AddressSchema')

const restaurantSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true
  },
  ownername: {
    type: String,
    required: true
  },
  email: {
    trim: true,
    type: String,
    required: true,
    unique: true
  },
  phone: {
    trim: true,
    type: String,
    required: true,
    unique: true
  },
  pocDesignation: { // point of contact (poc) manger or owner to swiggy
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: ROLE.RESTAURANT
  },
  outlet: {
    type: addressSchema,
    required: true
  },
  cuisines: {
    type: String,
    required: true
  },
  menus: [{
      type: ObjectId,
      ref: 'Item'
  }],
  isRestaurantVeg: {
    type: Boolean,
    required: true,
    default: true
  },
  rating: {
    type: Number,
    required: false
  },
  orders: [{
    type: ObjectId,
    ref: 'Order'
}],
  registeredOn: {
    type: Date,
    default: Date.now,
  }
})

const Restaurant  = mongoose.model("Restaurant", restaurantSchema)

const getAllRestaurantDocuments = async () => {
  try {
    return Restaurant.find()
  } catch (err){
    return { error: err.message }
  }
}

const getRestaurantDocument = async (id) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: id })

    if(!restaurant) {
      return {
        message: 'Restaurant not found'
      }
    }

    return restaurant
  } catch (err) {
    return { error: err.message }
  }
}

const deleteRestaurantDocument = async (id) => {
  try {
    const restaurant = await Restaurant.findOneAndDelete({ _id: id })

    if (!restaurant) {
      return { message: "Restaurant not found" }
    }
    
  return { deleted: true }
  } catch(err) {
    return { error: err.message }
  }
}

module.exports = {
  getAllRestaurantDocuments,
  getRestaurantDocument,
  deleteRestaurantDocument
}