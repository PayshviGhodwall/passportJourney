import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAdminData } from "../../apiServices/adminHttpService/adminLoginHttpService";

function AdminSidebar() {
  const [subAdmin, setSubAdmin] = useState("");

  useEffect(() => {
    getAdminValue();
  }, []);

  const getAdminValue = async () => {
    const { data } = await getAdminData();
    if (!data.error) {
      setSubAdmin(data.results.admin.module);
    }
  };
  return (
    <>
      <div className="siderbar_section">
        <div className="siderbar_inner">
          <div className="sidebar_logo">
            <Link to="">
              <img src="/assets/img/logo.png" alt="Logo" />{" "}
            </Link>
          </div>
          <diV className="sidebar_menus">
            <ul className="list-unstyled ps-1 m-0">
              <li>
                <Link
                  className={
                    window.location.href.includes("/admin/dashboard")
                      ? "active"
                      : ""
                  }
                  to="/admin/dashboard"
                >
                  <i className="fal fa-home"></i>Dashboard
                </Link>
              </li>
              {!subAdmin.length || subAdmin.includes(2) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes("/admin/user-management") ||
                      window.location.href.includes("/admin/user-details")
                        ? "active"
                        : ""
                    }
                    to="/admin/user-management"
                  >
                    <i className="fal fa-user"></i>Users Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(3) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/clinician-management"
                      ) ||
                      window.location.href.includes(
                        "/admin/add-new-clinician"
                      ) ||
                      window.location.href.includes("/admin/view-clinician") ||
                      window.location.href.includes("/admin/edit-clinician")
                        ? "active"
                        : ""
                    }
                    to="/admin/clinician-management"
                  >
                    <i className="far fa-clinic-medical"></i>Clinician
                    Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(4) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/video-session-management"
                      ) ||
                      window.location.href.includes("/admin/view-upcoming") ||
                      window.location.href.includes("/admin/view-pending") ||
                      window.location.href.includes("/admin/view-cancel")
                        ? "active"
                        : ""
                    }
                    to="/admin/video-session-management"
                  >
                    <i className="far fa-video-plus"></i>Video Session
                    Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(11) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/activity-management"
                      )
                        ? "active"
                        : ""
                    }
                    to="/admin/activity-management"
                  >
                    <i className="far fa-tasks"></i>Activity Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(12) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes("/admin/journal-management")
                        ? "active"
                        : ""
                    }
                    to="/admin/journal-management"
                  >
                    <i className="far fa-tasks"></i>Journal Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(13) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/worksheet-management"
                      )
                        ? "active"
                        : ""
                    }
                    to="/admin/worksheet-management"
                  >
                    <i className="far fa-tasks"></i>Worksheet Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(5) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/subscription-management"
                      )
                        ? "active"
                        : ""
                    }
                    to="/admin/subscription-management"
                  >
                    <i className="far fa-sack-dollar"></i>Subscription
                    Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(6) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/sub-admin-management"
                      )
                        ? "active"
                        : ""
                    }
                    to="/admin/sub-admin-management"
                  >
                    <i className="far fa-users-cog"></i>Sub-admin Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(7) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes(
                        "/admin/transaction-management"
                      )
                        ? "active"
                        : ""
                    }
                    to="/admin/transaction-management"
                  >
                    <i className="fal fa-sync-alt"></i>Transaction Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(8) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes("/admin/support-management")
                        ? "active"
                        : ""
                    }
                    to="/admin/support-management"
                  >
                    <i className="fal fa-user-headset"></i>Help & Support
                    Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(9) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes("/admin/content-management")
                        ? "active"
                        : ""
                    }
                    to="/admin/content-management"
                  >
                    <i className="fal fa-user-edit"></i>Content Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              {!subAdmin.length || subAdmin.includes(10) ? (
                <li>
                  <Link
                    className={
                      window.location.href.includes("/admin/query-management")
                        ? "active"
                        : ""
                    }
                    to="/admin/query-management"
                  >
                    <i className="fal fa-question-circle"></i>Query Management
                  </Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link className="" to="/admin/logout">
                  <i className="far fa-sign-out-alt"></i>Logout
                </Link>
              </li>
            </ul>
          </diV>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
