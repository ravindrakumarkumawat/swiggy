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
  restaurantId: {
    type: ObjectId,
    required: true,
    ref: 'Restaurant'
  },
  addedOn: {
    type: Date,
    default: Date.now
  }
}) 

const Item = mongoose.model('Item', itemSchema)

const getRestaurantAllItems = async (id) => {
  try {
    return Item.find({ restaurantId: id })
  } catch (err) {
    return { error: err.message }
  }
}

const addRestaurantItem = async (req, restaurant) => {
  const { id } = req.params
  const {
    category, 
    name,
    price,
    description,
    quantity    
  } = req.body

  try {
    const newItem = await Item.create({
      category, 
      name,
      price,
      description,
      quantity,
      restaurantId: mongoose.Types.ObjectId(id) 
    })

    restaurant.menus.push(newItem._id)
    await restaurant.save()

    return newItem
  } catch(err) {
    return { error: err.message }
  }
}

module.exports = {
  getRestaurantAllItems,
  addRestaurantItem
}