const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

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

module.exports = mongoose.model("Customer", customerSchema);
;
