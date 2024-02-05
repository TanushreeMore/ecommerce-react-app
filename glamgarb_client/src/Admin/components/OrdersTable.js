import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from "../../State/Admin/Order/adminOrderAction";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  CircularProgress,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTable = () => {
  const [anchorEl, setAnchorEl] = React.useState([]);
  // const open = Boolean(anchorEl);
  const handleClick = (event, index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = event.currentTarget
    setAnchorEl(newAnchorElArray);
  };
  const handleClose = (index) => {
    const newAnchorElArray = [...anchorEl];
    newAnchorElArray[index] = null
    setAnchorEl(newAnchorElArray);
  };

  const dispatch = useDispatch();
  const adminOrder = useSelector((store) => store); // Update this line
  console.log("admin orders ", adminOrder);
  console.log("get all orders ", adminOrder.adminOrder.orders);

  // // to check cartItem
  // adminOrder.adminOrder.orders.forEach(order => {
  //   console.log("Order ID: ", order._id);
  //   console.log("Cart Items: ", order.cartItems);
  // });

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch, adminOrder.adminOrder.confirmed, adminOrder.adminOrder.placed, adminOrder.adminOrder.delivered, adminOrder.adminOrder.shipped, adminOrder.adminOrder.deletedOrder]);

  const handleShipedOrder = (orderId, index) =>{
    dispatch(shipOrder(orderId))
    console.log("handle shipped ", orderId);
    handleClose(index)
  }

  const handleConfirmedOrder = (orderId, index) =>{
    dispatch(confirmOrder(orderId))
    handleClose(index)
  }

  const handleDeliveredOrder = (orderId, index) =>{
    dispatch(deliveredOrder(orderId))
    handleClose(index)
  }

  // const handleDeleteOrder = (orderId) =>{
  //   dispatch(deleteOrder(orderId))
  //   dispatch(getOrders()); 
  // }
  const handleDeleteOrder = async (orderId) => {
    try {
      // Dispatch the deleteOrder action
      await dispatch(deleteOrder(orderId));
  
      // After successful deletion, dispatch getOrders to fetch updated orders
      await dispatch(getOrders());
    } catch (error) {
      // Handle any errors that may occur during the delete or fetch process
      console.error("Error deleting order:", error);
    }
  };

  return (
    <div className="p-4">
      <Card
        className="mt-2 rounded card text-center "
        // sx={{ bgcolor: "#242B2E", color: "white" }}
      >
        <CardHeader title="All Orders" />
        <TableContainer
          component={Paper}
          // sx={{ bgcolor: "#242B2E", color: "white" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  Image
                </TableCell>
                <TableCell align="left">
                  Title
                </TableCell>
                <TableCell align="left">
                  Id
                </TableCell>
                <TableCell align="left">
                  Price
                </TableCell>
                <TableCell align="left">
                  Status
                </TableCell>
                <TableCell align="left">
                  Update
                </TableCell>
                <TableCell align="left">
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {adminOrder.loading ? (
            <TableRow>
              <TableCell colSpan={7} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          ) : (
            adminOrder?.adminOrder?.orders?.map((row, index) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <AvatarGroup max={2} sx={{ justifyContent: "start" }}>
                      {row?.orderItems?.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>

                  <TableCell>
                    {row?.orderItems?.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {row._id}
                  </TableCell>

                  <TableCell align="left">
                    {row.totalPrice}
                  </TableCell>

                  <TableCell align="left">
                    {/* <span 
                      className={`bg-${row.orderStatus === "CONFIRMED" ? "success" : row.orderStatus === "PLACED" ? "secondary" : row.orderStatus === "SHIPPED" ? "primary" : row.orderStatus === "PENDING" ? "warning"  "danger"}`}> */}
                    <span
                      className="px-4 py-2"
                      style={{
                        color: "white",
                        borderRadius: "10px 20px 30px 40px",
                        backgroundColor:
                          row.orderStatus === "CONFIRMED"
                            ? "#369236"
                            : row.orderStatus === "PLACED"
                            ? "#02B290"
                            : row.orderStatus === "SHIPPED"
                            ? "#4141ff"
                            : row.orderStatus === "PENDING"
                            ? "gray"
                            : "#025720",
                      }}
                    >
                      {row.orderStatus}
                    </span>
                  </TableCell>

                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-haspopup="true"
                      // aria-controls={open ? "basic-menu" : undefined}
                      // aria-expanded={open ? "true" : undefined}
                      onClick={(event)=>handleClick(event, index)}
                      aria-controls={`basic-menu-${row._id}`}
                      aria-expanded={Boolean(anchorEl[index])}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`basic-menu-${row._id}`}
                      anchorEl={anchorEl[index]}
                      open={Boolean(anchorEl[index])}
                      onClose={()=>handleClose(index)}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <MenuItem onClick={()=>handleConfirmedOrder(row._id, index)}>Confirmed Order</MenuItem>
                      <MenuItem onClick={()=>handleShipedOrder(row._id, index)}>Shipped Order</MenuItem>
                      <MenuItem onClick={()=>handleDeliveredOrder(row._id, index)}>Delivered Order</MenuItem>
                    </Menu>
                  </TableCell>

                  <TableCell align="left">
                    <Button
                      onClick={()=>handleDeleteOrder(row._id)}
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
            ))
          )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrdersTable;
