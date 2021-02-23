const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middlewares/authenticateToken')

const { getAllRestaurants, getRestaurant, deleteRestaurant, registerRestaurant} = require('../controllers/restaurant')

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

module.exports = router