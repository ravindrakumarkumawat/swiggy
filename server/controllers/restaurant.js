const Restaurant = require('../models/Restaurant')
const jwt = require('jsonwebtoken')


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

    const isMatch = 

    const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }  
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant
}