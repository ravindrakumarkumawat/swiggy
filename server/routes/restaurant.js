const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middlewares/authenticateToken')

const { getAllRestaurants, getRestaurant, deleteRestaurant} = require('../controllers/restaurant')

router.get('/', authenticateToken, getAllRestaurants)

router.get('/:id', authenticateToken, getRestaurant)

router.post('/register', ()=>{
  console.log('Registering restaurant')
})

router.post('/login', ()=> {
  console.log('Login restaurant')
})

router.put('/:id',authenticateToken,  ()=> {
  console.log('Updating something in restaurant')
})

router.delete('/:id', authenticateToken, deleteRestaurant)

module.exports = router