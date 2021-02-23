require('dotenv').config()

const Restaurant = require('../models/Restaurant')
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

    const accessToken = jwt.sign({ id: restaurant._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'})
    res.status(200).json({
      accessToken,
      restaurant
    })

  } catch (err) {
    res.status(500).json({ error: err.message })
  }  
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant
}