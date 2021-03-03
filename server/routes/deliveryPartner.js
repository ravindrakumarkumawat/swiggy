const express = require('express')
const router = express.Router()
const {
  getAllDeliveryPartners,
  addDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
} = require('../controllers/deliveryPartner')

router.get('/', getAllDeliveryPartners)
router.post('/', addDeliveryPartner)
router.patch('/:id', updateDeliveryPartner)
router.delete('/:id', deleteDeliveryPartner)

module.exports = router