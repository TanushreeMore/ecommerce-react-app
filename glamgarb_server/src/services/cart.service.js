const Product = require("../models/product.model");
const CartItem = require("../models/cartItem.model");
const Cart = require("../models/cart.model");

async function createCart(user) {
    try {
        const cart = new Cart({ user });
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        throw new Error(error.message);
    }
}

async function findUserCart(userId) {
    try {
        // let cart = await Cart.findOne({ user: userId }).populate('user').populate('cartItems').populate({
        //     path: 'cartItems',
        //     populate: { path: 'product' }
        // });

        let cart = await Cart.findOne({ user: userId });
        console.log("findUserCart:", cart);
        let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
        console.log("findUserCartItems:", cartItems);

        cart.cartItems = cartItems;

        let totalPrice = 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            console.log("CartItem:", cartItem);

            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }

        console.log("Total Price:", totalPrice);
        console.log("Total Discounted Price:", totalDiscountedPrice);
        console.log("Total Item:", totalItem);

        cart.totalPrice = totalPrice;
        cart.totalItem = totalItem;
        cart.discount = totalPrice - totalDiscountedPrice;

        console.log("Final Cart:", cart);

        return cart;
    } catch (error) {
        throw new Error("Error in findUserCart",error.message);
    }
}

async function addCartItem(userId, req) {
    try {
        const cart = await Cart.findOne({ user: userId });
        // const cart = await Cart.findOne({ user: userId }).populate('cartItems');

        if (!cart) {
            console.log("Creating a new cart...");
            cart = await createCart(userId);
        }

        // console.log("Cart ID:", cart._id);       
        // console.log("User ID:", userId);       
        // console.log("Product ID:", req.productId); 

        // Check if productId is provided in the request body
        if (!req.productId) {
            throw new Error("Product ID is required");
        }

        const product = await Product.findById(req.productId);//.cartItemData
        // console.log("product", product);

        if (!product) {
            throw new Error("Product not found");
        }

        // const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId });
        const isPresent = await CartItem.findOne({ cart: cart._id, product: product._id, userId }).populate('product');

        if (!isPresent) {
            const cartItem = new CartItem({
                product: product._id,
                cart: cart._id,
                quantity: 1,
                userId,
                price: product.price,
                size: req.size,
                discountedPrice: product.discountedPrice,
            });
            
            const createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem);
            await cart.save();
            // return createdCartItem; // return "Item added to Cart"
            return { message: "Item added to Cart", cart: createdCartItem };

        } 
        else {
            return { message: "Item is already present in the cart", cart: cart };
        // return isPresent
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createCart, findUserCart, addCartItem };
