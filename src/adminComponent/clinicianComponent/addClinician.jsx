import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MultiSelect } from "react-multi-select-component";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addClinician } from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import moment from "moment";
import ReactTimeslotCalendar from "../../../src/timeslots/js/react-timeslot-calendar";

const options = [
  { value: "counselling", label: "Counselling" },
  { value: "psychology", label: "Psychology" },
];

function AddClinician() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState([]);

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    data.expertise = selected.map((option) => option.label);
    data.time_slots = "";

    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
      console.log(data[item]);
    }

    if (selectedFile) {
      formData.append("profile_image", selectedFile, selectedFile.name);
    }

    const response = await addClinician(formData);
    if (!response.data.error) {
      navigate("/admin/clinician-management");
    }
  };
  const onFileSelection = (event) => {
    let file = event[0];

    if (file && file.size < 2880) {
      toast.error("Minimum File size should be 1MB.");
      return;
    } else if (file && file.size > 5242880) {
      toast.error("File size exceeded. Max size should be 5MB.");
      return;
    } else {
      // Update the state
      setSelectedFile(event[0]);
    }
  };

  // const getTimeSlots = (time) => {
  //   let slots = [...timeSlots];
  //   slots.push(time);
  //   console.log(slots);
  //   setTimeSlots(slots);
  // };

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

  let onSelectTimeslot = (allTimeslots, lastSelectedTimeslot) => {
    console.log(lastSelectedTimeslot.startDate, allTimeslots);
  };

  return (
    <>
      {" "}
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row clinician-management justify-content-center">
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Add New Clinician</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="form-group col-4">
                    <label for="">Clinician Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors?.name && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
                  </div>
                  <div class="form-group col-4 choose_file position-relative">
                    <span>Upload Image</span>
                    <label for="upload_video">
                      <i class="fal fa-camera me-1"></i>Choose File
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      class="form-control"
                      name="upload_video"
                      id="upload_video"
                      onChange={(e) => onFileSelection(e.target.files)}
                    />
                  </div>
                  <div class="form-group col-4 position-relative">
                    <label for="">License No.</label>
                    <input
                      type="number"
                      class="form-control"
                      id="license"
                      name="license"
                      {...register("license", {
                        required: true,
                      })}
                    />
                    {errors?.license && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
                  </div>
                  <div class="form-group col-4">
                    <label for="">Mobile Number</label>
                    <input
                      type="number"
                      class="form-control"
                      id="phone_number"
                      name="phone_number"
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
                      <p className="form-error mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div class="form-group col-4">
                    <label for="">Password</label>
                    <input
                      class="form-control"
                      type="password"
                      id="password"
                      name="password"
                      {...register("password", {
                        required: "This field is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                        },
                      })}
                    />
                    {errors?.password && (
                      <p className="form-error mt-1">
                        {errors?.password?.message}
                      </p>
                    )}
                  </div>
                  <div class="form-group col-6 multiple_select_design">
                    <label for="">Expertise</label>
                    <MultiSelect
                      options={options}
                      value={selected}
                      onChange={setSelected}
                      labelledBy={"Select"}
                      isCreatable={true}
                    />
                  </div>
                  <div class="form-group col-6">
                    <label for="">Experience (Years)</label>
                    <input
                      type="number"
                      class="form-control"
                      id="experience"
                      name="experience"
                      {...register("experience", {
                        required: true,
                      })}
                    />
                    {errors?.experience && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
                  </div>
                  <div class="form-group col-12 boi_box">
                    <label for="">Bio</label>
                    <textarea
                      class="form-control"
                      id="bio"
                      name="bio"
                      {...register("bio", {
                        required: true,
                      })}
                    ></textarea>

                    {errors?.bio && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
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
    </>
  );
}

export default AddClinician;
