const express = require('express')
const router = express.Router()
const {
  getAllDeliveryPartners,
  registerDeliveryPartner,
  loginDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
} = require('../controllers/deliveryPartner')

router.get('/', getAllDeliveryPartners)
router.post('/register', registerDeliveryPartner)
router.post('/login', loginDeliveryPartner)
router.patch('/:id', updateDeliveryPartner)
router.delete('/:id', deleteDeliveryPartner)

module.exports = router