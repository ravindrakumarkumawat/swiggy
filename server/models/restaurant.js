const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
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
      isVeg: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      offers: {},
      isStock: { // food available to deliver
        type: Boolean,
        required: true,
        default: true
      }
    }]
  }],
  isRestaurantVeg: {
    type: Boolean,
    required: true,
    default: true
  },
  rating: {},
  orders: {
    type: Array
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

const Restaurant = mongoose.model("restaurant", restaurantSchema)

module.exports = Restaurant 