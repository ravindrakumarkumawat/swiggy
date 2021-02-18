const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    // totalPrice = quantity * price
    type: Number,
    required: true,
  },
  request: {
    // request regarding food by customer
    type: String,
    required: false,
  },
  restaurantId: {
    type: ObjectId,
  },
  customerId: {
    type: ObjectId,
  },
  deliveryAddress: {  
    address: {
      type: String,
      required: true
    },
    landmark: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    country:{
      type: String,
      required: true
    }, 
    postalCode: {
      type: String,
      required: true
    },
    coordinates: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      }
    }
  },
  status: {
    isPlaced: {
      type: Boolean,
      required: true,
      default: false,
    },
    isAccepted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPrepared: {
      type: Boolean,
      required: true,
      default: false,
    },
    isReady: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPickedUp: {
      type: Boolean,
      required: true,
      default: false,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    isCanceled: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  orderedOn: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
