const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const outletSchema = new mongoose.Schema({   
  address: {
    type: String,
    required: true,
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
  coordinate: {
    latitude: {
      type: String,
      required: true
    },
    longitude: {
      type: String,
      required: true
    }
  }
})

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
      type: String,
      required: true,
      unique: true
    },
    pocDesignation: { // point of contact (poc) manger or owner to swiggy
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  role: {
    type: String,
    default: "restaurant"
  },
  outlet: [outletSchema],
  cuisines: {
    type: String,
    required: true
  },
  menus: [{
      type: ObjectId,
      ref: 'Item'
  }],
  isRestaurantVeg: {
    type: Boolean,
    required: true,
    default: true
  },
  rating: {
    type: Number,
    required: false
  },
  orders: [{
    type: ObjectId,
    ref: 'Order'
}],
  registeredOn: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model("Restaurant", restaurantSchema)