const express = require('express')
const router = express.Router()

router.get('/', ()=>{
  console.log('All the restaurants')
})

router.get('/:id', ()=>{
  console.log('Single restaurant')
})

router.post('/registerRestaurant', ()=>{
  console.log('Registering restaurant')
})

router.put('/:id', ()=> {
  console.log('Updating something in restaurant')
})

router.delete('/:id', ()=> {
  console.log('Deleting in restaurant')
})

module.exports = router