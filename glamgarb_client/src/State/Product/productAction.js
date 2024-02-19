import { api } from "../../config/apiConfig";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
} from "./productActionType";

// export const findProducts = (reqData) => async (dispatch) => {
//   const {
//     colors,
//     sizes,
//     minPrice,
//     maxPrice,
//     minDiscount,
//     category,
//     stock,
//     sort,
//     pageNumber,
//     pageSize,
//   } = reqData;
//   try {
//     const { data } = await api.get(
//       `/api/products/color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
//     );

//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };

// normal
// export const findProducts = () => async (dispatch) => {
//   try {
//     const { data } = await api.get("/api/products/");

//     dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
//   }
// };


// with pagination
export const findProducts = (pageNumber = 1, pageSize = 10) => async (dispatch) => {
  try {
    const { data } = await api.get(`/api/products/?pageNumber=${pageNumber}&pageSize=${pageSize}`);

    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log("product id ", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await api.post(`/api/admin/products/`,product);
    console.log("created products", data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload:data })

  } catch (error) {
    dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST });
  try {
    console.log("delete product ", productId);
    const { data } = await api.delete(`/api/admin/products/${productId}/delete`);
    console.log("delete product - admin ", data);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload:data })

  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};