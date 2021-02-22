const Restaurant = require('../models/Restaurant')

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

const deleteRestaurant = (req, res) => {
  try {
    const { id } = req.params

    const del = await User.findOneAndDelete({ _id: id })

    if (!del) {
      return res.status(404).json({ error: "Restaurant not found" })
    }
    
    res.status(200).json({ deleted: true })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllRestaurants,
  getRestaurant
}