const { 
  getAllCustomersDocument,
  addCustomerDocument,
  updateCustomerDocument,
  deleteCustomerDocument
} = require('../models/Customer')

const Restaurant = require('../models/Restaurant')
const Order = require('../models/Order')
const bcrypt = require('bcrypt')

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

// const getAllOrders = async (req, res) => {
//   const { id } = req.params

//   try {
//     const orders = await Order.find({ customerId: id})
    
//     res.status(200).json(orders)

//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// }

// const addOrder = async (req, res) => {
//   const { id } = req.params

//   const {
//     items, 
//     request, 
//     totalPrice, 
//     restaurantId, 
//     address,
//     landmark,
//     city,
//     country,
//     postalCode,
//     latitude,
//     longitude 
//   } = req.body

//   try {
//     const restaurant = await Restaurant.findOne({_id: restaurantId})

//     if(!restaurant) {
//       return res.status(404).json({ error: "Restaurant does not exist"})
//     }

//     const createOrder = await Order.create({ 
//       items,
//       request,
//       totalPrice,
//       restaurantId: mongoose.Types.ObjectId(restaurantId),
//       customerId: mongoose.Types.ObjectId(id),
//       deliveryAddress: {
//         address,
//         landmark,
//         city,
//         country,
//         postalCode,
//         coordinate: {
//           latitude,
//           longitude
//         }
//       }
//     })

//     restaurant.orders.push(createOrder._id)
//     await restaurant.save()

//     res.status(201).json(createOrder)
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// }

module.exports = {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  // getAllOrders,
  // addOrder
}