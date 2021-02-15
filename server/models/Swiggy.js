const Customer = require("./Customer");

const mongoose, { ObjectId } = require("mongoose");

const swiggySchema = new mongoose.Schema({
  customer: {
    type: ObjectId,
    ref: 'Customer'
  },
  deliveryGuy: {
    type: ObjectId,
    ref: 'DeliveryGuy'
  },
  restaurant: {
    type: ObjectId,
    ref: 'Restaurant'
  },
});

module.exports = Swiggy = mongoose.model("swiggy", swiggySchema);
