import React from 'react'

const steps= [
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]

const OrderTracker = ({activeStep}) => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
        {steps.map((label, index) => (
          <li key={index} className={`nav-item ${index === activeStep ? 'active' : ''}`}>
            <a className="nav-link " href="#">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default OrderTracker