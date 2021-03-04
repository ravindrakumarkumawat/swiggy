const mongoose = require("mongoose")
const { ROLE } = require("../utils/Role")
const { ObjectId } = mongoose.Schema.Types
const addressSchema = require('./AddressSchema')
const { generateHashPassword } = require('../utils/generateHashPassword')
const jwt = require('jsonwebtoken')

const restaurantSchema = new mongoose.Schema({
  name: {
    trim: true,
    type: String,
    required: true
  },
  ownerName: {
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

const getAllRestaurantsDocument = async () => {
  try {
    return Restaurant.find()
  } catch (err){
    return { error: err.message }
  }
}

const getRestaurantDocument = async (id) => {
  try {
    const restaurant = await Restaurant.findOne({ _id: id })
    
    return !restaurant ? { message: 'Restaurant not found' } : restaurant
  } catch (err) {
    return { error: err.message }
  }
}

const deleteRestaurantDocument = async (id) => {
  try {
    const restaurant = await Restaurant.findOneAndDelete({ _id: id })

    return !restaurant ? { message: 'Restaurant not found' } : { deleted: true }
  } catch(err) {
    return { error: err.message }
  }
}

const register = async (req) => {
  const { 
    name, 
    ownerName, 
    email,  
    password, 
    phone, 
    pocDesignation, 
    address, 
    landmark, 
    city, 
    country, 
    postalCode, 
    latitude, 
    longitude,
    cuisines, 
    isRestaurantVeg
  } = req.body

  try {
    const passwordHash = await generateHashPassword(password)
    
    const newRestaurant = new Restaurant({
      name,
      ownerName,
      email,
      phone, 
      pocDesignation,
      password: passwordHash,
      cuisines,
      outlet: {
        address,
        landmark,
        city,
        country,
        postalCode,
        coordinate: {
          latitude,
          longitude
        }
      },
      isRestaurantVeg
    })

    const savedRestaurant = await newRestaurant.save()
    
    // const id = { id: savedRestaurant._id }
    // const accessToken = jwt.sign(id, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'})

    return savedRestaurant
  } catch(err) {
    return { error: err.message }
  }
}

module.exports = {
  getAllRestaurantsDocument,
  getRestaurantDocument,
  deleteRestaurantDocument,
  register
}