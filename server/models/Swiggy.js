const mongoose = require("mongoose")
const swiggySchema = new mongoose.Schema({
  customers: [],
  deliveryGuy: [],
  restaurants: [],  
})


module.exports = Swiggy = mongoose.model("swiggy", swiggySchema)