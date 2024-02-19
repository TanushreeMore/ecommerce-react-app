import {
    Avatar,
    Card,
    CardHeader,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { findProducts } from "../../State/Product/productAction";

const ProductsTableView = () => {
    const dispatch = useDispatch();
    const products = useSelector((store) => store);
    console.log("products ------> ", products);
    console.log("products data ------> ", products.product.products.content);
  
    useEffect(() => {
      const data = {
        category: [],
        colors: [],
        sizes: [],
        minPrice: 0,
        maxPrice: 100000,
        minDiscount: 0,
        sort: "price_low",
        pageNumber: 1,
        pageSize: 10,
        stock: "",
      };
      dispatch(findProducts(data));
    }, []);
  
    return (
      <div className="p-0">
        <Card
          className="mt-2 text-center "
          // sx={{ bgcolor: "#242B2E", color: "white" }}
        >
          <CardHeader title="Recent Products" />
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
                    Price
                  </TableCell>
                  <TableCell align="left">
                    Quantity
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.product?.products?.content?.slice(0,4).map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">
                      <Avatar src={row.imageUrl} />
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    {/* <TableCell align="left">{row._id}</TableCell> */}
                    <TableCell align="left">
                      {row.price}
                    </TableCell>
                    <TableCell align="left">
                      {row.quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    );
  };
  
  export default ProductsTableView