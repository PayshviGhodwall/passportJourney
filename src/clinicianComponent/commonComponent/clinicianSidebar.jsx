import React from "react";
import { Link } from "react-router-dom";

function ClinicianSidebar() {
  return (
    <>
      {" "}
      <div class="siderbar_section">
        <div class="siderbar_inner">
          <div class="sidebar_logo">
            <Link to="javscript:;">
              <img src="/assets/img/logo.png" alt="Logo" />{" "}
            </Link>
          </div>
          <diV class="sidebar_menus">
            <ul class="list-unstyled ps-1 m-0">
              <li>
                <Link
                  class={
                    window.location.href.includes("/clinician/dashboard")
                      ? "active"
                      : ""
                  }
                  to="/clinician/dashboard"
                >
                  <i class="fal fa-home"></i>Dashboard
                </Link>
              </li>
              <li>
                <Link
                  class={
                    window.location.href.includes(
                      "/clinician/video-session-management"
                    ) ||
                    window.location.href.includes("/clinician/view-upcoming") ||
                    window.location.href.includes("/clinician/view-complete") ||
                    window.location.href.includes("/clinician/view-cancel")
                      ? "active"
                      : ""
                  }
                  to="/clinician/video-session-management"
                >
                  <i class="far fa-video-plus"></i>Video Session Management
                </Link>
              </li>
              <li>
                <Link
                  class={
                    window.location.href.includes("/clinician/about-us")
                      ? "active"
                      : ""
                  }
                  to="/clinician/about-us"
                >
                  <i class="far fa-user"></i>About Us
                </Link>
              </li>
              <li>
                <Link
                  class={
                    window.location.href.includes("/clinician/terms-conditions")
                      ? "active"
                      : ""
                  }
                  to="/clinician/terms-conditions"
                >
                  <i class="far fa-users-cog"></i>Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  class={
                    window.location.href.includes("/clinician/privacy-policy")
                      ? "active"
                      : ""
                  }
                  to="/clinician/privacy-policy"
                >
                  <i class="fal fa-user-edit"></i>Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  class={
                    window.location.href.includes(
                      "/clinician/support-management"
                    )
                      ? "active"
                      : ""
                  }
                  to="/clinician/support-management"
                >
                  <i class="fal fa-user-headset"></i>Help & Support Management
                </Link>
              </li>
              <li>
                <Link class="" to="/clinician/logout">
                  <i class="far fa-sign-out-alt"></i>Logout
                </Link>
              </li>
            </ul>
          </diV>
        </div>
      </div>
    </>
  );
}

export default ClinicianSidebar;
