import React, { useEffect, useState } from "react";
import ClinicianHeader from "./clinicianHeader";
import ClinicianSidebar from "./clinicianSidebar";
import ReactTimeslotCalendar from "../../../src/timeslots/js/react-timeslot-calendar";
import moment from "moment";
import { MultiSelect } from "react-multi-select-component";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import {
  editClinician,
  getClinicianData,
} from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
const options = [
  { value: "counselling", label: "Counselling" },
  { value: "psychology", label: "Psychology" },
];

function ClinicianEditProfile() {
  const [selected, setSelected] = useState([]);
  const [clinician, setClinician] = useState("");
  const [timeSlots, setTimeSlots] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getClinicainValue();
  }, []);

  const getClinicainValue = async () => {
    const { data } = await getClinicianData();
    if (!data.error) {
      setClinician(data.results.clinician);
      let defaultValue = {};
      defaultValue.name = data.results.clinician.name;
      defaultValue.phone_number = data.results.clinician.phone_number;
      defaultValue.email = data.results.clinician.email;
      defaultValue.license = data.results.clinician.license;
      defaultValue.email = data.results.clinician.email;
      defaultValue.experience = data.results.clinician.experience;
      defaultValue.email = data.results.clinician.email;
      defaultValue.bio = data.results.clinician.bio;

      reset({ ...defaultValue });
      if (data.results.clinician.profile_image) {
        setImageFile(data.results.clinician.profile_image);
      }
      let defaultValues = [];
      for (const module of data.results.clinician.expertise) {
        const label = options.filter((item) => item.label === module);
        defaultValues.push({ label: label[0].label, value: module });
      }
      setSelected(defaultValues);

      let slots = [];
      for (const date of data.results.clinician.time_slots) {
        for (const time of date.time_slots) {
          var hours = Number(time.match(/^(\d+)/)[1]);
          var minutes = Number(time.match(/:(\d+)/)[1]);
          var AMPM = time.match(/\s(.*)$/)[1];
          if (AMPM == "PM" && hours < 12) hours = hours + 12;
          if (AMPM == "AM" && hours == 12) hours = hours - 12;
          var sHours = hours.toString();
          var sMinutes = minutes.toString();
          if (hours < 10) sHours = "0" + sHours;
          if (minutes < 10) sMinutes = "0" + sMinutes;
          console.log(time, sHours, sMinutes);
          slots.push({
            startDate: moment(new Date(date.date).setHours(sHours)),
            endDate: moment(new Date(date.date).setHours(sHours + 1)),
          });
        }
      }
      console.log(slots);
      setTimeSlots(slots);
    }
  };

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

  const onSubmit = async (data) => {
    console.log(data);
    if (!timeSlots) {
      toast.error("Please select time slots");
      return;
    }

    data.time_slots = [];

    const keys = Object.keys(timeSlots);
    const value = Object.values(timeSlots);

    for (const key of keys) {
      data.time_slots.push({
        date: key,
        time_slots: timeSlots[key],
      });
    }

    data.time_slots = JSON.stringify(data.time_slots);

    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
      console.log(data[item]);
    }

    if (selectedFile) {
      formData.append("profile_image", selectedFile, selectedFile.name);
    }

    const response = await editClinician(formData);
    if (!response.data.error) {
      getClinicainValue();
    }
  };
  const onFileSelection = (event) => {
    console.log(event);
    let file = event.target.files[0];
    if (file && file.size < 2880) {
      toast.error("Minimum File size should be 1MB.");
      return;
    } else if (file && file.size > 5242880) {
      toast.error("File size exceeded. Max size should be 5MB.");
      return;
    } else {
      // Update the state
      console.log(file);
      setImageFile(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };
  console.log(timeSlots, "gyugyu");

  if (!timeSlots) return null;

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
                    <form
                      class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div class="form-group col-12 Edit_clinician_name">
                        <div class="row text-center justify-content-center">
                          <div class="col-auto mb-2">
                            <div class="account_profile position-relative">
                              <div class="circle">
                                <img class="profile-pic" src={imageFile} />
                              </div>
                              <div class="p-image">
                                <label for="input-file">
                                  <i class="upload-button fas fa-camera"></i>
                                </label>

                                <input
                                  class="file-upload"
                                  type="file"
                                  accept="image/*"
                                  id="input-file"
                                  onChange={(e) => onFileSelection(e)}
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
                          id="name"
                          name="name"
                          disabled
                          {...register("name", {
                            required: true,
                          })}
                        />
                        {errors?.name && (
                          <p className="form-error mt-2">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div class="form-group col-4">
                        <label for="">License No.</label>
                        <input
                          type="number"
                          class="form-control"
                          id="license"
                          name="license"
                          disabled
                          {...register("license", {
                            required: true,
                          })}
                        />
                        {errors?.license && (
                          <p className="form-error mt-2">
                            This field is required
                          </p>
                        )}
                      </div>

                      <div class="form-group col-4">
                        <label for="">Mobile Number</label>
                        <input
                          type="text"
                          class="form-control"
                          id="phone_number"
                          name="phone_number"
                          disabled
                          {...register("phone_number", {
                            required: true,
                            maxLength: 10,
                            minLength: 10,
                          })}
                        />
                        {errors.phone_number &&
                          errors.phone_number.type === "required" && (
                            <p className="form-error mt-2">
                              This field is required
                            </p>
                          )}

                        {errors.phone_number &&
                          errors.phone_number.type === "maxLength" && (
                            <p className="form-error mt-2">
                              Please enter 10 digit number
                            </p>
                          )}
                        {errors.phone_number &&
                          errors.phone_number.type === "minLength" && (
                            <p className="form-error mt-2">
                              Please enter 10 digit number
                            </p>
                          )}
                      </div>
                      <div class="form-group col-4">
                        <label for="">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          name="email"
                          disabled
                          {...register("email", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />

                        {errors?.email && (
                          <p className="form-error mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group col-4 multiple_select_design">
                        <label for="">Expertise</label>
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy={"Select"}
                          isCreatable={true}
                          disabled
                        />
                      </div>
                      <div class="form-group col-4">
                        <label for="">Experience (Years)</label>
                        <input
                          type="text"
                          class="form-control"
                          id="experience"
                          name="experience"
                          disabled
                          {...register("experience", {
                            required: true,
                          })}
                        />
                        {errors?.experience && (
                          <p className="form-error mt-2">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div class="form-group col-12 boi_box">
                        <label for="">Bio</label>
                        <textarea
                          class="form-control"
                          id="bio"
                          name="bio"
                          disabled
                          {...register("bio", {
                            required: true,
                          })}
                        ></textarea>

                        {errors?.bio && (
                          <p className="form-error mt-2">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div class="form-group col-12">
                        <label for="">Select Date</label>
                        <ReactTimeslotCalendar
                          initialDate={moment().format()}
                          maxTimeslots={100}
                          selectedTimeslots={timeSlots}
                          timeslots={timeslots}
                          onSelectTimeslot={(timeslots) => {
                            const dateTime = timeslots.reduce(
                              (date, { startDate }) => {
                                if (
                                  !date[
                                    moment(new Date(startDate._d)).format("LL")
                                  ]
                                )
                                  date[
                                    moment(new Date(startDate._d)).format("LL")
                                  ] = [];
                                date[
                                  moment(new Date(startDate._d)).format("LL")
                                ].push(
                                  moment(new Date(startDate._d)).format(
                                    "hh:mm A"
                                  )
                                );
                                return date;
                              },
                              {}
                            );
                            console.log(dateTime);
                            setTimeSlots(dateTime);
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
