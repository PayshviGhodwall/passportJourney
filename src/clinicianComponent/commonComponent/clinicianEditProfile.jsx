import React from "react";
import ClinicianHeader from "./clinicianHeader";
import ClinicianSidebar from "./clinicianSidebar";

function ClinicianEditProfile() {
  return (
    <>
      {" "}
      <div class="admin_main">
        <ClinicianSidebar />
        <div class="admin_main_inner">
          <ClinicianHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row">
              <div class="col-12 editprofile design_outter_comman shadow">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>My Profile</h2>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-12">
                    <form class="row form-design align-items-center justify-content-center position-relative p-4">
                      <div class="form-group col-12 text-center">
                        <div class="account_profile position-relative">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              src="../assets/img/profile_img1.png"
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
                      <div class="form-group col-4 position-relative">
                        <label for="">Clinician Name</label>
                        <input
                          type="text"
                          class="form-control"
                          value="John Dubey"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-4 position-relative">
                        <label for="">Mobile Number</label>
                        <input
                          type="text"
                          class="form-control"
                          value="+1 09823420934"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-4 position-relative">
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
                      <div class="form-group col-4">
                        <label for="">Select Date</label>
                        <div
                          class="calendar calendar-first"
                          id="calendar_first"
                        >
                          <div class="calendar_header">
                            <a
                              href="javscript:;"
                              class="switch-month switch-left"
                            >
                              <i class="fa fa-chevron-left"></i>
                            </a>
                            <h2></h2>
                            <a
                              href="javscript:;"
                              class="switch-month switch-right"
                            >
                              <i class="fa fa-chevron-right"></i>
                            </a>
                          </div>
                          <div class="calendar_weekdays"></div>
                          <div class="calendar_content"></div>
                        </div>
                      </div>
                      <div class="form-group col-8 ps-3">
                        <label for="">
                          Available Slots{" "}
                          <span
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop09"
                            class="edit_input"
                          >
                            <i class="far fa-edit"></i>
                          </span>
                        </label>
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
                            <button class="comman_btn2">Save</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade comman_modal edit_slotsmodal"
        id="staticBackdrop09"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit Slots
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="form-design row" action="">
                <div class="form-group col-4">
                  <label for="">Select Date</label>
                  <div class="calendar calendar-first" id="calendar_second">
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
                  <label for="">Select Slots</label>
                  <div class="row select_slotss ms--1 me-0">
                    <div class="col-auto px-2 mb-4">
                      <a class="slot_btn" href="javscript::">
                        09:30 AM
                      </a>
                    </div>
                    <div class="col-auto px-2 mb-4">
                      <a class="slot_btn" href="javscript::">
                        10:30 AM
                      </a>
                    </div>
                    <div class="col-auto px-2 mb-4">
                      <a class="slot_btn" href="javscript::">
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
                      <a class="slot_btn" href="javscript::">
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
                      <a class="slot_btn" href="javscript::">
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
                      <button class="comman_btn2">Continue</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicianEditProfile;
