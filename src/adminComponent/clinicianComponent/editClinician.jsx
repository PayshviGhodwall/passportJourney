import React, { useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import moment from "moment";
import { MultiSelect } from "react-multi-select-component";
import ReactTimeslotCalendar from "../../../src/timeslots/js/react-timeslot-calendar";
const options = [
  { value: "counselling", label: "Counselling" },
  { value: "psychology", label: "Psychology" },
];

function EditClinician() {
  const [selected, setSelected] = useState([]);
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
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy={"Select"}
                      isCreatable={true}
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
                  <div class="row">
                    <div class="form-group col-12 text-center mt-4">
                      <button class="comman_btn" type="submit">
                        Save
                      </button>
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
