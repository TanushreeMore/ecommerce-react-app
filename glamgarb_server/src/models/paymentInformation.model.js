const mongoose = require('mongoose');

const paymentInformationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // Reference to the user model
        required: true,
    },
    razorpayCustomerId: {
        type: String,
        required: true,
    },
    cardType: {
        type: String,
        required: true,
    },
    lastFourDigits: {
        type: String,
        required: true,
    },
    expirationMonth: {
        type: Number,
        required: true,
    },
    expirationYear: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const PaymentInformation = mongoose.model("payment_information", paymentInformationSchema)
module.exports = PaymentInformation