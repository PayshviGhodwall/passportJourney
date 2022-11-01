import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MultiSelect } from "react-multi-select-component";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

import "react-calendar/dist/Calendar.css";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addClinician } from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import moment from "moment";

const options = [
  { value: "counselling", label: "Counselling" },
  { value: "psychology", label: "Psychology" },
];

function AddClinician() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState([]);
  const [value, onChange] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {}, [value]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    console.log(date);

    data.expertise = selected.map((option) => option.label);
    data.time_slots = date;

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
  const [dates, setDates] = useState([]);

  function handleChange(value) {
    setDates(value);

    let newDate = [];
    value.forEach((element, index, array) => {
      console.log(element, index);
      newDate.push({
        date: moment(
          new Date(element.year, element.month.number - 1, element.day)
        ).format("LL"),
        time_slots: timeSlots,
      });
    });

    console.log(newDate);
    setDate(newDate);
  }

  const getTimeSlots = (time) => {
    let slots = [...timeSlots];
    slots.push(time);
    console.log(slots);
    setTimeSlots(slots);
  };

  console.log(dates);
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
                  <div class="form-group col-4">
                    <label for="">Select Date</label>
                    <DatePicker
                      value={dates}
                      onChange={handleChange}
                      format="MM/DD/YYYY HH"
                      plugins={[
                        <TimePicker
                          position="bottom"
                          hideSeconds
                          format="HH"
                        />,
                      ]}
                    />
                  </div>
                  <div class="form-group col-8 ps-3">
                    <label for="">Select Slots</label>
                    <div class="row select_slotss ms--1 me-0">
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("09:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("09:30 AM")}
                        >
                          09:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("10:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("10:30 AM")}
                        >
                          10:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("11:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("11:30 AM")}
                        >
                          11:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("12:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("12:30 PM")}
                        >
                          12:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("01:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("01:30 PM")}
                        >
                          01:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("02:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          onClick={() => getTimeSlots("02:30 PM")}
                          to=""
                        >
                          02:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("03:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("03:30 PM")}
                        >
                          03:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("04:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("04:30 PM")}
                        >
                          04:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("05:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("05:30 PM")}
                        >
                          05:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("06:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("06:30 PM")}
                        >
                          06:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("07:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("07:30 PM")}
                        >
                          07:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots.includes("08:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                          onClick={() => getTimeSlots("08:30 PM")}
                        >
                          08:30 PM
                        </Link>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-12 text-center mt-4">
                        <button class="comman_btn" type="submit">
                          Save
                        </button>
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

export default AddClinician;
