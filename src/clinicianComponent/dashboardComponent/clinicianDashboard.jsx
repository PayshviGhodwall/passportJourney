import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboardCount } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";
import ClinicianUpcoming from "../videoSessionComponent/clinicianUpcomingList";

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
                          <h2>Upcoming Video Sessions</h2>
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
                          <h2>Assigned Video Sessions</h2>
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
                          <h2>Completed Video Sessions</h2>
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
                    <ClinicianUpcoming />
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
