import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardCount } from "../../apiServices/adminHttpService/adminLoginHttpService";
import {
  changeUserStatus,
  getUserList,
} from "../../apiServices/userHttpService/adminUserHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function Dashboard() {
  const [dashboard, setDashboard] = useState("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    getDashboardDetail();
    getUserListing();
  }, []);

  const getDashboardDetail = async () => {
    const { data } = await getDashboardCount();
    if (!data.error) {
      setDashboard(data.results);
    }
  };

  const getUserListing = async () => {
    const { data } = await getUserList();
    if (!data.error) {
      setUser(data.results.users.splice(0, 5));
    }
  };
  const changeStatus = async (id) => {
    const { data } = await changeUserStatus(id);
    if (!data.error) {
      await getUserListing();
    }
  };

  console.log(user);

  return (
    <div className="admin_main">
      <AdminSidebar />

      <div className="admin_main_inner">
        <AdminHeader />

        <div className="admin_panel_data height_adjust">
          <div className="row dashboard_part justify-content-center">
            <div className="col-12">
              <div className="row ms-3 mb-5 justify-content-center">
                <div className="col-3 mb-4 d-flex align-items-stretch">
                  <Link
                    to="/admin/clinician-management"
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="far fa-clinic-medical"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Total Clinicians</h2>
                        <span>{dashboard.clinicianCount}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3 mb-4 d-flex align-items-stretch">
                  <Link
                    to="/admin/transaction-management"
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="far fa-sack-dollar"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Total Revenue</h2>
                        <span>{dashboard.totalRevenue}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3 mb-4 d-flex align-items-stretch">
                  <Link
                    to="/admin/video-session-management"
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="fas fa-camera-movie"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Total Video Session</h2>
                        <span>{dashboard.sessionCount}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3 mb-4 d-flex align-items-stretch">
                  <Link
                    to="/admin/video-session-management"
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="fad fa-spinner"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Upcoming Sessions</h2>
                        <span>{dashboard.upcomingSessionCount}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3 d-flex align-items-stretch">
                  <Link
                    to="/admin/video-session-management"
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="far fa-users-class"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Cancelled Sessions</h2>
                        <span>{dashboard.cancelledSessionCount}</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-3 d-flex align-items-stretch">
                  <a
                    href=""
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="fal fa-hourglass-end"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Renewal Pending</h2>
                        <span>20</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-3 d-flex align-items-stretch">
                  <a
                    href=""
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="far fa-female"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Mother</h2>
                        <span>{dashboard.motherCount}</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-3 d-flex align-items-stretch">
                  <a
                    href=""
                    className="row dashboard_box box_design me-3 w-100"
                  >
                    <div className="col-auto px-0">
                      <span className="dashboard_icon">
                        <i className="fal fa-child"></i>
                      </span>
                    </div>
                    <div className="col pe-0">
                      <div className="dashboard_boxcontent">
                        <h2>Daughter</h2>
                        <span>{dashboard.daughterCount}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-12 design_outter_comman recent_orders shadow">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Recent Users</h2>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 comman_table_design px-0">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>S.No.</th>
                              <th>User Name</th>
                              <th>User Type</th>
                              <th>Mobile Number</th>
                              <th>Email</th>
                              <th>Registration Date</th>
                              <th>Plan Purchased</th>
                              <th>plan pricing </th>
                              <th>plan duration</th>
                              <th>status </th>
                              <th>action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {user.map((list, index) => (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{list.full_name}</td>
                                <td>{list.type}</td>
                                <td>{list.phone_number}</td>
                                <td>{list.email}</td>
                                <td>{moment(list.createdAt).format("L")}</td>
                                <td>{list?.planId?.plan_name}Silver</td>
                                <td>{list?.planId?.plan_price}100</td>
                                <td>{list?.planId?.plan_duration}3 Months</td>
                                <td>
                                  <div className="check_toggle">
                                    <input
                                      type="checkbox"
                                      id={`check${index}`}
                                      class="d-none"
                                      checked={list.status}
                                      onChange={() => changeStatus(list._id)}
                                    />
                                    <label for={`check${index}`}></label>
                                  </div>
                                </td>
                                <td>
                                  <Link
                                    className="comman_btn table_viewbtn"
                                    to={`/admin/user-details/${list._id}`}
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
