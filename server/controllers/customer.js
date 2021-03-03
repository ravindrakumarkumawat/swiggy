const mongoose = require('mongoose')
const Customer = require('../models/Customer')
const Restaurant = require('../models/Restaurant')
const Order = require('../models/Order')
const bcrypt = require('bcrypt')

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    
    res.status(200).json(customers)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const addCustomer = async (req, res) => {
  const { 
    name, 
    email,
    password,
    phone
  } = req.body

  try {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const savedCustomer = await Customer.create({
      name, 
      email,
      password: passwordHash,
      phone
    })


    res.status(201).json(savedCustomer)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateCustomer = async (req, res) => {
  const { id } = req.params
  const update = req.body

  try {
    if(update.address) return res.send('Abhi check karna h')

    const customer = await Customer.findOneAndUpdate({ _id: id }, update, {new: true})

    if(!customer) {
      return res.status(404).json({ error: "Customer doesn't exist" })
    }

    res.status(200).json(customer)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

const deleteCustomer = async (req, res) => {
  const { id } = req.params

  try {
    const del = await Customer.findOneAndDelete({ _id: id })

    if(!del) {
      return res.status(404).json({ error: "Customer is not found" })
    }

    res.status(200).json({ deleted: true })
    
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getAllOrders = async (req, res) => {
  const { id } = req.params

  try {
    const orders = await Order.find({ customerId: id})
    
    res.status(200).json(orders)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const addOrder = async (req, res) => {
  const { id } = req.params

  const {
    items, 
    request, 
    totalPrice, 
    restaurantId, 
    address,
    landmark,
    city,
    country,
    postalCode,
    latitude,
    longitude 
  } = req.body

  try {
    const restaurant = await Restaurant.findOne({_id: restaurantId})

    if(!restaurant) {
      return res.status(404).json({ error: "Restaurant does not exist"})
    }

    const createOrder = await Order.create({ 
      items,
      request,
      totalPrice,
      restaurantId: mongoose.Types.ObjectId(restaurantId),
      customerId: mongoose.Types.ObjectId(id),
      deliveryAddress: {
        address,
        landmark,
        city,
        country,
        postalCode,
        coordinate: {
          latitude,
          longitude
        }
      }
    })

    restaurant.orders.push(createOrder._id)
    await restaurant.save()

    res.status(201).json(createOrder)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getAllOrders,
  addOrder
}