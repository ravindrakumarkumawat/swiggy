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
  deleteItem,
  getAllOrders,
  acceptedOrder,
  preparedOrder,
  readyOrder,
  statusUpdateOrder
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
router.patch('/:id/item/:itemId', updateItem)
router.delete('/:id/item/:itemId', deleteItem)

router.get('/:id/order', getAllOrders)
router.put('/:id/order/:orderId/accept', acceptedOrder)
router.put('/:id/order/:orderId/prepare', preparedOrder)
router.put('/:id/order/:orderId/ready', readyOrder)

// router.put('/:id/order/:orderId', statusUpdateOrder)

module.exports = router