const mongoose,
  { ObjectId } = require("mongoose");
const paymentSchema = new mongoose.Schema({});

const Payment = mongoose.model("payment", cartSchema);

module.exports = Payment;
