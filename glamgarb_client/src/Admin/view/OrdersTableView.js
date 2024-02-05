import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, } from "../../State/Admin/Order/adminOrderAction";
import {
  Avatar,
  AvatarGroup,
  Card,
  CardHeader,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrdersTableView = () => {

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

  return (
    <div className="p-0">
      <Card
        className="mt-2 text-center "
        // sx={{ bgcolor: "#242B2E", color: "white" }}
      >
        <CardHeader title="Recent Orders" />
        <TableContainer
          component={Paper}
        //   sx={{ bgcolor: "#242B2E", color: "white" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" 
                // sx={{ color: "white" }}
                >
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
            adminOrder?.adminOrder?.orders?.slice(0,5).map((row, index) => (
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

export default OrdersTableView;
