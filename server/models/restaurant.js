const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: [{
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    contact: {
      type: Number,
      required: true,
      unique: true
    }
  }],
  postalCode: {
    type: String,
    required: true
  },
  pocDesignation: { // point of contact (poc) manger or owner to swiggy
    type: String,
    required: true
  },
  outlet: [{
    landmark: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },    
    address: {
      type: String,
      required: true,
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    }
  }],
  cuisines: {
    type: String,
    required: true
  },
  menus: [{
    categoryName: {
      type: String,
      required: true
    },
    items: [{
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: false,
        default: ''
      },
      vegOrNonVeg: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      offers: {},
      availability: { // food available to deliver
        type: Boolean,
        required: true,
        default: true
      }
    }]
  }],
  isVeg: {
    type: Boolean,
    required: true,
    default: true
  },
  ratings: {},
  orders: {
    type: Array
  },
  receivedOrders: {}, // live order their should not be mark unavailable instead mark -> out of stock option availbale and provide alternate option (you can alternate option item)
  preparingOrders: {},
  pendingOrders: {},
  cancelOrders: {},
  readyOrders: {}, // food is cooked or prepared or markfood ready
  pickedUpOrders: {}, // food is picked by deliveryPartner
  trakingOrders: {}, // tracking the deliveryPartner to customer or riderstatus option ongoingOrder
  deliveredOrders: {}, // food order is delivered to customer
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Restaurant = mongoose.model("restaurant", restaurantSchema)