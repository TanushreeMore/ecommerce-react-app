import { Grid } from '@mui/material'
import React from 'react'
import Achivement from './Achivement'
import MonthlyOverview from './MonthlyOverview'
import ProductsTable from './ProductsTable'
import OrdersTableView from '../view/OrdersTableView'
import ProductsTableView from '../view/ProductsTableView'

const AdminDashboard = () => {
  const gridStyle = {
    boxShadow: '0 8px 12px -4px rgba(0, 0, 0, 0.4), 0 6px 16px 0 rgba(0, 0, 0, 0.24), 0 2px 6px -2px rgba(0, 0, 0, 0.2)'
  };

  return (
    <div className='p-5'>
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <div className='h1 text-center text-uppercase p-5  ' style={gridStyle}>Welcome to Dashboard</div>
        </Grid>

        <Grid item xs={12} md={4}>
          <div style={gridStyle}>
            <Achivement />
          </div>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <div style={gridStyle}>
            <MonthlyOverview />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={gridStyle}>
            <OrdersTableView/>
          </div>
        </Grid>

<Grid item xs={12} md={6}>
  <div style={gridStyle}>
    <ProductsTableView/>
  </div>
</Grid>

      </Grid>
    </div>
  )
}

export default AdminDashboard