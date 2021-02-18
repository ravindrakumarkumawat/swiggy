const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const cartSchema = new mongoose.Schema({
  customerId: {
    type: ObjectId,
    required: true,
  },
  isCustomerAddress: {
    type: Boolean,
    required: true,
  },
  orders: [
    {
      orderId: {
        type: ObjectId,
        required: true,
      },
    },
  ],
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
