import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminData } from "../../apiServices/adminHttpService/adminLoginHttpService";

function AdminHeader() {
  const [adminData, setAdminData] = useState("");

  useEffect(() => {
    getAdminValue();
  }, []);

  const getAdminValue = async () => {
    const { data } = await getAdminData();
    if (!data.error) {
      setAdminData(data.results.admin);
    }
  };
  return (
    <>
      {" "}
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col">
            <Link className="sidebar_btn" to="">
              <i className="far fa-bars"></i>
            </Link>
          </div>
          <div className="col-auto d-flex align-items-center">
            <Link className="notification_icon" to="/admin/notifications">
              <i className="fas fa-bell"></i>
              <span>1</span>
            </Link>
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="header-imgg">
                  <img
                    src={
                      adminData?.profile_image
                        ? adminData?.profile_image
                        : "/assets/img/profile.png"
                    }
                    alt=""
                  />
                </div>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/admin/edit-profile">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/admin/change-password">
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

export default AdminHeader;
