const path = require('path')
const express = require('express')
const cors = require('cors')
require('./models/db/connectDb')

const restaurantRouter = require('./routes/restaurant')
const customerRouter = require('./routes/customer')
const deliveryPartnerRouter = require('./routes/deliveryPartner')

const app = express()

const PORT = process.env.PORT || 3001
app.use(express.static(path.resolve(__dirname, '../client/build')))

app.use(express.json())
app.use(cors())

app.use("/api/restaurant", restaurantRouter)
app.use("/api/customer", customerRouter)
app.use("/api/deliverypartner", deliveryPartnerRouter)

app.get("/api", (req, res) => {
  res.json({message: 'This is swiggy backend'})
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server is listening on Port: ${PORT}`)
})