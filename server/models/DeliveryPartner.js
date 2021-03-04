const mongoose = require("mongoose");
const { ROLE } = require("../utils/Role");
const bcrypt = require('bcrypt')

const deliveryPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  serviceArea: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: ROLE.DELIVERY,
  },
  vehicle: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    ref: "Order",
  },
  earnings: {
    type: Array,
  },
  incentives: {
    type: Array,
  },
  adjustments: {
    type: Array,
  }, // floting cash me se adjustment
  floatingCash: {
    type: Array,
  }, // cash deposit to swiggy of orders
  isOnDuty: {
    type: Boolean,
    required: true,
    default: false,
  },
  loginHistory: [
    {
      // login inside the app for orders or onduty
      from: {
        type: Date,
      },
      to: {
        type: Date,
      },
    },
  ], // firstmile and last should also be included somewhere
  rating: {
    type: Number,
    required: false,
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

const DeliveryPartner = mongoose.model("DeliveryPartner", deliveryPartnerSchema)

const getAllDeliveryPartnersDocument = async () => {
  try {
    return DeliveryPartner.find()
  } catch (err) {
    return { error: err.message }
  }
}

const addDeliveryPartnerDocument = async (req) => {
  const { 
    name,
    serviceArea,
    city,
    country,
    vehicle,
    email,
    password,
    phone
  } = req.body

  try {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const savedDeliveryPartner = await DeliveryPartner.create({
      name,
      serviceArea,
      city,
      country,
      vehicle,
      email,
      phone,
      password: passwordHash
    })

    return savedDeliveryPartner
  } catch (err) {
    return { error: err.message }
  }
}

const updateDeliveryPartnerDocument = async (req) => {
  const { id } = req.params  
  const update = req.body

  try {
    const deliveryPartner = await DeliveryPartner.findOneAndUpdate({ _id: id}, update, {new: true})

    if(!deliveryPartner) {
      return { message: "Delivery Partner doesn't exist" }
    }

    return deliveryPartner
  } catch (err) {
    return { error: err.message }
  }
}

const deleteDeliveryPartnerDocument = async (id) => {
  try {
    const deliveryPartner = await DeliveryPartner.findOneAndDelete({ _id: id })

    if(!deliveryPartner) {
      return { message: "Delivery Partner doesn't exist" }
    }

    return { deleted: true }
  } catch (err) {
    return { error: err.message }
  }
}

module.exports = {
  getAllDeliveryPartnersDocument,
  addDeliveryPartnerDocument,
  updateDeliveryPartnerDocument,
  deleteDeliveryPartnerDocument
}
