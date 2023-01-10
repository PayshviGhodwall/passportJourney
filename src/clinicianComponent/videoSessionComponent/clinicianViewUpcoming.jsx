import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  cancelSession,
  getSessionData,
  markAsComplete,
} from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";
import { useNavigate } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";

const options = [
  { value: "User", label: "User" },
  {
    value: "Clinician",
    label: "Clinician",
  },
];

function ClinicianViewUpcoming() {
  const [upcomingData, setUpcomingData] = useState("");
  const [reason, setReason] = useState("");
  const [join, setJoin] = useState(true);
  const [notJoin, setNotJoin] = useState("");
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { data } = await getSessionData(id);
    if (!data.error) {
      console.log(data);
      setUpcomingData(data.results.session);
    }
  };

  const getCancelReason = async () => {
    const formData = {
      sessionId: id,
      reason: reason,
    };
    const { data } = await cancelSession(formData);
    if (!data.error) {
      const link = document.getElementById("close");
      link.click();
      navigate("/clinician/video-session-management");
    }
  };

  const onButtonClick = () => {
    document.getElementById("textInput").className = "show mt-4";
    document.getElementById("textInput2").className = "hide mt-4";
  };

  const onButtonClick2 = () => {
    document.getElementById("textInput2").className = "show mt-4";
    document.getElementById("textInput").className = "hide mt-4";
  };

  console.log(join);

  const submitResponse = async () => {
    const formData = {
      sessionId: id,
      not_joined_by: notJoin,
      isCompleted: join,
    };
    const { data } = await markAsComplete(formData);
    if (!data.error) {
      navigate("/clinician/video-session-management");
    }
  };

  return (
    <>
      {" "}
      <div class="admin_main">
        <ClinicianSidebar />
        <div class="admin_main_inner">
          <ClinicianHeader />
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
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img
                              src={upcomingData?.user?.profile_image}
                              alt=""
                            />
                          </span>
                          <strong>
                            {upcomingData?.user?.full_name}{" "}
                            <div class="sub_name">
                              ({upcomingData?.user?.type})
                            </div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date:{" "}
                          {moment(upcomingData?.user?.createdAt).format("L")}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">
                          Pairing Member ({upcomingData?.user?.partner?.type}):
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          value={upcomingData?.user?.partner?.full_name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={upcomingData?.user?.partner?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={upcomingData?.user?.relationship}
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
                          value={upcomingData?.user?.phone_number}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={upcomingData?.user?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      {upcomingData?.user?.appleId ? (
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
                      ) : (
                        ""
                      )}
                    </div>
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
                  <div class="form-group mb-0 col-6">
                    <label for="">Date</label>
                    <input
                      type="text"
                      class="form-control"
                      value={moment(upcomingData?.date).format("L")}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col-6">
                    <label for="">Time</label>
                    <input
                      type="text"
                      class="form-control"
                      value={upcomingData?.time}
                      name="name"
                      id="name"
                    />
                  </div>

                  <div class="form-group col-12 text-center mt-4 mb-0 show_cancel">
                    <a
                      href={upcomingData.joinURL}
                      class={
                        upcomingData.canStartSession
                          ? "me-3"
                          : " a_disable me-3"
                      }
                      target="_blank"
                    >
                      <div class="comman_btn2 me-3">Video Session</div>
                    </a>

                    {upcomingData.canReschedule ? (
                      <button
                        type="button"
                        class="comman_btn me-3"
                        onClick={() => onButtonClick()}
                      >
                        Cancel
                      </button>
                    ) : (
                      ""
                    )}

                    <button
                      type="button"
                      class="comman_btn"
                      onClick={() => onButtonClick2()}
                    >
                      Mark as complete
                    </button>

                    <div class="row hide" id="textInput">
                      <div class="col-5 pe-4">
                        <input
                          class="form-control"
                          type="text"
                          onChange={(e) => setReason(e.target.value)}
                          placeholder="Type your cancellation reason."
                        />
                      </div>
                      <div class="col-auto">
                        <a
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          class="comman_btn"
                        >
                          Submit
                        </a>
                      </div>
                    </div>

                    <div class="row hide" id="textInput2">
                      <form class="row">
                        <div class="form-group col-4 text-end custom_radio mt-3">
                          <input
                            type="radio"
                            id="radio1"
                            name="radio1"
                            class="d-none"
                            onClick={() => setJoin(true)}
                          />
                          <label for="radio1">Yes</label>
                        </div>
                        <div class="form-group col-4 text-start custom_radio mt-3">
                          <input
                            type="radio"
                            id="radio2"
                            name="radio1"
                            class="d-none"
                            onClick={() => setJoin(false)}
                          />
                          <label for="radio2">No</label>
                        </div>

                        <div class="col-4">
                          <Link
                            to=""
                            onClick={() => submitResponse()}
                            class="comman_btn"
                          >
                            Submit
                          </Link>
                        </div>

                        {!join ? (
                          <div class="form-group col-12 multiple_select_design">
                            <label for="">Not Joined By?</label>
                            <select
                              class="form-select"
                              onChange={(e) => setNotJoin(e.target.value)}
                            >
                              <option value="0" selected>
                                Select
                              </option>
                              <option value="User">User</option>
                              <option value="Clinician">Clinician</option>
                            </select>
                          </div>
                        ) : (
                          ""
                        )}
                      </form>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-body text-end">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close"
              ></button>
              <div class="row">
                <div class="col-12 Update_modal_content text-center py-4">
                  <h2>Cancel</h2>
                  <p>Are you sure, Want to Cancel this?</p>
                  <Link
                    class="comman_btn2 mx-2"
                    onClick={() => getCancelReason()}
                    to=""
                  >
                    Yes
                  </Link>
                  <a
                    class="comman_btn mx-2"
                    data-bs-dismiss="modal"
                    href="javscript:;"
                  >
                    NO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicianViewUpcoming;
