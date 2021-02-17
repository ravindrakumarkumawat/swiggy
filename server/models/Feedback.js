const mongoose, { ObjectId } = require("mongoose")
const feedbackSchema = new mogoose.Schema({
  orderId: {
    type: ObjectId,
    required: true,
    ref: 'Order'
  },
  restaurantId: {
    type: ObjectId,    
    ref: 'Restaurant'
  },
  deliveryGuyId: {
    type: ObjectId,
    ref: 'DeliveryGuy'
  },
  customerId: {
    type: ObjectId,    
    ref: 'Customer'
  }, 
  comment: {
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: false
  }
})
module.exports = Feedback = mongoose.model("feedback", feedbackSchema)

// cutomer can give rating based on order