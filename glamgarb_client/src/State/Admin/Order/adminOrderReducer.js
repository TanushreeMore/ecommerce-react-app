import { CANCELED_ORDER_FAILURE, CANCELED_ORDER_REQUEST, CANCELED_ORDER_SUCCESS, CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, CONFIRMED_ORDER_SUCCESS, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, PLACED_ORDER_FAILURE, PLACED_ORDER_REQUEST, PLACED_ORDER_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./adminOrderActionType";


const initialState = {
  orders: [],
  loading: false,
  error: "",
};
export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_REQUEST:
      return { 
        ...state,
        loading: true, 
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: null
      };
    case GET_ORDERS_FAILURE:
      return {  
        orders:[],
        loading: false, 
        error: action.payload 
      };

    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELED_ORDER_REQUEST:
      return { 
        ...state, 
        isLoading: true, 
      };

    case CONFIRMED_ORDER_SUCCESS:
      return {
        ...state,
        confirmed: action.payload,
        isLoading: false,
      };
    case PLACED_ORDER_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        placed: action.payload 
      };
    case DELIVERED_ORDER_SUCCESS:
      return { 
        ...state, 
        isLoading: false, 
        delivered: action.payload 
      };
      case CANCELED_ORDER_SUCCESS:
        return { 
          ...state, 
          isLoading: false, 
          canceled: action.payload 
        };

        

    case CONFIRMED_ORDER_FAILURE:
      case PLACED_ORDER_FAILURE:
      case DELIVERED_ORDER_FAILURE:
      case CANCELED_ORDER_FAILURE:
        return { 
          ...state, 
          isLoading: false,
          error: action.payload 
        };
    
    case DELETE_ORDER_REQUEST:
      return { 
        ...state, 
        loading: true, 
       };
    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        deletedOrder: action.payload,
        loading: false,
      };
    case DELETE_ORDER_FAILURE:
      return { 
        ...state, 
        loading: false, 
        error: action.payload,
       };
    
       case SHIP_ORDER_REQUEST:
         return { 
           ...state, 
           loading: true, 
           error: null,
          };
       case SHIP_ORDER_SUCCESS:
         return {
           ...state,
           shipped: action.payload,
           isLoading: false,
         };
       case SHIP_ORDER_FAILURE:
         return { 
           ...state, 
           isLoading: false, 
           error: action.payload,
          };

    default:
      return state;
  }
};
