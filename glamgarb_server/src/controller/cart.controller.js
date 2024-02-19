const cartService = require("../services/cart.service")

const findUserCart = async(req, res) => {
    const user = req.user;
    try {
        const cart = await cartService.findUserCart(user._id);
        return res.status(200).send(cart);
    } catch (error) {
        return res.status(500).send({ message: "error in finding user's cart", error: error.message});
    }
}

const addItemToCart = async(req, res) => {
    const user = req.user;
    try {
        const cartItem = await cartService.addCartItem(user._id, req.body);
        return res.status(200).send(cartItem);
    } catch (error) {
        console.error("Error adding item to cart:", error);
        return res.status(500).send({ error: "Error adding item to cart" });
    }
}

module.exports = {
    findUserCart,
    addItemToCart
}