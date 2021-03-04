const { 
  getAllCustomersDocument,
  getCustomer,
  addCustomerDocument,
  updateCustomerDocument,
  deleteCustomerDocument
} = require('../models/Customer')

const { getRestaurantDocument } = require('../models/Restaurant')

const {
  getCustomerAllOrders,
  addCustomerOrder
} = require('../models/Order')

const getAllCustomers = async (req, res) => {
  const customers = await getAllCustomersDocument()

  if(customers.error) {
    return res.status(500).json(customers)
  } 

  res.status(200).json(customers)
}

const addCustomer = async (req, res) => {
  const customer = await addCustomerDocument(req)

  if(customer.error) {
    return res.status(500).json(customer)
  }
  
  res.status(201).json(customer)
}

const updateCustomer = async (req, res) => {
  const customer = await updateCustomerDocument(req)

  if(customer.message) {
    return res.status(404).json(customer)
  }

  if(customer.error) {
    return res.status(500).json(customer)
  }

  res.status(200).json(customer)
}

const deleteCustomer = async (req, res) => {
  const { id } = req.params
  const customer = await deleteCustomerDocument(id)

  if(customer.error) {
    return res.status(500).json(customer)
  }

  if(customer.message) {
    return res.status(404).json(customer)
  }

  res.status(200).json(customer)
}

const getAllOrders = async (req, res) => {
  const { id } = req.params
  const customer = await getCustomer(id)

  if(customer.error) {
    return res.status(500).json(customer)
  }

  if(customer.message) {
    return res.status(404).json(customer)
  }
  
  const orders = await getCustomerAllOrders(id) 
  
  if(orders.message) {
    return res.status(404).json(orders)
  }

  if(orders.error) {
    return res.status(500).json(orders)
  }

  res.status(200).json(orders)
}

const addOrder = async (req, res) => {
  const { id } = req.params
  const { restaurantId } = req.body

  const customer = await getCustomer(id)

  if(customer.error) {
    return res.status(500).json(customer)
  }

  if(customer.message) {
    return res.status(404).json(customer)
  }

  const restaurant = await getRestaurantDocument(restaurantId)

  if(restaurant.message) {
    return res.status(404).json(restaurant)
  }

  if(restaurant.error) {
    return res.status(500).json(restaurant)
  }

  const createOrder = await addCustomerOrder(req, restaurant)
  
  if(createOrder.error) {
    res.status(500).json(createOrder)
  }
  res.status(201).json(createOrder)
}

module.exports = {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getAllOrders,
  addOrder
}