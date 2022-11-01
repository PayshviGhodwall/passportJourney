import React, { useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import UserClinicianSupport from "./userClinicianSupport";
function SupportManagement() {
  const [type, setType] = useState("User");
  return (
    <>
      {" "}
      <div className="admin_main">
        <AdminSidebar />
        <div className="admin_main_inner">
          <AdminHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row help-support-management justify-content-center">
              <div className="col-12 design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Help & Support Management</h2>
                  </div>
                  <div className="col-3">
                    <form className="form-design" action="">
                      <div className="form-group mb-0 position-relative icons_set">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          name="name"
                          id="name"
                        />
                        <i className="far fa-search"></i>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row p-4">
                  <div className="col-12 p-0 help-support-table border border-2 border-bottom-0 rounded overflow-hidden border-light">
                    <nav>
                      <div
                        className="nav nav-tabs justify-content-center border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          onClick={() => setType("User")}
                        >
                          Users
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                          onClick={() => setType("Clinician")}
                        >
                          Clinicians
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        {type === "User" ? (
                          <UserClinicianSupport type={type} />
                        ) : (
                          ""
                        )}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        {type === "Clinician" ? (
                          <UserClinicianSupport type={type} />
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SupportManagement;
