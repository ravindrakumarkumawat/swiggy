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
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

router.get('/:id/order', getAllOrders)
router.post('/:id/order', addOrder)

module.exports = router