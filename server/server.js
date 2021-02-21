const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())

app.get("/swiggy/api", (req, res) => {
  res.json({message: 'This is swiggy backend'})
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})