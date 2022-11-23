import React from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function ViewUpcoming() {
  return (
    <>
      {" "}
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row user-details-part upcoming_view justify-content-center">
              <div class="col-12 mb-4 main_heading text-center">
                <h1>Upcoming</h1>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>User's Information</h2>
                  </div>
                </div>
                <form class="row mx-0 align-items-center justify-content-center form-design position-relative p-4 py-5">
                  <div class="check_toggle">
                    <input
                      type="checkbox"
                      checked=""
                      name="check1"
                      id="check1"
                      class="d-none"
                    />
                    <label for="check1"></label>
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img src="../assets/img/profile.png" alt="" />
                          </span>
                          <strong>
                            Bella Ira <div class="sub_name">(Mother)</div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date: 01/01/2022
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">Pairing Member (Daughter):</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Surbhi"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="surbhi@gamil.com"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="In-person"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col pe-5">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">Mobile Number:</label>
                        <input
                          type="text"
                          class="form-control"
                          value="+1 9876543210"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="User@gmail.com"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Apple Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="User@apple.com"
                          name="name"
                          id="name"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Clinician Information</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                  action=""
                >
                  <div class="form-group col-12 mb-4">
                    <div class="userinfor_box text-center">
                      <span class="user_imgg">
                        <img src="../assets/img/profile.png" alt="" />
                      </span>
                      <strong>
                        Bella Ira <div class="sub_name">(Mother)</div>
                      </strong>
                      <strong class="d-block fw-normal mt-1">
                        Registration Date: 01/01/2022
                      </strong>
                    </div>
                  </div>
                  <div class="form-group col-4">
                    <label for="">Clinician Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value="Bella Ira"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value="+1 09823420934"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Email</label>
                    <input
                      type="text"
                      value="xyz@gmail.com"
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4 position-relative">
                    <label for="">License No.</label>
                    <input
                      type="text"
                      value="90839248923"
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4 multiple_select_design">
                    <label for="">Expertise</label>
                    <input
                      type="text"
                      class="form-control"
                      value="Counselling , Psychology"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Experience (Years)</label>
                    <input
                      type="text"
                      class="form-control"
                      value="4"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-12 boi_box">
                    <label for="">Bio</label>
                    <textarea class="form-control" name="" id="">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem quas asperiores tempora sunt enim quam, laudantium
                      veritatis laborum expedita a omnis deleniti in voluptates
                      excepturi, quis ab quos laboriosam suscipit? Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Rem quas
                      asperiores tempora sunt enim quam, laudantium veritatis
                      laborum expedita a omnis deleniti in voluptates excepturi,
                      quis ab quos laboriosam suscipit? Lorem ipsum.
                    </textarea>
                  </div>
                </form>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Session Schedule</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                  action=""
                >
                  <div class="form-group mb-0 col">
                    <label for="">Date</label>
                    <input
                      type="date"
                      class="form-control"
                      value=""
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col">
                    <label for="">Time</label>
                    <input
                      type="time"
                      class="form-control"
                      value=""
                      name="name"
                      id="name"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUpcoming;
