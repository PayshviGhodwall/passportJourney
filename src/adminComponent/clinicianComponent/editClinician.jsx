import React from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function EditClinician() {
  return (
    <>
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row clinician-management justify-content-center">
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Edit Clinician Details</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                  action=""
                >
                  <div class="form-group col-12 Edit_clinician_name">
                    <div class="row text-center justify-content-center">
                      <div class="col-auto mb-2">
                        <div class="account_profile position-relative">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              src="../assets/img/profile.png"
                            />
                          </div>
                          <div class="p-image">
                            <i class="upload-button fas fa-camera"></i>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-12 userinfor_box">
                        <strong>
                          John Dubey <div class="sub_name">(Mother)</div>
                        </strong>
                      </div>
                    </div>
                  </div>
                  <div class="form-group col-4">
                    <label for="">Clinician Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value="John Dubey"
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
                    <select
                      class="form-select multiple-select-custom-field"
                      aria-label="Default select example"
                      data-placeholder=""
                      multiple
                    >
                      <option selected>Counselling</option>
                      <option selected value="1">
                        Psychology
                      </option>
                    </select>
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
                  <div class="form-group col-4">
                    <label for="">Select Date</label>
                    <div class="calendar calendar-first" id="calendar_first">
                      <div class="calendar_header">
                        <a href="javscript:;" class="switch-month switch-left">
                          <i class="fa fa-chevron-left"></i>
                        </a>
                        <h2></h2>
                        <a href="javscript:;" class="switch-month switch-right">
                          <i class="fa fa-chevron-right"></i>
                        </a>
                      </div>
                      <div class="calendar_weekdays"></div>
                      <div class="calendar_content"></div>
                    </div>
                  </div>
                  <div class="form-group col-8 ps-3">
                    <label for="">Available Slots</label>
                    <div class="row select_slotss ms--1 me-0">
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          09:30 AM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn active" href="javscript::">
                          10:30 AM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn active" href="javscript::">
                          11:30 AM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          12:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          01:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn active" href="javscript::">
                          02:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          03:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          04:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn active" href="javscript::">
                          05:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          06:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn active" href="javscript::">
                          07:30 PM
                        </a>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <a class="slot_btn" href="javscript::">
                          08:30 PM
                        </a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-12 text-center mt-4">
                        <button class="comman_btn">Save</button>
                      </div>
                    </div>
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

export default EditClinician;
