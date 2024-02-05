import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from "./paymentActionType";

const initialState = {
  cart: null,
  loading: false,
  error: null,
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.payload.cartItems],
        loading: false,
      };
    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_CART_REQUEST:
      return { ...state, loading: true, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, ...action.payload.cartItems],
        cart: action.payload,
        loading: false,
      };
    case GET_CART_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case REMOVE_CART_ITEM_REQUEST:
    case UPDATE_CART_ITEM_REQUEST:
      return { ...state, loading: true, error: null };

    case REMOVE_CART_ITEM_SUCCESS:
      return {
        ...state,
        deleteCartItem: action.payload,
        // cartItems: state.cartItems.filter((item) => item._id !== action.payload),
        // cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        loading: false,
      };
    case UPDATE_CART_ITEM_SUCCESS:
      return {
        ...state,
        updateCartItem: action.payload, 
        // state.cartItems.map((item) =>
        //   item._id === action.payload._id ? action.payload : item
        // ),
        loading: false,
      };

    case REMOVE_CART_ITEM_FAILURE:
    case UPDATE_CART_ITEM_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};