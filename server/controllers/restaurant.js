const path = require('path')
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })

const {
  getAllRestaurantsDocument,
  getRestaurantDocument,
  deleteRestaurantDocument
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

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

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

// const registerRestaurant = async (req, res) => {
//   const { 
//     name, 
//     ownerName, 
//     email,  
//     password, 
//     phone, 
//     pocDesignation, 
//     address, 
//     landmark, 
//     city, 
//     country, 
//     postalCode, 
//     latitude, 
//     longitude,
//     cuisines, 
//     isRestaurantVeg
//   } = req.body

//   try {
//     const salt = await bcrypt.genSalt()
//     const passwordHash = await bcrypt.hash(password, salt)

//     const newRestaurant = new Restaurant({
//       name,
//       ownername: ownerName,
//       email,
//       phone, 
//       pocDesignation,
//       password: passwordHash,
//       cuisines,
//       outlet: {
//         address,
//         landmark,
//         city,
//         country,
//         postalCode,
//         coordinate: {
//           latitude,
//           longitude
//         }
//       },
//       isRestaurantVeg
//     })

//     const savedRestaurant = await newRestaurant.save()

//     // const id = { id: savedRestaurant._id }
//     // const accessToken = jwt.sign(id, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'})

//     res.status(201).json(savedRestaurant)

//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// }

// const loginRestaurant = async (req, res) => {
//   const { email, password } = req.body

//   try {
//     // Authenticate restaurant

//     if(!email || !password) {
//       return res.status(400).json({
//         message: !email? 'Enter register email' : !password ? 'Enter password' : 'Enter email and password'
//       })
//     }

//     const restaurant = Restaurant.find({ email })
//     if(!restaurant) {
//       return res.status(400).json({
//         message: 'Restaurant with this email is not registered'
//       })
//     }

//     const isMatch = await bcrypt.compare(password, restaurant.password)
//     if(!isMatch) {
//       return res.status(400).json({
//         message: 'Incorrect Password'
//       })
//     }
    
//     const id = { id: restaurant._id }
//     const accessToken = jwt.sign(id, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3 days'})
//     res.status(200).json({
//       accessToken,
//       restaurant
//     })

//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }  
// }

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
  // registerRestaurant,
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