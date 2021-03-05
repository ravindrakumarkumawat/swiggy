const { 
  getAllDeliveryPartnersDocument,
  register,
  updateDeliveryPartnerDocument,
  deleteDeliveryPartnerDocument 
} = require('../models/DeliveryPartner')

const getAllDeliveryPartners = async (req, res) => {
  const deliveryPartner = await getAllDeliveryPartnersDocument()
  
  if(deliveryPartner.error) {
    return res.status(500).json(deliveryPartner)
  }

  res.status(200).json(deliveryPartner)  
}

const registerDeliveryPartner = async (req, res) => {
  const savedDeliveryPartner = await register(req)

  if(savedDeliveryPartner.error) {
    return res.status(500).json(savedDeliveryPartner)
  }

  res.status(201).json(savedDeliveryPartner)
}

const updateDeliveryPartner = async (req, res) => {
  const deliveryPartner = await updateDeliveryPartnerDocument(req)

  if(deliveryPartner.error) {
    return res.status(500).json(deliveryPartner)
  }

  if(deliveryPartner.message) {
    return res.status(404).json(deliveryPartner)
  }
  res.status(200).json(deliveryPartner)  
}

const deleteDeliveryPartner = async (req, res) => {
  const { id } = req.params

  const deliveryPartner = await deleteDeliveryPartnerDocument(id)

  if(deliveryPartner.error) {
    return res.status(500).json(deliveryPartner)
  }
  
  if(deliveryPartner.message) {
    return res.status(404).json(deliveryPartner)
  }

  res.status(200).json(deliveryPartner)
}


module.exports = {
  getAllDeliveryPartners,
  registerDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
}