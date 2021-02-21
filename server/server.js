const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(cors())

app.get("/swiggy/api", (req, res) => {
  res.json({message: 'This is swiggy backend'})
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})