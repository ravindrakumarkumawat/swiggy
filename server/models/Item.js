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

const updateRestaurantItem = async (req) => {
  const { id, itemId } = req.params
  const update = req.body

  try {
    const item = await Item.findOneAndUpdate({_id: itemId, restaurantId: id}, update, {new: true})

    if(!item) {
      return { message: "Item doesn't exist" }
    }

    return item
  } catch (err) {
    return { error: err.message }
  }
}

const deleteRestaurantItem = async (req, restaurant) => {
  const { id, itemId } = req.params

  try {
    const item = await Item.findOneAndDelete({ _id: itemId, restaurantId: id })

    if(!item) {
      return { message: "Item doesn't exist" }
    }

    
    const index = restaurant.menus.findIndex((item) => String(item) === String(itemId))

    if(index !== -1) {
      restaurant.menus.splice(index, 1)

      await restaurant.save()

      return { delete: true }
    }

  } catch (err) {
    return { error: err.message }
  }
}

module.exports = {
  getRestaurantAllItems,
  addRestaurantItem,
  updateRestaurantItem,
  deleteRestaurantItem
}