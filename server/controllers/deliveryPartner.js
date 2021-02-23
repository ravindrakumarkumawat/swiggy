const DeliveryPartner = require('../models/DeliveryPartner')
const bcrypt = require('bcrypt')

const getAllDeliveryPartners = async (req, res) => {
  try {
    const deliveryPartner = await DeliveryPartner.find()

    res.status(200).json(deliveryPartner)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const addDeliveryPartner = async (req, res) => {
  try {
    const { 
      name,
      serviceArea,
      city,
      country,
      vehicle,
      email,
      password
    } = req.body

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const savedDeliveryPartner = await DeliveryPartner.create({
      name,
      serviceArea,
      city,
      country,
      vehicle,
      email,
      password: passwordHash
    })

    res.status(201).json(savedDeliveryPartner)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateDeliveryPartner = async (req, res) => {
  try {
    
  } catch (err) {
    
  }
}

const deleteDeliveryPartner = async (req, res) => {
  try {
    const { id } = req.params

    const del = await DeliveryPartner.findOneAndDelete({ _id: id })

    if(!del) {
      return res.status(404).json({ error: "Delivery Partner is not found" })
    }

    res.status(200).json({ deleted: true })
  } catch (err) {
    
  }
}


module.exports = {
  getAllDeliveryPartners,
  addDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
}