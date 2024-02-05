import React from "react";
import "./profileIcon.css";
import { Link } from "react-router-dom";

const ProfileIcon = ({ onLogout, userFirstName }) => {
  // const initial = auth.user ? firstName[0].toUpperCase() : 'U';
  const initial = userFirstName ? userFirstName[0].toUpperCase() : "U";

  return (
    <div>
      <div className="d-flex align-items-center ms-3">
        <div className="dropdown">
          <div
            className="rounded-circle text-center text-white fw-bolder profile-icon"
            style={{
              width: 45,
              height: 45,
              backgroundColor: "#D63484",
              fontSize: 30,
              lineHeight: "45px",
              cursor: "pointer",
            }}
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {initial}
          </div>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link to="/account/order" className="dropdown-item">
              My Orders
            </Link>
            <Link
              to=""
              className="dropdown-item"
              onClick={() => {
                onLogout();
              }}
            >
              Logout
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileIcon;
