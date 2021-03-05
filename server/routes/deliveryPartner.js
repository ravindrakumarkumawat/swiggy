const express = require('express')
const router = express.Router()
const {
  getAllDeliveryPartners,
  registerDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
} = require('../controllers/deliveryPartner')

router.get('/', getAllDeliveryPartners)
router.post('/register', registerDeliveryPartner)
router.patch('/:id', updateDeliveryPartner)
router.delete('/:id', deleteDeliveryPartner)

module.exports = router