const path = require('path')
const mongoose = require("mongoose")
require("dotenv").config({ path: path.resolve(__dirname, '../.env') })

const URI = process.env.MONGODB_CONNECTION_STRING

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    })
    console.log("MongoDB is ready")
  } catch (err) {
    console.error(err)
  }
}

module.exports = { connectDB }
