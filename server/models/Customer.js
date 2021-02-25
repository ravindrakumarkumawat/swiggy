const mongoose = require("mongoose");
const { ROLE } = require("../utils/Role");
const { ObjectId } = mongoose.Schema.Types;
const addressSchema = require("./AddressSchema");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: ROLE.CUSTOMER,
  },
  addresses: [addressSchema],
  orders: [
    {
      type: ObjectId,
      ref: "Order",
    },
  ],
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
