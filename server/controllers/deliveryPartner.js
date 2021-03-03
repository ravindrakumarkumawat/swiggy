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

    res.status(201).json(savedDeliveryPartner)

  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateDeliveryPartner = async (req, res) => {
  const { id } = req.params  
  const update = req.body

  try {
    const deliveryPartner = await DeliveryPartner.findOneAndUpdate({ _id: id}, update, {new: true})

    if(!deliveryPartner) {
      return res.status(404).json({ error: "Delivery Partner doesn't exist" })
    }

    res.status(200).json(deliveryPartner)
  } catch (err) {
    
  }
}

const deleteDeliveryPartner = async (req, res) => {
  const { id } = req.params

  try {
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