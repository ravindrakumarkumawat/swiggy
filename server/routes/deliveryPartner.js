const express = require('express')
const router = express.Router()

router.get('/', () => console.log('All the DeliveryPartner'))
router.post('/', () => console.log('Add the DeliveryPartner'))
router.put('/:id', () => console.log('Update the DeliveryPartner'))
router.delete('/:id', () => console.log('Delete the DeliveryPartner'))

module.exports = router