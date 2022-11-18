import React from "react";
import ClinicianHeader from "./clinicianHeader";
import ClinicianSidebar from "./clinicianSidebar";
import ReactTimeslotCalendar from "../../../src/timeslots/js/react-timeslot-calendar";
import moment from "moment";

function ClinicianEditProfile() {
  let timeslots = [
    ["8", "9"],
    ["9", "10"],
    ["10", "11"],
    ["11", "12"],
    ["12", "13"],
    ["13", "14"],
    ["14", "15"],
    ["15", "16"],
    ["16", "17"],
    ["17", "18"],
    ["18", "19"],
    ["19", "20"],
    ["20", "21"],
  ];
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
                      <div class="form-group col-12">
                        <label for="">Select Date</label>
                        <ReactTimeslotCalendar
                          initialDate={moment().format()}
                          maxTimeslots={100}
                          timeslots={timeslots}
                          onSelectTimeslot={(timeslots, lastSelected) => {
                            console.log("All Timeslots:");
                            console.log(timeslots);

                            console.log("Last selected timeslot:");
                            console.log(lastSelected);
                          }}
                        />
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
                <div class="form-group col-12">
                  <label for="">Select Date</label>
                  <ReactTimeslotCalendar
                    initialDate={moment().format()}
                    maxTimeslots={100}
                    timeslots={timeslots}
                    onSelectTimeslot={(timeslots, lastSelected) => {
                      console.log("All Timeslots:");
                      console.log(timeslots);

                      console.log("Last selected timeslot:");
                      console.log(lastSelected);
                    }}
                  />
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
