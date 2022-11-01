import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getClinicianData } from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

const options = [
  { value: "counselling", label: "Counselling" },
  { value: "psychology", label: "Psychology" },
];

function ViewClinician() {
  const [selected, setSelected] = useState([]);
  const [clinician, setClinician] = useState("");
  const [value, onChange] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState([]);

  let { id } = useParams();

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
    const { data } = await getClinicianData(id);
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
      let defaultValues = [];
      for (const module of data.results.clinician.expertise) {
        const label = options.filter((item) => item.label === module);
        defaultValues.push({ label: label[0].label, value: module });
      }
      setSelected(defaultValues);

      const filterDate = data.results.clinician.time_slots.filter(
        (item) =>
          moment(new Date(item.date)).format("LL") ===
          moment(Date.now()).format("LL")
      );
      if (filterDate.length) {
        setTimeSlots(filterDate[0].time_slots);
      } else {
        setTimeSlots([]);
      }
    }
  };
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
                    <h2>Clinician Information</h2>
                  </div>
                  <div class="col-auto">
                    <Link class="edit_form" to="/admin/edit-clinician">
                      <i class="fas fa-edit"></i>
                    </Link>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                  action=""
                >
                  <div class="form-group col-12 mb-4 pb-3">
                    <div class="userinfor_box text-center">
                      <span class="user_imgg">
                        <img
                          src={`${process.env.REACT_APP_APIENDPOINTNEW}${clinician.profile_image}`}
                          alt=""
                        />
                      </span>
                      <strong>{clinician.name}</strong>
                      <strong class="d-block fw-normal mt-1">
                        Registration Date:{" "}
                        {moment(clinician.createdAt).format("L")}
                      </strong>
                    </div>
                  </div>

                  <div class="form-group col-6">
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
                  <div class="form-group col-6 position-relative">
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
                  <div class="form-group col-6">
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
                  <div class="form-group col-6">
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
                    <Calendar onChange={onChange} value={value} />
                  </div>
                  <div class="form-group col-8 ps-3">
                    <label for="">Select Slots</label>
                    <div class="row select_slotss ms--1 me-0">
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("09:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          09:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("10:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          10:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("11:30 AM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          11:30 AM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("12:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          12:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("01:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          01:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("02:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          02:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("03:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          03:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("04:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          04:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("05:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          05:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("06:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          06:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("07:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
                        >
                          07:30 PM
                        </Link>
                      </div>
                      <div class="col-auto px-2 mb-4">
                        <Link
                          class={
                            timeSlots?.includes("08:30 PM")
                              ? "slot_btn active"
                              : "slot_btn"
                          }
                          to=""
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
              <div class="col-12 design_outter_comman recent_orders shadow">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Video Session History</h2>
                  </div>
                </div>
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
                            <th>date</th>
                            <th>time</th>
                            <th>duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Moh. Aarif</td>
                            <td>01/07/2022</td>
                            <td>12:00 PM</td>
                            <td>15 MIN</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>John Dubey</td>
                            <td>01/07/2022</td>
                            <td>12:00 PM</td>
                            <td>10 MIN</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Vikas</td>
                            <td>01/07/2022</td>
                            <td>12:00 PM</td>
                            <td>28 MIN</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Ajay jain</td>
                            <td>01/07/2022</td>
                            <td>12:00 PM</td>
                            <td>10 MIN</td>
                          </tr>
                          <tr>
                            <td>5</td>
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
        </div>
      </div>
      <div
        class="modal fade reply_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Chat
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body py-4">
              <div class="chatpart_main">
                <div class="row mx-0">
                  <div class="col-12 user_chat mb-3">
                    <div class="row">
                      <div class="col text-end">
                        <div class="user_chat_box">Hello</div>
                        <span class="time_chat">Jan 14th, 7:19 pm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 admin_chat mb-3">
                    <div class="row">
                      <div class="col text-start">
                        <div class="admin_chat_box">Hello.</div>
                        <span class="time_chat">Jan 14th, 7:20 pm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 user_chat mb-3">
                    <div class="row">
                      <div class="col text-end">
                        <div class="user_chat_box">How are you</div>
                        <span class="time_chat">Jan 14th, 7:20 pm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 admin_chat mb-3">
                    <div class="row">
                      <div class="col text-start">
                        <div class="admin_chat_box">I'm Fine & You</div>
                        <span class="time_chat">Jan 14th, 7:21 pm</span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 user_chat mb-3">
                    <div class="row">
                      <div class="col text-end">
                        <div class="user_chat_box">Also Good</div>
                        <span class="time_chat">Jan 14th, 7:22 pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <form class="message_send row mx-0 w-100" action="">
                <div class="form-group col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Type a Message...."
                  />
                </div>
                <div class="form-group col-auto ps-0">
                  <button class="send_btn" type="send">
                    <i class="fab fa-telegram-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewClinician;
