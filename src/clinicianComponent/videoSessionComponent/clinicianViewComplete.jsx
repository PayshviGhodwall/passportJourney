import React, { useEffect, useState } from "react";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";
import ReactItemSlider from "react-items-slider";
import OwlCarousel from "react-owl-carousel";
import { Link, useParams } from "react-router-dom";
import {
  assignActivity,
  assignJournal,
  assignWorksheet,
  assignWorksheety,
  downloadFiles,
  getSessionData,
  getSessionHistory,
  saveSessionDocumentation,
} from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import moment from "moment";
import { useForm } from "react-hook-form";

function ClinicianViewComplete() {
  const [completedData, setCompletedData] = useState("");
  const [getSession, setGetSession] = useState("");
  const [monthIndex, setMonthIndex] = useState(0);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activityMsg, setActivityMsg] = useState("");
  const [journalTopic, setJournalTopic] = useState("");
  const [selectedFile1, setSelectedFile1] = useState(null);
  const [worksheetMsg, setWorksheetMsg] = useState("");

  let { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getDetail();
    getSessionDetail();
    setSessionIndex(0);
  }, [monthIndex]);

  const getDetail = async () => {
    const { data } = await getSessionData(id);
    if (!data.error) {
      console.log(data);
      setCompletedData(data.results.session);
    }
  };

  const getSessionDetail = async () => {
    const { data } = await getSessionHistory(id);
    if (!data.error) {
      console.log(data);
      setGetSession(data.results.session);
    }
  };

  const getActivities = (activities, t) => {
    const activity = activities?.filter(({ type }) => type === t);
    if (activity?.length) {
      return activity[0];
    } else {
      return {};
    }
  };

  const onFileSelection = (event) => {
    console.log(event);
    let file = event.target.files[0];

    setSelectedFile(file);
  };

  const onFileSelection2 = (event) => {
    console.log(event);
    let file = event.target.files[0];

    setSelectedFile1(file);
  };

  const assignedActivity = async () => {
    const Data = {
      sessionId: getSession[monthIndex].sessions[sessionIndex]._id,
      message: activityMsg,
    };
    const formData = new FormData();
    for (const item in Data) {
      formData.append(item, Data[item]);
      console.log(Data[item]);
    }
    console.log(Data);

    if (selectedFile) {
      formData.append("image", selectedFile, selectedFile.name);
    }

    const { data } = await assignActivity(formData);
    if (!data.error) {
      console.log(data);
    }
  };

  const assignedJournal = async () => {
    const formData = {
      sessionId: getSession[monthIndex].sessions[sessionIndex]._id,
      topic: journalTopic,
    };

    const { data } = await assignJournal(formData);
    if (!data.error) {
      console.log(data);
    }
  };

  const assignedWorksheet = async () => {
    const Data = {
      sessionId: getSession[monthIndex].sessions[sessionIndex]._id,
      message: worksheetMsg,
    };
    const formData = new FormData();
    for (const item in Data) {
      formData.append(item, Data[item]);
      console.log(Data[item]);
    }
    console.log(Data);

    if (selectedFile1) {
      formData.append("pdf", selectedFile1, selectedFile1.name);
    }

    const { data } = await assignWorksheet(formData);
    if (!data.error) {
      console.log(data);
    }
  };

  const onSubmit = async (dataa) => {
    dataa.sessionId = getSession[monthIndex].sessions[sessionIndex]._id;

    const { data } = await saveSessionDocumentation(dataa);
    if (!data.error) {
      console.log(data);
    }
  };

  console.log(monthIndex);
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
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img
                              src={completedData?.user?.profile_image}
                              alt=""
                            />
                          </span>
                          <strong>
                            {completedData?.user?.full_name}{" "}
                            <div class="sub_name">
                              ({completedData?.user?.type})
                            </div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date:{" "}
                          {moment(completedData?.user?.createdAt).format("L")}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">
                          Pairing Member ({completedData?.user?.partner?.type}):
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          value={completedData?.user?.partner?.full_name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={completedData?.user?.partner?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={completedData?.user?.relationship}
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
                          value={completedData?.user?.phone_number}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={completedData?.user?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      {completedData?.user?.appleId ? (
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
              <div class="col-12 mt-4">
                <div class="row">
                  <div class="col-12 mb-4 main_heading text-center">
                    <h1>Session History</h1>
                  </div>
                  <div class="col-12 design_outter_comman shadow mb-4">
                    <div class="row py-4 px-4">
                      <div class="col-12 mb-4">
                        {getSession?.length ? (
                          <OwlCarousel
                            className="slider_session owl-carousel"
                            autoplay={false}
                            autoplayHoverPause={true}
                            autoplayTimeout={5000}
                            dots={false}
                            loop={false}
                            autoWidth={false}
                            nav={true}
                            fade={true}
                            items={getSession.length}
                            stagePadding={20}
                          >
                            {getSession?.map((item, index) => (
                              <Link
                                class="slider_menu item active"
                                onClick={() => setMonthIndex(index)}
                                to=""
                              >
                                {item.month.month}
                              </Link>
                            ))}
                          </OwlCarousel>
                        ) : (
                          ""
                        )}
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
                            {getSession[monthIndex]?.sessions?.map(
                              (item, index) => (
                                <button
                                  class={
                                    monthIndex === index
                                      ? "nav-link active"
                                      : "nav-link"
                                  }
                                  id={`nav-home-tab${index}`}
                                  data-bs-toggle="tab"
                                  data-bs-target={`#nav-${index}`}
                                  type="button"
                                  role="tab"
                                  aria-controls={`nav-${index}`}
                                  aria-selected="true"
                                  onClick={() => setSessionIndex(index)}
                                >
                                  {index + 1} Session
                                </button>
                              )
                            )}
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div
                            class="tab-pane fade show active"
                            id={`nav-${sessionIndex}`}
                            role="tabpanel"
                            aria-labelledby={`nav-home-tab${sessionIndex}`}
                          >
                            <div class="row mx-0 p-4">
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Session Schedule</h2>
                                  </div>
                                </div>
                                <form class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between">
                                  <div class="form-group mb-0 col">
                                    <label for="">Date</label>
                                    <input
                                      type="type"
                                      class="form-control"
                                      value={moment(
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ]?.date
                                      ).format("L")}
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Time</label>
                                    <input
                                      type="type"
                                      class="form-control"
                                      value={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ]?.time
                                      }
                                      name="name"
                                      id="name"
                                    />
                                  </div>
                                  <div class="form-group mb-0 col">
                                    <label for="">Duration</label>
                                    <input
                                      type="type"
                                      class="form-control"
                                      value={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ]?.duration
                                      }
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
                                <form class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between">
                                  <div class="form-group col mb-0 choose_file position-relative">
                                    <span>Upload Image</span>

                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Activity"
                                    ).image ? (
                                      <div class="user_response_box me-3">
                                        <img
                                          src={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Activity"
                                            ).image
                                          }
                                          alt=""
                                        />
                                      </div>
                                    ) : (
                                      <>
                                        <label for="input-file">
                                          <i class="fal fa-camera me-1"></i>
                                          Choose File
                                        </label>
                                        <input
                                          class="form-control"
                                          type="file"
                                          accept="image/*"
                                          id="input-file"
                                          onChange={(e) => onFileSelection(e)}
                                        />{" "}
                                      </>
                                    )}
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Activity"
                                        ).message
                                      }
                                      name="name"
                                      id="name"
                                      onChange={(e) =>
                                        setActivityMsg(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Activity"
                                    ).message ? (
                                      ""
                                    ) : (
                                      <Link
                                        class="comman_btn"
                                        to=""
                                        onClick={() => assignedActivity()}
                                      >
                                        Send
                                      </Link>
                                    )}
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
                                          src={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Activity"
                                            ).response
                                              ? getActivities(
                                                  getSession[monthIndex]
                                                    ?.activities,
                                                  "Activity"
                                                ).response
                                              : "/assets/img/profile.png"
                                          }
                                          alt=""
                                        />
                                      </div>

                                      {getActivities(
                                        getSession[monthIndex]?.activities,
                                        "Activity"
                                      ).response ? (
                                        <a
                                          class="comman_btn2"
                                          href={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Activity"
                                            ).response ?? ""
                                          }
                                          target="_blank"
                                        >
                                          <i class="fal fa-download me-2"></i>
                                          Download
                                        </a>
                                      ) : (
                                        ""
                                      )}
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
                                <form class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between">
                                  <div class="form-group col-10">
                                    <label for="">Journal Topic</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Journal"
                                        ).topic
                                      }
                                      name="name"
                                      id="name"
                                      onChange={(e) =>
                                        setJournalTopic(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="form-group col-2">
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Journal"
                                    ).topic ? (
                                      ""
                                    ) : (
                                      <Link
                                        to=""
                                        class="comman_btn"
                                        onClick={() => assignedJournal()}
                                      >
                                        Send
                                      </Link>
                                    )}
                                  </div>
                                  <div class="form-group col-12 mb-0">
                                    <label for="">User Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Journal"
                                        ).response
                                      }
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
                                <form class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between">
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
                                      onChange={(e) => onFileSelection2(e)}
                                    />
                                  </div>
                                  <div class="form-group col mb-0">
                                    <label for="">Message</label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Worksheet"
                                        ).message
                                      }
                                      name="name"
                                      id="name"
                                      onChange={(e) =>
                                        setWorksheetMsg(e.target.value)
                                      }
                                    />
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Worksheet"
                                    ).message ? (
                                      ""
                                    ) : (
                                      <Link
                                        class="comman_btn"
                                        to=""
                                        onClick={() => assignedWorksheet()}
                                      >
                                        Send
                                      </Link>
                                    )}
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
                                  onSubmit={handleSubmit(onSubmit)}
                                >
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">My Feedback</label>
                                    <textarea
                                      class="form-control"
                                      id="feedback"
                                      defaultValue={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ].feedback
                                      }
                                      name="feedback"
                                      {...register("feedback", {
                                        required: true,
                                      })}
                                    />
                                    {errors?.feedback && (
                                      <p className="form-error mt-2">
                                        This field is required
                                      </p>
                                    )}
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Focus Of Session</label>
                                    <textarea
                                      class="form-control"
                                      id="focus_of_session"
                                      defaultValue={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ].focus_of_session
                                      }
                                      name="focus_of_session"
                                      {...register("focus_of_session", {
                                        required: true,
                                      })}
                                    />
                                    {errors?.focus_of_session && (
                                      <p className="form-error mt-2">
                                        This field is required
                                      </p>
                                    )}
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Progress Toward Goals</label>
                                    <textarea
                                      class="form-control"
                                      id="progress_toward_goals"
                                      defaultValue={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ].progress_toward_goals
                                      }
                                      name="progress_toward_goals"
                                      {...register("progress_toward_goals", {
                                        required: true,
                                      })}
                                    />
                                    {errors?.progress_toward_goals && (
                                      <p className="form-error mt-2">
                                        This field is required
                                      </p>
                                    )}
                                  </div>
                                  <div class="form-group col-6 clinical_documentation">
                                    <label for="">Safety Concerns</label>
                                    <textarea
                                      class="form-control"
                                      defaultValue={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ].safety_concerns
                                      }
                                      id="safety_concerns"
                                      name="safety_concerns"
                                      {...register("safety_concerns", {
                                        required: true,
                                      })}
                                    />
                                    {errors?.safety_concerns && (
                                      <p className="form-error mt-2">
                                        This field is required
                                      </p>
                                    )}
                                  </div>
                                  <div class="form-group col mb-0 clinical_documentation">
                                    <label for="">Plan</label>
                                    <textarea
                                      class="form-control"
                                      defaultValue={
                                        getSession[monthIndex]?.sessions[
                                          sessionIndex
                                        ].plan
                                      }
                                      id="plan"
                                      name="plan"
                                      {...register("plan", {
                                        required: true,
                                      })}
                                    />
                                    {errors?.plan && (
                                      <p className="form-error mt-2">
                                        This field is required
                                      </p>
                                    )}
                                  </div>
                                  <div class="form-group mb-0 col-auto">
                                    <button class="comman_btn " type="submit">
                                      Save
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
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
