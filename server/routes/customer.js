const express = require('express')
const router = express.Router()

const {
  getAllCustomers,
  registerCustomer,
  loginCustomer,
  updateCustomer,
  deleteCustomer,
  getAllOrders,
  addOrder
} = require('../controllers/customer')

router.get('/', getAllCustomers)
router.post('/register', registerCustomer)
router.post('/login', loginCustomer)
router.patch('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

router.get('/:id/orders', getAllOrders)
router.post('/:id/orders', addOrder)

module.exports = router