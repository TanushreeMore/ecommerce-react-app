import React from 'react'
import './profileIcon.css'
import { Link } from 'react-router-dom'

const ProfileIcon = () => {
    // Replace this with your logic to get the user's initial letter
    const userInitial = 'T';

  return (
    <div> {/* className="position-relative" */}
    <div className="d-flex align-items-center ms-3">
      <div className="dropdown">
      <div
        className="rounded-circle text-center text-white fw-bolder profile-icon"
        style={{
            width: 45,
            height: 45,
            backgroundColor: '#D63484',
            fontSize: 30,
            lineHeight: '45px',
            cursor: 'pointer',
          }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        >
          {userInitial}
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <Link to="/login" className="dropdown-item">
            Profile
          </Link>
          <Link to="/account/order" className="dropdown-item">
            My Orders
          </Link>
          <Link to="/logout" className="dropdown-item">
            Logout
          </Link>
        </div>
        </div>

      </div>
    {/* </div> */}

{/* <div>
            <span>
              <button type="button" className="btn btn-dark mr-sm-2 d-none d-sm-block">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                  Login
                </Link>
              </button>
            </span> 


            <div className="dropdown">
            <div className="ms-3 rounded-5 text-center text-white fw-bolder"
            style={{ height: 56, width: 56, backgroundColor: "#D63484", fontSize: 35, }}>
              T
          </div></div>

          <div>
          <div className="dropdown">
  <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">My Orders</a></li>
    <li><a className="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
          </div>
</div> */}


{/* my order 
onClick={() => navigate("/account/order")} */}

        {/* <div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbar-list-4">
    <ul className="navbar-nav">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"/>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Dashboard</a>
          <a className="dropdown-item" href="#">Edit Profile</a>
          <a className="dropdown-item" href="#">Log Out</a>
        </div>
      </li>   
    </ul>
  </div>
        </div> */}

    </div>
  )
}

export default ProfileIcon