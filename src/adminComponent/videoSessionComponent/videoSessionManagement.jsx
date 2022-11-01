import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function VideoSessionManagement() {
  return (
    <>
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
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
                          class="nav-link nav-link-width active"
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
                          class="nav-link nav-link-width"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Pending <span>10</span>
                        </button>
                        <button
                          class="nav-link nav-link-width"
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
                          class="nav-link nav-link-width"
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
                        <div class="row">
                          <div class="col-12 design_outter_comman recent_orders shadow">
                            <form
                              class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                              action=""
                            >
                              <div class="form-group mb-0 col-5">
                                <label for="">From</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-5">
                                <label for="">To</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-auto">
                                <button class="comman_btn">Search</button>
                              </div>
                            </form>
                            <div class="row">
                              <div class="col-12 comman_table_design px-0">
                                <div class="table-responsive">
                                  <table class="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>User Name</th>
                                        <th>Clinician Name</th>
                                        <th>date</th>
                                        <th>time</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Ajay Sharma</td>
                                        <td>Moh. Aarif</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-upcoming"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>John Dubey</td>
                                        <td>Ajay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-upcoming"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Vikas</td>
                                        <td>Ajay jain</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-upcoming"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Ajay Sharma</td>
                                        <td>Moh. Aarif</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-upcoming"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Ajay Sharma</td>
                                        <td>Vijay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-upcoming"
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
                      <div
                        class="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div class="row">
                          <div class="col-12 design_outter_comman recent_orders shadow">
                            <form
                              class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                              action=""
                            >
                              <div class="form-group mb-0 col-5">
                                <label for="">From</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-5">
                                <label for="">To</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-auto">
                                <button class="comman_btn">Search</button>
                              </div>
                            </form>
                            <div class="row">
                              <div class="col-12 comman_table_design px-0">
                                <div class="table-responsive">
                                  <table class="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>User Name</th>
                                        <th>Request date</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>John Dubey</td>
                                        <td>01/07/2022</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-pending"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>Vikas</td>
                                        <td>01/07/2022</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-pending"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Ajay jain</td>
                                        <td>01/07/2022</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-pending"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Vijay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-pending"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Ajay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-pending"
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
                      <div
                        class="tab-pane fade"
                        id="nav-completed"
                        role="tabpanel"
                        aria-labelledby="nav-completed-tab"
                      >
                        <div class="row">
                          <div class="col-12 design_outter_comman recent_orders shadow">
                            <form
                              class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                              action=""
                            >
                              <div class="form-group mb-0 col-5">
                                <label for="">From</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-5">
                                <label for="">To</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-auto">
                                <button class="comman_btn">Search</button>
                              </div>
                            </form>
                            <div class="row">
                              <div class="col-12 comman_table_design px-0">
                                <div class="table-responsive">
                                  <table class="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>User Name</th>
                                        <th>Clinician Name</th>
                                        <th>date</th>
                                        <th>time</th>
                                        <th>duration</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Moh. Aarif</td>
                                        <td>Moh. Aarif</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>15 MIN</td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>John Dubey</td>
                                        <td>John Dubey</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>10 MIN</td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Vikas</td>
                                        <td>Vikas</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>28 MIN</td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Ajay jain</td>
                                        <td>Ajay jain</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>10 MIN</td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Vijay Sharma</td>
                                        <td>Vijay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>20 MIN</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-cancelled"
                        role="tabpanel"
                        aria-labelledby="nav-cancelled-tab"
                      >
                        <div class="row">
                          <div class="col-12 design_outter_comman recent_orders shadow">
                            <form
                              class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                              action=""
                            >
                              <div class="form-group mb-0 col-5">
                                <label for="">From</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-5">
                                <label for="">To</label>
                                <input type="date" class="form-control" />
                              </div>
                              <div class="form-group mb-0 col-auto">
                                <button class="comman_btn">Search</button>
                              </div>
                            </form>
                            <div class="row">
                              <div class="col-12 comman_table_design px-0">
                                <div class="table-responsive">
                                  <table class="table mb-0">
                                    <thead>
                                      <tr>
                                        <th>S.No.</th>
                                        <th>User Name</th>
                                        <th>Clinician Name</th>
                                        <th>date</th>
                                        <th>time</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>Ajay Sharma</td>
                                        <td>Moh. Aarif</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-cancel"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>John Dubey</td>
                                        <td>Ajay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-cancel"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>Vikas</td>
                                        <td>Ajay jain</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-cancel"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>Ajay Sharma</td>
                                        <td>Moh. Aarif</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-cancel"
                                          >
                                            View
                                          </Link>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>Ajay Sharma</td>
                                        <td>Vijay Sharma</td>
                                        <td>01/07/2022</td>
                                        <td>12:00 PM</td>
                                        <td>
                                          <Link
                                            class="comman_btn table_viewbtn"
                                            to="/admin/view-cancel"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoSessionManagement;
