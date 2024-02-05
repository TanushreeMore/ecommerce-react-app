const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
    }],
    size: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    price: {
        type: Number,
    },
    discountedPrice: {
        type: Number,
    },
    userId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      }],
    //   deliveryDate: {
    //     type: Date,

    //   }
})

const OrderItem = mongoose.model("orderItems", orderItemSchema)
module.exports = OrderItem