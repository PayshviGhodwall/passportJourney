import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  getClinicianData,
  getClinicianSessionHistory,
} from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import moment from "moment";
import ReactTimeslotCalendar from "../../../src/timeslots/js/react-timeslot-calendar";
import { MDBDataTable } from "mdbreact";

const options = [
  { value: "Social Worker (LCSW)", label: "Social Worker (LCSW)" },
  {
    value: "Licensed Professional Counselor (LPC)",
    label: "Licensed Professional Counselor (LPC)",
  },
  {
    value: "Licensed Marriage and Family Therapist (LMFT)",
    label: "Licensed Marriage and Family Therapist (LMFT)",
  },
  { value: "Psychologist (PsyD or PhD)", label: "Psychologist (PsyD or PhD)" },
];

function ViewClinician() {
  const [selected, setSelected] = useState([]);
  const [clinician, setClinician] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [session, setSession] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },

      {
        label: "User Name",
        field: "name",
        sort: "asc",
        width: 100,
      },

      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Time",
        field: "time",
        sort: "asc",
        width: 100,
      },
      {
        label: "Duration",
        field: "duration",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getSessionListing();
    getClinicainValue();
  }, []);

  const getSessionListing = async () => {
    const formData = {
      from: from,
      till: till,
      clinicianId: id,
    };
    const { data } = await getClinicianSessionHistory(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.sessions.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.name = list.user.full_name;
        returnData.duration = list.duration;
        returnData.date = moment(list.date).format("L");
        returnData.time = list.time;

        newRows.push(returnData);
      });

      setSession({ ...session, rows: newRows });
    }
  };

  let { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getClinicainValue = async () => {
    const { data } = await getClinicianData(id);
    if (!data.error) {
      setClinician(data.results.clinician);
      let defaultValue = {};
      defaultValue.name = data.results.clinician.name;
      defaultValue.phone_number = data.results.clinician.phone_number;
      defaultValue.email = data.results.clinician.email;
      defaultValue.license = data.results.clinician.license;
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
  if (!timeSlots.length) return null;

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
                    <Link class="edit_form" to={`/admin/edit-clinician/${id}`}>
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
                        <img src={clinician.profile_image} alt="" />
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
                  <div class="form-group col-12">
                    <label for="">Select Date</label>
                    {console.log(timeSlots)}
                    {timeSlots ? (
                      <ReactTimeslotCalendar
                        initialDate={moment().format()}
                        selectedTimeslots={timeSlots}
                        timeslots={timeslots}
                        maxTimeslots={100}
                      />
                    ) : (
                      ""
                    )}
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
                  className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                  action=""
                >
                  <div className="form-group mb-0 col-5">
                    <label for="">From</label>
                    <input
                      type="date"
                      className="form-control"
                      id="from"
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-0 col-5">
                    <label for="">To</label>
                    <input
                      type="date"
                      className="form-control"
                      id="till"
                      onChange={(e) => setTill(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-0 col-auto">
                    <Link
                      className="comman_btn"
                      onClick={() => getSessionListing()}
                      to=""
                    >
                      Search
                    </Link>
                  </div>
                </form>
                <div class="row">
                  <div class="col-12 comman_table_design px-0">
                    <div class="table-responsive">
                      <MDBDataTable
                        bordered
                        hover
                        data={session}
                        noBottomColumns
                        sortable
                      />
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
