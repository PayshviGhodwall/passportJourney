import React from "react";
import { Link } from "react-router-dom";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";
import ClinicianCancel from "./clinicianCancelList";
import ClinicianCompleted from "./clinicianCompletetList";
import ClinicianUpcoming from "./clinicianUpcomingList";

function ClinicianVideoSessionManagement() {
  return (
    <>
      <div class="admin_main">
        <ClinicianSidebar />
        <div class="admin_main_inner">
          <ClinicianHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row video-session-management justify-content-center">
              <div class="col-12 design_outter_comman shadow">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Video Session Management</h2>
                  </div>
                </div>
                <div class="row p-4">
                  <div class="col-12 p-0 help-support-table border border-2 border-bottom-0 rounded overflow-hidden border-light">
                    <nav>
                      <div
                        class="nav nav-tabs justify-content-center border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        <button
                          class="nav-link active"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Upcoming<span>10</span>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-completed-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-completed"
                          type="button"
                          role="tab"
                          aria-controls="nav-completed"
                          aria-selected="false"
                        >
                          Completed<span>10</span>
                        </button>
                        <button
                          class="nav-link"
                          id="nav-cancelled-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-cancelled"
                          type="button"
                          role="tab"
                          aria-controls="nav-cancelled"
                          aria-selected="false"
                        >
                          Cancelled<span>10</span>
                        </button>
                      </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <ClinicianUpcoming />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-completed"
                        role="tabpanel"
                        aria-labelledby="nav-completed-tab"
                      >
                        <ClinicianCompleted />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-cancelled"
                        role="tabpanel"
                        aria-labelledby="nav-cancelled-tab"
                      >
                        <ClinicianCancel />
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

export default ClinicianVideoSessionManagement;
