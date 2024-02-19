const CartItem = require("../models/cartItem.model");
const userService = require("../services/user.service");

async function updateCartItem(userId, cartItemId, cartItemData)

 {
  //console.log(userId, cartItemId, cartItemData)
  try {
    const item = await findCartItemById(cartItemId);

    if(!item){
      throw new Error("cart item not found", cartItemId);
    }
    const user = await userService.findUserById(item.userId);

    if (!user) {
      throw new Error("user not found : ", userId);
    }
    //console.log("item ", item.product);

    if (user._id.toString() === userId.toString()) {

      item.quantity = cartItemData.quantity;
      item.price = item.quantity * item.product.price;
      item.discountedPrice = item.quantity * item.product.discountedPrice;

      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("You can't update this cart item");
    }
  } catch (error) {
    // console.error("Error in updateCartItem:", error);
    throw new Error(error.message);
  }
}


async function removeCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  const user = await userService.findUserById(userId);

  //console.log(user._id.toString(), cartItem.userId.toString());
  
  if (user._id.toString() === cartItem.userId.toString()) {
    return await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("You can't remove another user's item");
}

async function findCartItemById(cartItemId) {
  console.log("getCartItemById",cartItemId);
  const cartItem = await CartItem.findById(cartItemId).populate("product");
  console.log("cart-findbyid", cartItem);

  if (cartItem) {
    return cartItem;
  } else {
    throw new Error("Cartitem not found with id ", cartItemId);
  }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById };
