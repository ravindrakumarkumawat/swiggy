const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })
const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const Restaurant = require('../models/Restaurant')
const Item = require('../models/Item')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find()

    res.status(200).json(restaurants)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params

    const restaurant = await Restaurant.findOne({ _id: id })

    if(!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found' })
    }

    res.status(200).json(restaurant)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params

    const del = await Restaurant.findOneAndDelete({ _id: id })

    if (!del) {
      return res.status(404).json({ error: "Restaurant not found" })
    }
    
    res.status(200).json({ deleted: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const registerRestaurant = async (req, res) => {
  try {
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

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const newRestaurant = new Restaurant({
      name,
      ownername: ownerName,
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

    res.status(201).json(savedRestaurant)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const loginRestaurant = async (req, res) => {
  try {
    // Authenticate restaurant

    const { email, password } = req.body

    if(!email || !password) {
      return res.status(400).json({
        message: !email? 'Enter register email' : !password ? 'Enter password' : 'Enter email and password'
      })
    }

    const restaurant = Restaurant.find({ email })
    if(!restaurant) {
      return res.status(400).json({
        message: 'Restaurant with this email is not registered'
      })
    }

    const isMatch = await bcrypt.compare(password, restaurant.password)
    if(!isMatch) {
      return res.status(400).json({
        message: 'Incorrect Password'
      })
    }
    
    const id = { id: restaurant._id }
    const accessToken = jwt.sign(id, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'})
    res.status(200).json({
      accessToken,
      restaurant
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }  
}

const getAllItems = async (req, res) => {
  try {
    const { id } = req.params
    const items = await Item.find({ restaurantId: id })

    res.status(200).json(items)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const addItem = async (req, res) => {
  try {
    const { id } = req.params
    const {
      category, 
      name,
      price,
      description,
      quantity    
    } = req.body

    const newItem = await Item.create({
      category, 
      name,
      price,
      description,
      quantity,
      restaurantId: mongoose.Types.ObjectId(id) 
    })
    
    res.status(201).json(newItem)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const updateItem = async (req, res) => {
  try {
    res.status(200).json({message: 'update item'})

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const deleteItem = async (req, res) => {
  try {
    res.status(200).json({message: 'delete item'})

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  registerRestaurant,
  getAllItems,
  addItem,
  updateItem,
  deleteItem
}