const mongoose = require("mongoose")
const { ROLE } = require("../utils/Role")
const { ObjectId } = mongoose.Schema.Types
const addressSchema = require("./AddressSchema")
const bcrypt = require('bcrypt')

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
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: ROLE.CUSTOMER,
  },
  addresses: [addressSchema],
  orders: [
    {
      type: ObjectId,
      ref: "Order",
    },
  ],
  registeredOn: {
    type: Date,
    default: Date.now,
  },
})

const Customer = mongoose.model("Customer", customerSchema)

const getAllCustomersDocument = async () => {
  try {
    return Customer.find()
  } catch (err) {
    return { error: err.message }
  }
}

const getCustomer = async (id) => {
  try {
    const customer = await Customer.find({ _id: id })

    if(!customer) {
      return { message: "Customer doesn't exist" }
    }
    return customer
  } catch(err) {
    return { error: err.message }
  }
}

const addCustomerDocument = async (req) => {
  const { 
    name, 
    email,
    password,
    phone
  } = req.body

  try {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const savedCustomer = await Customer.create({
      name, 
      email,
      password: passwordHash,
      phone
    })

    return savedCustomer
  } catch (err) {
    return { error: err.message }
  }
}

const updateCustomerDocument = async (req) => {
  const { id } = req.params
  const update = req.body

  try {
    if(update.address) {
      return { message: 'I have to work on' }
    }

    const customer = await Customer.findOneAndUpdate({ _id: id }, update, {new: true})

    if(!customer) {
      return { message: "Customer doesn't exist" }
    }

    return customer
  } catch (err) {
    return { error: err.message }
  }
}

const deleteCustomerDocument = async (id) => {
  try {
    const customer = await Customer.findOneAndDelete({ _id: id })

    if (!customer) {
      return { message: "Customer not found" }
    }
    
  return { deleted: true }
  } catch(err) {
    return { error: err.message }
  }
}

module.exports = {
  getAllCustomersDocument,
  getCustomer,
  addCustomerDocument,
  updateCustomerDocument,
  deleteCustomerDocument
}
