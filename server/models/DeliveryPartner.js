const mongoose = require("mongoose")
const { ROLE } = require("../utils/Role")
const { generateHashPassword, comparePassword } = require('../utils/generateHashPassword')
const { createJWTToken } = require('../libs/auth')

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

const register = async (req) => {
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
    const passwordHash = await generateHashPassword(password)

    const deliveryPartner = await DeliveryPartner.create({
      name,
      serviceArea,
      city,
      country,
      vehicle,
      email,
      phone,
      password: passwordHash
    })

    const payload = { id: deliveryPartner._id }
    const accessToken = createJWTToken(payload)

    return { deliveryPartner, accessToken }
  } catch (err) {
    return { error: err.message }
  }
}

const login = async (req) => {
  const { email, password } = req.body

  try {
    if (!email || !password) {
      return { 
        message: !email && password ? 'Enter registered email' : email && !password ? 'Enter password' : 'Enter email and password'
      }
    }

    const deliveryPartner = await DeliveryPartner.findOne({ email })
    
    if(!deliveryPartner) {
      return { message: 'Email is not registered' }
    }
    
    const isMatch = await comparePassword(password, deliveryPartner.password)
    
    if (!isMatch) {
      return { message: 'Incorrect Password' }
    }

    const payload = { id: deliveryPartner._id }
    const accessToken = createJWTToken(payload)

    return { deliveryPartner, accessToken}
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
  register,
  login,
  updateDeliveryPartnerDocument,
  deleteDeliveryPartnerDocument
}
