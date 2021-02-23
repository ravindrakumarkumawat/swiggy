const express = require('express')
const router = express.Router()

router.get('/', () => console.log('All the customer'))
router.post('/', () => console.log('Add the customer'))
router.put('/:id', () => console.log('Update the customer'))
router.delete('/:id', () => console.log('Delete the customer'))

module.exports = router