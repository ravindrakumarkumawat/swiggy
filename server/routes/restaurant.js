const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middlewares/authenticateToken')

const {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  registerRestaurant,
  getAllItems,
  addItem,
  updateItem,
  deleteItem
} = require('../controllers/restaurant')

router.get('/', getAllRestaurants)

router.get('/:id', getRestaurant)

router.post('/register', registerRestaurant)

router.post('/login', ()=> {
  console.log('Login restaurant')
})

router.put('/:id', ()=> {
  console.log('Updating something in restaurant')
})

router.delete('/:id', deleteRestaurant)

router.get('/:id/item', getAllItems)
router.post('/:id/item', addItem)
router.put('/:id/item/:itemId', updateItem)
router.delete('/:id/item/:itemId', deleteItem)

module.exports = router