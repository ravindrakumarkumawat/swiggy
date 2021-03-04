const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middlewares/authenticateToken')

const {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  // registerRestaurant,
  // getAllItems,
  // addItem,
  // updateItem,
  // deleteItem,
  // getAllOrders,
  // acceptedOrder,
  // preparedOrder,
  // readyOrder,
  // statusUpdateOrder
} = require('../controllers/restaurant')

router.get('/', getAllRestaurants)
router.get('/:id', getRestaurant)
router.delete('/:id', deleteRestaurant)

// router.post('/register', registerRestaurant)

// router.post('/login', ()=> {
//   console.log('Login restaurant')
// })

// router.put('/:id', ()=> {
//   console.log('Updating something in restaurant')
// })

// router.get('/:id/items', getAllItems)
// router.post('/:id/items', addItem)
// router.patch('/:id/items/:itemId', updateItem)
// router.delete('/:id/items/:itemId', deleteItem)

// router.get('/:id/orders', getAllOrders)
// router.put('/:id/orders/:orderId/accept', acceptedOrder)
// router.put('/:id/orders/:orderId/prepare', preparedOrder)
// router.put('/:id/orders/:orderId/ready', readyOrder)

// router.put('/:id/order/:orderId', statusUpdateOrder)

module.exports = router