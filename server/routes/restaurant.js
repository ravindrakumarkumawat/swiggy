const express = require('express')
const router = express.Router()

const { getAllRestaurants, getRestaurant, deleteRestaurant} = require('../controllers/restaurant')

router.get('/', getAllRestaurants)

router.get('/:id', getRestaurant)

router.post('/register', ()=>{
  console.log('Registering restaurant')
})

router.post('/login', ()=> {
  console.log('Login restaurant')
})

router.put('/:id', ()=> {
  console.log('Updating something in restaurant')
})

router.delete('/:id', deleteRestaurant)

module.exports = router