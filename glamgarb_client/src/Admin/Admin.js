import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
// import EmailIcon from '@mui/icons-material/Email';
// import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from "@mui/icons-material/Dashboard";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateProductForm from "./components/CreateProductForm";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import ProductsTable from "./components/ProductsTable";
import AdminDashboard from "./components/AdminDashboard";

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <EventNoteIcon /> },
  // { name: "Customers", path: "/admin/customers", icon: <SwitchAccountIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <BorderColorIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <PostAddIcon /> },
  // {name: "Dashboard", path: "/admin"},
];

const Admin = () => {
  const gridStyle = {
    boxShadow:
      "0 8px 12px -4px rgba(0, 0, 0, 0.4), 0 6px 16px 0 rgba(0, 0, 0, 0.24), 0 2px 6px -2px rgba(0, 0, 0, 0.2)",
  };

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisisble, setSideBarVisisble] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <>
        {/* {isLargeScreen && <Toolbar />} */}

        <List>
          {menu.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    //   <div className="d-flex" style={{height: "100vh"}}>
    //   <div className="container-fluid" style={{height: "100vh"}}>
    //     <div className="row h-100">
    //     {/* <div className="d-flex h-100"> */}
    //         <CssBaseline/>

    //         <div className="col-1 col-md-3" style={{ width: '15%',height: "100vh", borderRight: '3px solid #d4d4d4'}}>{/* d-flex flex-column  */}
    //             {drawer}
    //         </div>

    //         <div className="col-md-9" style={{ width: '65%', height: '100%'}}>{/* d-flex flex-column */}

    //             <Routes>
    //                 <Route path='/' element={<AdminDashboard />} />
    //                 <Route path='/product/create' element={<CreateProductForm />} />
    //                 <Route path='/products' element={<ProductsTable />} />
    //                 <Route path='/orders' element={<OrdersTable />} />
    //                 <Route path='/customers' element={<CustomersTable />} />
    //             </Routes>
    //         </div>

    //     </div>
    //   </div>

    //   ////////////////////////////

    <div className="">
      <div>
        <CssBaseline />
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={2}
            style={{
              width: "15%",
              height: "100vh",
              borderRight: "3px solid #d4d4d4",
              // boxShadow:
              //   "0 8px 12px -4px rgba(0, 0, 0, 0.4), 0 6px 16px 0 rgba(0, 0, 0, 0.24), 0 2px 6px -2px rgba(0, 0, 0, 0.2)",
            }}
          >
            {drawer}
          </Grid>

          <Grid item xs={12} md={10}>
            <Routes>
              <Route path="/*" element={<AdminDashboard />} />
              <Route path="/product/create" element={<CreateProductForm />} />
              <Route path="/products" element={<ProductsTable />} />
              <Route path="/orders" element={<OrdersTable />} />
              <Route path="/customers" element={<CustomersTable />} />
            </Routes>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Admin;
