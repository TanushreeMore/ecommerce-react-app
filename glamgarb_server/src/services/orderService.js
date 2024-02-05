const Address = require("../models/address.model");
const Order = require("../models/order.model");
const OrderItem = require("../models/orderItems");
const cartService = require("../services/cart.service");

async function createOrder(user, shippAddress){
    try {
        console.log("Creating order for user:", user._id);
    console.log("Received user:", user);
    console.log("Received shipping address:", shippAddress);
    
    let address;

    if (shippAddress._id) {
        console.log("Existing shipping address ID:", shippAddress._id);
        let existAddress = await Address.findById(shippAddress._id);
        address = existAddress;
        console.log("Retrieved existing address:", address);
    }
    else{
        address = new Address(shippAddress);
        address.user = user;
        await address.save();
        console.log("Created and saved new address:", address);

        user.address.push(address);
        await user.save();
        console.log("Updated user with new address:", user);
    }

    const cart = await cartService.findUserCart(user._id);
    console.log("Retrieved user's cart:", cart);

    const orderItems = [];

    for(const item of cart.cartItems){
        const orderItem = new OrderItem({
            price : item.price,
            product : item.product,
            quantity : item.quantity,
            size : item.size,
            userId : item.userId,
            discountedPrice : item.discountedPrice,
        })

        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem)
    }

        console.log("Created order items:", orderItems);

    const createdOrder = new Order({
        user,
        orderItems,
        totalPrice : cart.totalPrice,
        totalDiscountedPrice : cart.totalDiscountedPrice,
        discount : cart.discount,
        totalItem : cart.totalItem,
        shippingAddress: address,
    })

    const savedOrder = await createdOrder.save();
    console.log("Created and saved order:", savedOrder);

    return savedOrder;
} catch (error) {
    console.error("Error during order creation:", error);
    throw error; // Rethrow the error for proper error handling in the calling code
}
}


async function placeOrder(orderId){
    const order = await fidnOrderById(orderId);

    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";

    return await order.save();
}

async function confirmedOrder(orderId){
    const order = await fidnOrderById(orderId);

    order.orderStatus = "CONFIRMED";

    return await order.save();
}

async function shipOrder(orderId){
    const order = await fidnOrderById(orderId);

    order.orderStatus = "SHIPPED";

    return await order.save();
}

async function deliverOrder(orderId){
    const order = await fidnOrderById(orderId);

    order.orderStatus = "DELIVERED";

    return await order.save();
}

async function cancelledOrder(orderId){
    const order = await fidnOrderById(orderId);

    order.orderStatus = "CANCELLED";

    return await order.save();
}

async function fidnOrderById(orderId){
    const order = await Order.findById(orderId)
    .populate("user")
    .populate({path: "orderItems", populate:{path: "product"}})
    .populate("shippingAddress")

    return order;
}

async function usersOrderHistory(userId){
    try {
        const orders = await Order.find({user: userId, orderStatus: "PLACED"})
        .populate({path: "orderItems", populate:{path: "product"}}).lean()
        return orders;   
    } catch (error) {
        throw new Error(error.message)
    }

}

async function getAllOrders(){
    return await Order.find()
    .populate({path: "orderItems", populate:{path: "product"}}).lean()
}

async function deleteOrder(orderId){
    const order = await fidnOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
}

module.exports = {
    createOrder,
    placeOrder,
    confirmedOrder,
    shipOrder,
    deliverOrder,
    cancelledOrder,
    fidnOrderById,
    usersOrderHistory,
    getAllOrders,
    deleteOrder,
};
