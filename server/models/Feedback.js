const mongoose,
  { ObjectId } = require("mongoose");
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
    ref: "DeliveryGuy",
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

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;

// cutomer can give rating based on order
