const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })
const mongoose = require('mongoose')

const Restaurant = require('../models/Restaurant')
const Item = require('../models/Item')
const Order = require('../models/Order')
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
  const { id } = req.params

  try {
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
  const { id } = req.params

  try {
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
  const { email, password } = req.body

  try {
    // Authenticate restaurant

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
  const { id } = req.params

  try {
    const items = await Item.find({ restaurantId: id })

    res.status(200).json(items)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const addItem = async (req, res) => {
  const { id } = req.params
  const {
    category, 
    name,
    price,
    description,
    quantity    
  } = req.body

  try {    
    const restaurant = await Restaurant.findOne({_id: id})
    
    if(!restaurant) {
      return res.status(404).json({ error: "Restaurant does not exist"})
    }

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

    res.status(201).json(newItem)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const updateItem = async (req, res) => {
  const { id, itemId } = req.params
  const update = req.body

  try {
    const item = await Item.findOneAndUpdate({_id: itemId, restaurantId: id}, update, {new: true})

    if(!item) {
      return res.status(404).json({ error: "Item doesn't exist"})      
    }

    res.status(200).json(item)

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const deleteItem = async (req, res) => {  
  const { id, itemId } = req.params
    
  try {
    const restaurant = await Restaurant.findOne({_id: id}) 

    if(!restaurant) {
      return res.status(404).json({ error: "Restaurant doesn't exist"})
    }

    const del = await Item.findOneAndDelete({ _id: itemId, restaurantId: id })

    if (!del) {
      return res.status(404).json({ error: "Item not found" })
    }
    
    const index = restaurant.menus.findIndex((item) => String(item) === String(itemId)) 
  
    if(index !== -1) {
      restaurant.menus.splice(index, 1)

      await restaurant.save()

      return res.status(200).json({ message: 'Item is successfully deleted' })
    }

    res.status(200).json({ message: "Item available inside restaurant" })

  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const getAllOrders = async (req, res) => {
  const { id } = req.params

  try {
    const orders = await Order.find({ restaurantId: id })

    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const acceptedOrder = async (req, res) => {
  const { id, orderId } = req.params

  const { isAccepted } = req.body

  try {
    const order = await Order.findOne({ _id: orderId, restaurantId: id})

    order.status.isAccepted = isAccepted
    await order.save()

    res.status(200).json(order)
  } catch (err) {
    res.status(200).json({ error: err.message })
  }
}

const preparedOrder = async (req, res) => {
  const { id, orderId } = req.params

  const { isPrepared } = req.body

  try {
    const order = await Order.findOne({ _id: orderId, restaurantId: id})

    order.status.isPrepared = isPrepared
    await order.save()

    res.status(200).json(order)
  } catch (err) {
    res.status(200).json({ error: err.message })
  }
}

const readyOrder = async (req, res) => {
  const { id, orderId } = req.params

  const { isReady } = req.body

  try {
    const order = await Order.findOne({ _id: orderId, restaurantId: id})

    order.status.isReady = isReady
    await order.save()

    res.status(200).json(order)
  } catch (err) {
    res.status(200).json({ error: err.message })
  }
}

const statusUpdateOrder = async (req, res) => {
  // try {
  //   const { id, orderId } = req.params

  //   const { isAccepted, isPrepared, isReady } = req.body

  //   const order = await Order.findOne({ _id: orderId, restaurantId: id})

  //   if(isAccepted) {
  //     order.status.isAccepted = true
  //   }

  //   if(order.status.isAccepted && isPrepared) {
  //     order.status.isPrepared = true
  //   } else {
  //     return res.status(404).json({error: "Order should be accepted"})
  //   }

  //   if(order.status.isPrepared && isReady) {
  //     order.status.isReady = true
  //   } else {
  //     return res.status(404).json({error: "Order should be accepted & prepared"})
  //   }

  //   await order.save()

  //   res.status(200).json(order)
  // } catch (err) {
  //   res.status(200).json({ error: err.message })
  // }
}

module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  registerRestaurant,
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
  getAllOrders,
  acceptedOrder,
  preparedOrder,
  readyOrder,
  statusUpdateOrder
}