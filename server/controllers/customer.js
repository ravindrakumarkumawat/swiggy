const Customer = require('../models/Customer')
const bcrypt = require('bcrypt')

const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    
    res.status(200).json(customers)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const addCustomer = async (req, res) => {
  try {
    const { 
      name, 
      email,
      password,
      phone
    } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const savedCustomer = await Customer.create({
      name, 
      email,
      password: passwordHash,
      phone
    })


    res.status(201).json(savedCustomer)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateCustomer = async (req, res) => {
  try {
    
  } catch (err) {
    
  }
}

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params

    const del = await Customer.findOneAndDelete({ _id: id })

    if(!del) {
      return res.status(404).json({ error: "Customer is not found" })
    }

    res.status(200).json({ deleted: true })
    
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer
}