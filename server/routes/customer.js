const express = require('express')
const router = express.Router()

const {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
  getAllOrders,
  addOrder
} = require('../controllers/customer')

router.get('/', getAllCustomers)
router.post('/', addCustomer)
// router.patch('/:id', updateCustomer)
// router.delete('/:id', deleteCustomer)

// router.get('/:id/orders', getAllOrders)
// router.post('/:id/orders', addOrder)

module.exports = router