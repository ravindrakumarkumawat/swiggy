const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })

const {
  getAllRestaurantsDocument,
  getRestaurantDocument,
  deleteRestaurantDocument,
  register,
  login
} = require('../models/Restaurant')

const {
  getRestaurantAllItems,
  addRestaurantItem,
  updateRestaurantItem,
  deleteRestaurantItem
} = require('../models/Item')

const {
  getRestaurantAllOrders
} = require('../models/Order')

const getAllRestaurants = async (req, res) => {
  const restaurants = await getAllRestaurantsDocument()

  if(restaurants.error) {
    return res.status(500).json(restaurants)
  }

  res.status(200).json(restaurants)
}

const getRestaurant = async (req, res) => {
  const { id } = req.params
  const restaurant = await getRestaurantDocument(id)

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  if(restaurant.message) {
    return res.status(404).json(restaurant)
  }

  res.status(200).json(restaurant)
}

const deleteRestaurant = async (req, res) => {
  const { id } = req.params
  const restaurant = await deleteRestaurantDocument(id)

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  if(restaurant.message) {
    return res.status(404).json(restaurant)
  }

  res.status(200).json(restaurant)
}

const registerRestaurant = async (req, res) => {
  const savedRestaurant = await register(req)

  if(savedRestaurant.error) {
    return res.status(500).json(savedRestaurant)
  }
    
  res.status(201).json(savedRestaurant)
}

const loginRestaurant = async (req, res) => {
  const restaurant = await login(req)

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  if(restaurant.message) {
    return res.status(400).json(restaurant)
  }

  res.status(200).json(restaurant) 
}

const getAllItems = async (req, res) => {
  const { id } = req.params

  const items = await getRestaurantAllItems(id)

  if(items.error) {
    return res.status(500).json(items)
  }

  res.status(200).json(items)
}

const addItem = async (req, res) => {
  const { id } = req.params
  const restaurant = await getRestaurantDocument(id)

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  if(restaurant.message) {
    return res.status(404).json(restaurant)
  }

  const item = await addRestaurantItem(req, restaurant)

  if(item.error) {
    return res.status(500).json(item)
  }

  res.status(201).json(item)
}

const updateItem = async (req, res) => {
  const item = await updateRestaurantItem(req)

  if(item.error) {
    return res.status(500).json(item)
  }

  if(item.message) {
    return res.status(404).json(item)
  }

  res.status(200).json(item)
}

const deleteItem = async (req, res) => {
  const { id } = req.params
  const restaurant = await getRestaurantDocument(id)

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  if(restaurant.message) {
    return res.status(404).json(restaurant)
  }

  const item = await deleteRestaurantItem(req, restaurant)

  if(item.error) {
    return res.status(500).json(item)
  }

  if(item.message) {
    return res.status(404).json(item)
  }

  res.status(200).json(item)
}



const getAllOrders = async (req, res) => {
  const { id } = req.params
  const orders = await getRestaurantAllOrders(id)

  if(orders.error) {
    res.status(500).json(orders)
  }

  res.status(200).json(orders)
}

// const acceptedOrder = async (req, res) => {
//   const { id, orderId } = req.params

//   const { isAccepted } = req.body

//   try {
//     const order = await Order.findOne({ _id: orderId, restaurantId: id})

//     order.status.isAccepted = isAccepted
//     await order.save()

//     res.status(200).json(order)
//   } catch (err) {
//     res.status(200).json({ error: err.message })
//   }
// }

// const preparedOrder = async (req, res) => {
//   const { id, orderId } = req.params

//   const { isPrepared } = req.body

//   try {
//     const order = await Order.findOne({ _id: orderId, restaurantId: id})

//     order.status.isPrepared = isPrepared
//     await order.save()

//     res.status(200).json(order)
//   } catch (err) {
//     res.status(200).json({ error: err.message })
//   }
// }

// const readyOrder = async (req, res) => {
//   const { id, orderId } = req.params

//   const { isReady } = req.body

//   try {
//     const order = await Order.findOne({ _id: orderId, restaurantId: id})

//     order.status.isReady = isReady
//     await order.save()

//     res.status(200).json(order)
//   } catch (err) {
//     res.status(200).json({ error: err.message })
//   }
// }

// const statusUpdateOrder = async (req, res) => {
//   // try {
//   //   const { id, orderId } = req.params

//   //   const { isAccepted, isPrepared, isReady } = req.body

//   //   const order = await Order.findOne({ _id: orderId, restaurantId: id})

//   //   if(isAccepted) {
//   //     order.status.isAccepted = true
//   //   }

//   //   if(order.status.isAccepted && isPrepared) {
//   //     order.status.isPrepared = true
//   //   } else {
//   //     return res.status(404).json({error: "Order should be accepted"})
//   //   }

//   //   if(order.status.isPrepared && isReady) {
//   //     order.status.isReady = true
//   //   } else {
//   //     return res.status(404).json({error: "Order should be accepted & prepared"})
//   //   }

//   //   await order.save()

//   //   res.status(200).json(order)
//   // } catch (err) {
//   //   res.status(200).json({ error: err.message })
//   // }
// }

module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  registerRestaurant,
  loginRestaurant,
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
  getAllOrders,
  // acceptedOrder,
  // preparedOrder,
  // readyOrder,
  // statusUpdateOrder
}