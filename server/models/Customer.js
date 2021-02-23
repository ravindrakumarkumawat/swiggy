const mongoose = require("mongoose")
const { ROLE } = require("./Role")
const { ObjectId } = mongoose.Schema.Types

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
    type: Number,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: ROLE.CUSTOMER
  },
  locations: [{  
      customerAddress: {
        type: ObjectId,
        ref: 'CustomerAddress'
      }
    }
  ],
  orders: [
    {
      orderId: {
        type: ObjectId,
      },
    },
  ],
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Customer", customerSchema)
