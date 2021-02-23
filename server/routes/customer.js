const express = require('express')
const router = express.Router()

const {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customer')

router.get('/', getAllCustomers)
router.post('/', addCustomer)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

module.exports = router