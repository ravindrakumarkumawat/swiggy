const path = require('path')
const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

require("dotenv").config({ path: path.resolve(__dirname, '../.env') })
const addressSchema = require('./AddressSchema')
const { createJWTToken } = require('../libs/auth')
const { ROLE } = require("../utils/Role")
const { 
  generateHashPassword, 
  comparePassword 
} = require('../utils/generateHashPassword')

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

    const restaurant = await newRestaurant.save()
    
    const payload = { id: restaurant._id }
    const accessToken = createJWTToken(payload)
    
    return { restaurant, accessToken }
  } catch(err) {
    return { error: err.message }
  }
}

const login = async (req) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return { 
        message: !email && password ? 'Enter registered email' : email && !password ? 'Enter password' : 'Enter email and password'
      }
    }

    const restaurant = await Restaurant.findOne({ email })
    
    if(!restaurant) {
      return { message: 'Email is not registered' }
    }
    
    const isMatch = await comparePassword(password, restaurant.password)
    
    if (!isMatch) {
      return { message: 'Incorrect Password' }
    }

    const payload = { id: restaurant._id }
    const accessToken = createJWTToken(payload)

    return { restaurant, accessToken}
  } catch (err) {
    return { error: err.message }
  }
}

module.exports = {
  getAllRestaurantsDocument,
  getRestaurantDocument,
  deleteRestaurantDocument,
  register,
  login
}