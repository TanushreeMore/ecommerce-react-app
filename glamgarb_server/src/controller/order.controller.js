const orderService = require("../services/orderService")

const createOrder = async(req, res) => {
    const user = await req.user;
    try {
        const createdOrder = await orderService.createOrder(user, req.body);
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message});
    }
}

const findOrderById = async(req, res) => {
    const user = await req.user;
    try {
        const createdOrder = await orderService.fidnOrderById(req.params.id);
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message});
    }
}

const orderHistory = async(req, res) => {
    const user = await req.user;
    try {
        const createdOrder = await orderService.usersOrderHistory(user._id);
        return res.status(200).send(createdOrder);
    } catch (error) {
        return res.status(500).send({ error: error.message});
    }
}

module.exports = {
    createOrder,
    findOrderById,
    orderHistory
}