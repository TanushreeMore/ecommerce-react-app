// import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { authReducer } from "./Auth/Reducer";

// const rootReducers = combineReducers({
//     auth:authReducer
// })
// export const store = legacy_createStore(rootReducers, applyMiddleware(thunk))

import { createStore, applyMiddleware, combineReducers } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/authReducer";
import { customerProductReducer } from "./Product/productReducer";
import { cartReducer } from "./Cart/cartReducer";
import { orderReducer } from "./Order/orderReducer";
import { adminOrderReducer } from "./Admin/Order/adminOrderReducer";


// const thunk = require("redux-thunk").default;

const rootReducer = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
  adminOrder: adminOrderReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
