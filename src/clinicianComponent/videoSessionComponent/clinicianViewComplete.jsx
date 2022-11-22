import React from "react";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";
import ReactItemSlider from "react-items-slider";

function ClinicianViewComplete() {
  return (
    <>
      <div class="admin_main">
        <ClinicianSidebar />
        <div class="admin_main_inner">
          <ClinicianHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row user-details-part upcoming_view justify-content-center">
              <div class="col-12 mb-4 main_heading text-center">
                <h1>Completed</h1>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>User's Information</h2>
                  </div>
                </div>
                <form class="row mx-0 align-items-center justify-content-center form-design position-relative p-4 py-5">
                  <div class="check_toggle">
                    <input
                      type="checkbox"
                      checked=""
                      name="check1"
                      id="check1"
                      class="d-none"
                    />
                    <label for="check1"></label>
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img src="../assets/img/profile.png" alt="" />
                          </span>
                          <strong>
                            John Dubey <div class="sub_name">(Mother)</div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date: 01/01/2022
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">Pairing Member (Daughter):</label>
                        <input
                          type="text"
                          class="form-control"
                          value="Surbhi"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="surbhi@gamil.com"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="In-person"
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
                          value="+1 9876543210"
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value="User@gmail.com"
                          name="name"
                          id="name"
                        />
                      </div>
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
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 mt-4">
                <div class="row">
                  <div class="col-12 mb-4 main_heading text-center">
                    <h1>Session History</h1>
                  </div>
                  <div class="col-12 design_outter_comman shadow mb-4">
                    <div class="row py-4 px-4">
                      <div class="col-12 mb-4">
                        <div class="slider_session owl-carousel">
                          <a
                            class="slider_menu active"
                            onclick="sendQuery(this,1)"
                            href="javascript:;"
                          >
                            1st Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,2)"
                            href="javascript:;"
                          >
                            2nd Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,3)"
                            href="javascript:;"
                          >
                            3rd Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,4)"
                            href="javascript:;"
                          >
                            4th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,5)"
                            href="javascript:;"
                          >
                            5th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,6)"
                            href="javascript:;"
                          >
                            6th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,7)"
                            href="javascript:;"
                          >
                            7th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,8)"
                            href="javascript:;"
                          >
                            8th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,9)"
                            href="javascript:;"
                          >
                            9th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,10)"
                            href="javascript:;"
                          >
                            10th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,11)"
                            href="javascript:;"
                          >
                            11th Month
                          </a>
                          <a
                            class="slider_menu"
                            onclick="sendQuery(this,12)"
                            href="javascript:;"
                          >
                            12th Month
                          </a>
                        </div>
                      </div>
                      <div
                        id="video_list_1"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                              type="button"
                              role="tab"
                              aria-controls="nav-home"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile"
                            role="tabpanel"
                            aria-labelledby="nav-profile-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_2"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_3"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home2"
                              type="button"
                              role="tab"
                              aria-controls="nav-home2"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile2"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile2"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home2"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile2"
                            role="tabpanel"
                            aria-labelledby="nav-profile2-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_4"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home3"
                              type="button"
                              role="tab"
                              aria-controls="nav-home3"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile3"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile3"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home3"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile3"
                            role="tabpanel"
                            aria-labelledby="nav-profile3-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_5"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home4"
                              type="button"
                              role="tab"
                              aria-controls="nav-home4"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile4"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile4"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home4"
                            role="tabpanel"
                            aria-labelledby="nav-home4-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile4"
                            role="tabpanel"
                            aria-labelledby="nav-profile4-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_6"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home6"
                              type="button"
                              role="tab"
                              aria-controls="nav-home6"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile6"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile6"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home6"
                            role="tabpanel"
                            aria-labelledby="nav-home6-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile6"
                            role="tabpanel"
                            aria-labelledby="nav-profile6-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_7"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_8"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_9"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_10"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_11"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="video_list_12"
                        class="video_list col-12 session_history_tabs px-0 border rounded overflow-hidden"
                        style={{ display: "none" }}
                      >
                        <nav>
                          <div
                            class="nav two_navtabs nav-tabs justify-content-center border-0"
                            id="nav-tab"
                            role="tablist"
                          >
                            <button
                              class="nav-link active"
                              id="nav-home1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home1"
                              type="button"
                              role="tab"
                              aria-controls="nav-home1"
                              aria-selected="true"
                            >
                              1st Session
                            </button>
                            <button
                              class="nav-link"
                              id="nav-profile1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#nav-profile1"
                              type="button"
                              role="tab"
                              aria-controls="nav-profile1"
                              aria-selected="false"
                            >
                              2nd Session
                            </button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id="nav-home1"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="nav-profile1"
                            role="tabpanel"
                            aria-labelledby="nav-profile1-tab"
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="time"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Activity</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>
                                    <label for="upload_video">
                                      <i class="fal fa-camera me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div class="col-12 mb-2">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="col-5">
                                    <div class="d-flex align-items-center justify-content-start">
                                      <div class="user_response_box me-3">
                                        <img
                                          src="../assets/img/profile_img1.png"
                                          alt=""
                                        />
                                      </div>
                                      <a
                                        class="comman_btn2"
                                        href="javascript::"
                                      >
                                        <i class="fal fa-download me-2"></i>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    <button class="comman_btn w-100">
                                      Send
                                    </button>
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group col-4 mb-0">
                                    <div class="row audi_record align-items-center">
                                      <div class="col-1 px-1">
                                        <a
                                          class="play_icon"
                                          href="javascript:;"
                                        >
                                          <i class="fas fa-play"></i>
                                        </a>
                                      </div>
                                      <div class="col px-2">
                                        <div class="audio_part">
                                          <span class="circle_ball"></span>
                                        </div>
                                      </div>
                                      <div class="col-2 px-1">
                                        <span class="time_zome">00:26</span>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Assigned Worksheet</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Pdf</span>
                                    <label for="upload_video">
                                      <i class="fal fa-file me-1"></i>Choose
                                      File
                                    </label>
                                    <input
                                      type="file"
                                      class="form-control"
                                      value=""
                                      name="upload_video"
                                      id="upload_video"
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value=""
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Send</button>
                                  </div>
                                </form>
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Clinical Documentation</h2>
                                  </div>
                                </div>
                                <form
                                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                                  action=""
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      name=""
                                      id=""
                                    ></textarea>
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn">Save</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicianViewComplete;
