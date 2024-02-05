const razorpay = require("../config/razorpayClient");
const orderService = require("../services/orderService");

const createPaymentLink = async(orderId) => {
    try {
        const order = await orderService.fidnOrderById(orderId);

        const paymentLinkRequest = {
            amount : 100,
            // order.totalPrice*100,
            currency : "INR",
            customer : {
                name :  "Tanushree More",
                // `${order.user.firstName} ${order.user.lastName}`,
                //order.user.firstName + " " + order.user.lastName,
                contact : "00000 00000",
                // order.user.mobile,
                email : "test2@sample.com" 
                // order.user.email 
            },
            notify : {
                sms : true,
                email : true
            },
            reminder_enable : true,
            callback_url : `http://localhost:5454/payments/${orderId}`,
            callback_method : 'post'
        };

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url
        }

        return resData;

    } catch (error) {
        console.error('Error in createPaymentLink:', error);
        throw new Error(error.message);
    }
}

const updatePaymentInformation = async(reqData) => {

    const paymentId = reqData.payment_id;
    const orderId = reqData.order_id;
    try {
        const order = await orderService.fidnOrderById(orderId);

        const payment = await razorpay.payments.fetch(paymentId)
        
        if(payment.status== "captured"){
            order.paymentDetails.paymentId = paymentId;
            order.paymentDetails.status = "COMPLETED";
            order.orderStatus = "PLACED";

            await order.save()
        }

        const resData = {
            message : "Your order is placed",
            success : true
        }

        return resData;

    } catch (error) {
        console.error('Error in updatePaymentLink:', error);
        throw new Error(error.message);
    }
}

module.exports = {
    createPaymentLink,
    updatePaymentInformation
}