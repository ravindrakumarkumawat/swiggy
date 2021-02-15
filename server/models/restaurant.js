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
  pocDesignation: {
    type: String,
    required: true
  },
  outlet: [{
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
    collections: [{
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
      image: {
        type: String
      }
    }]
  }],
  typeOfRestaurant: {
    type: String,
    required: true
  },
  ratings: {
    type: Number
  },
  license: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Restaurant = mongoose.model("restaurant", restaurantSchema)