import { api } from "../../config/apiConfig";
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  // GET_ORDER_HISTORY_FAILURE,
  // GET_ORDER_HISTORY_REQUEST,
  // GET_ORDER_HISTORY_SUCCESS,
} from "./orderActionType";

export const createOrder = (reqData) => async (dispatch) => {
  console.log("Creating order...", reqData);
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post(`/api/orders/`, reqData.address);
    console.log("API response:", data);

    if (data._id) {
      console.log("Order created successfully. Navigating to step 3...");
      // reqData.navigate({ search: `step=3&order_id=${data._id}` });
    }
    else {
      console.log("Invalid response format. Missing order ID.");
    }
    console.log("created order - ", data);
    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error during order creation:", error);
    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error.message,
    });
  }
};



export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    console.log("Fetching order by ID:", orderId);
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("Order by ID request successful. Order data:", data);
    dispatch({
      type: GET_ORDER_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching order by ID:", error);
    dispatch({
      type: GET_ORDER_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

// export const getOrderHistory = (reqData) => async (dispatch, getState) => {
//   dispatch({ type: GET_ORDER_HISTORY_REQUEST });
//   try {
//     const config = {
//       Headers: {
//         Authorization: `Bearer ${reqData.jwt}`
//       }
//     }
//     const { data } = await api.get(`/api/orders/user`);
//     console.log("order history ------ ", data);
//     dispatch({
//       type: GET_ORDER_HISTORY_SUCCESS,
//       payload: data
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_ORDER_HISTORY_FAILURE,
//       payload: error.message
//     });
//   }
// };
