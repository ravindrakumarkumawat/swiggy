const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema.Types

const feedbackSchema = new mongoose.Schema({
  orderId: {
    type: ObjectId,
    required: true,
    ref: "Order",
  },
  restaurantId: {
    type: ObjectId,
    ref: "Restaurant",
  },
  deliveryGuyId: {
    type: ObjectId,
    ref: "DeliveryPartner",
  },
  customerId: {
    type: ObjectId,
    ref: "Customer",
  },
  comment: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);



// cutomer can give rating based on order
