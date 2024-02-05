import { api } from "../../../config/apiConfig";
import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./adminOrderActionType";

export const getOrders = () => async (dispatch) => {
  console.log("Getting all orders...");
  dispatch({ type: GET_ORDERS_REQUEST });

  // try {
  //   const { response } = await api.get(`/api/admin/orders/`);
  //   co nsole.log("get all orders -- ", response.data);

  //   dispatch({
  //     type: GET_ORDERS_SUCCESS,
  //     payload: response.data,
  //   });
  try {
    const { data } = await api.get(`/api/admin/orders/`);
    console.log("get all orders response:", data);

    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: data, 
    });
  } catch (error) {
    console.error("Error during getting all orders ", error);
    dispatch({
      type: GET_ORDERS_FAILURE,
      payload: error.message,
    });
  }
};


export const confirmOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CONFIRMED_ORDER_REQUEST });
  try {
    console.log("confirm_order ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/confirmed`);
    console.log("confirm_Order_req ", data);//response.data
    dispatch({
      type: CONFIRMED_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error confirm_orders ", error);
    dispatch({
      type: CONFIRMED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const shipOrder = (orderId) => async (dispatch) => {
  dispatch({ type: SHIP_ORDER_REQUEST });
  try {
    console.log("ship_order_req ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/ship`);
    console.log("ship_order ", data);
    dispatch({
      type: SHIP_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error confirm_orders ", error);
    dispatch({
      type: SHIP_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const deliveredOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELIVERED_ORDER_REQUEST });
  try {
    console.log("delivered order ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/deliver`);
    console.log("delivered_Order ", data);//response.data
    dispatch({
      type: DELIVERED_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error delivered_orders ", error);
    dispatch({
      type: DELIVERED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const cancelOrder = (orderId) => async (dispatch) => {
  dispatch({ type: CANCELED_ORDER_REQUEST });
  try {
    console.log("cancel order ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/cancel`);
    console.log("cancel_Order ", data);//response.data
    dispatch({
      type: CANCELED_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error cancel_orders ", error);
    dispatch({
      type: CANCELED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const deleteOrder = (orderId) => async (dispatch) => {
  dispatch({ type: DELETE_ORDER_REQUEST });
  try {
    console.log("delete order ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/delete`);
    console.log("delete_Order ", data);//response.data
    dispatch({
      type: DELETE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error delete_orders ", error);
    dispatch({
      type: DELETE_ORDER_FAILURE,
      payload: error.message,
    });
  }
};

export const placedOrder = (orderId) => async (dispatch) => {
  dispatch({ type: PLACED_ORDER_REQUEST });
  try {
    console.log("placed order ", orderId);
    const { data } = await api.put(`/api/admin/orders/${orderId}/placed`);
    console.log("placed_Order ", data);//response.data
    dispatch({
      type: PLACED_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error placed_orders ", error);
    dispatch({
      type: PLACED_ORDER_FAILURE,
      payload: error.message,
    });
  }
};