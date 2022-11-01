import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardCount } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";

function ClinicianDashboard() {
  const [dashboard, setDashboard] = useState("");

  useEffect(() => {
    getDashboardDetail();
  }, []);

  const getDashboardDetail = async () => {
    const { data } = await getDashboardCount();
    if (!data.error) {
      setDashboard(data.results);
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <ClinicianSidebar />

        <div className="admin_main_inner">
          <ClinicianHeader />

          <div className="admin_panel_data height_adjust">
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row ms-3 mb-5 justify-content-center">
                  <div className="col d-flex align-items-stretch">
                    <Link
                      to="/clinician/video-session-management"
                      className="row dashboard_box box_design me-3 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fad fa-spinner"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Upcoming Video Session</h2>
                          <span>{dashboard.upcomingSessionCount}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col d-flex align-items-stretch">
                    <Link
                      to="/clinician/video-session-management"
                      className="row dashboard_box box_design me-3 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="far fa-play-circle"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Assigned Video Session</h2>
                          <span>0</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="col d-flex align-items-stretch pe-0">
                    <Link
                      to="/clinician/video-session-management"
                      className="row dashboard_box box_design me-0 w-100"
                    >
                      <div className="col-auto px-0">
                        <span className="dashboard_icon">
                          <i className="fas fa-camera-movie"></i>
                        </span>
                      </div>
                      <div className="col pe-0">
                        <div className="dashboard_boxcontent">
                          <h2>Completed Video Session</h2>
                          <span>{dashboard.completedSessionCount}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman recent_orders shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Recent Assignment</h2>
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
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group mb-0 col-5">
                        <label for="">From</label>
                        <input type="datetime-local" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label for="">To</label>
                        <input type="datetime-local" className="form-control" />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <button className="comman_btn">Search</button>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <table className="table mb-0">
                            <thead>
                              <tr>
                                <th>S.No.</th>
                                <th>User Name</th>
                                <th>User Type</th>
                                <th>Date </th>
                                <th>Time</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>John Debey</td>
                                <td>Mother</td>
                                <td>2/9/2022</td>
                                <td>10:10AM</td>
                                <td>
                                  <Link
                                    className="comman_btn table_viewbtn"
                                    to="/clinician/view-recent-assignment"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>John Debey</td>
                                <td>Daughter</td>
                                <td>2/9/2022</td>
                                <td>10:10AM</td>
                                <td>
                                  <Link
                                    className="comman_btn table_viewbtn"
                                    to="/clinician/view-recent-assignment"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>John Debey</td>
                                <td>Mother</td>
                                <td>2/9/2022</td>
                                <td>10:10AM</td>
                                <td>
                                  <Link
                                    className="comman_btn table_viewbtn"
                                    to="/clinician/view-recent-assignment"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>John Debey</td>
                                <td>Mother</td>
                                <td>2/9/2022</td>
                                <td>10:10AM</td>
                                <td>
                                  <Link
                                    className="comman_btn table_viewbtn"
                                    to="/clinician/view-recent-assignment"
                                  >
                                    View
                                  </Link>
                                </td>
                              </tr>
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
    </>
  );
}

export default ClinicianDashboard;
