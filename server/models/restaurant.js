const mongoose = require("mongoose")
const restaurantSchema = new mongoose.Schema({
  restaurantName: {
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
  pocDesignation: {
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
      offers: {}
    }]
  }],
  typeOfRestaurant: {
    type: String,
    required: true
  },
  ratings: {
    type: Number
  },
  orders: {
    type: Array
  },
  gst: {},
  fssai: {
    licenceNumber: {
      type: String,
      required: true
    },
    registeredName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    expiryDate: {
      type: String,
      required: true
    },
    certificateFile: {}
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Restaurant = mongoose.model("restaurant", restaurantSchema)