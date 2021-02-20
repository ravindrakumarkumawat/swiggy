const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

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
    }
  },
  outlet: [{
    outletId: {
      type: ObjectId,
      required: true,
      ref: 'Outlet'
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
      itemId: {
        type: ObjectId,
        ref: 'Item'
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
  }
})

module.exports = mongoose.model("Restaurant", restaurantSchema)