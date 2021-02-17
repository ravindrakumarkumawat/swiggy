const mongoose, { ObjectId } = require("mongoose")
const ratingSchema = new mogoose.Schema({
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
  }
})
module.exports = Rating = mongoose.model("order", ratingSchema)

// cutomer can give rating based on order