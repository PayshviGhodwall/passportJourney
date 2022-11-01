import React from "react";
import { Link } from "react-router-dom";

function ClinicianHeader() {
  return (
    <>
      {" "}
      <div class="admin_header shadow">
        <div class="row align-items-center mx-0 justify-content-between w-100">
          <div class="col">
            <a class="sidebar_btn" href="javscript:;">
              <i class="far fa-bars"></i>
            </a>
          </div>
          <div class="col-auto d-flex align-items-center">
            <Link class="notification_icon" to="/clinician/notifications">
              <i class="fas fa-bell"></i>
              <span>1</span>
            </Link>
            <div class="dropdown Profile_dropdown">
              <button
                class="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../assets/img/profile.png" alt="" />
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <Link class="dropdown-item" to="/clinician/my-profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/clinician/change-password">
                    Change Password
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicianHeader;
