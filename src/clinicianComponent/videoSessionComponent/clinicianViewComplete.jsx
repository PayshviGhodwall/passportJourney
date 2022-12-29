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
  getActivitiess,
  getJournals,
  getSessionData,
  getSessionHistory,
  getWorksheets,
  saveSessionDocumentation,
} from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import moment from "moment";
import { useForm } from "react-hook-form";
import { getClinicianList } from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import { MDBDataTable } from "mdbreact";

function ClinicianViewComplete() {
  const [completedData, setCompletedData] = useState("");
  const [getSession, setGetSession] = useState([]);
  const [monthIndex, setMonthIndex] = useState(0);
  const [sessionIndex, setSessionIndex] = useState(0);
  const [sessionId, setSessionId] = useState("");

  const [activity, setActivity] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },
      {
        label: "Message",
        field: "description",
        sort: "asc",
        width: 150,
      },

      {
        label: "Image",
        field: "image",
        sort: "asc",
        width: 100,
      },

      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  const [journal, setJournal] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "Topic",
        field: "topic",
        sort: "asc",
        width: 150,
      },

      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  const [worksheet, setWorksheet] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "Message",
        field: "description",
        sort: "asc",
        width: 150,
      },
      {
        label: "Pdf",
        field: "pdf",
        sort: "asc",
        width: 150,
      },

      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

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
    getActListing();
    getJourListing();
    getWorkListing();
  }, [monthIndex, sessionId]);

  const getActListing = async () => {
    const { data } = await getActivitiess({ type: "In-person" });
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.activities.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.title = list.title;
        returnData.description = list.message;
        returnData.image = (
          <div className="header-imgg">
            <img src={list.image} alt="" />
          </div>
        );
        returnData.action = (
          <>
            <button
              class="comman_btn table_viewbtn"
              to=""
              onClick={() => assignedActivity(list._id)}
            >
              Send
            </button>
          </>
        );

        newRows.push(returnData);
      });
      setActivity({ ...activity, rows: newRows });
    }
  };

  const getJourListing = async () => {
    const { data } = await getJournals();
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.journals.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.topic = list.topic;

        returnData.action = (
          <>
            <button
              class="comman_btn table_viewbtn"
              to=""
              onClick={() => assignedJournal(list._id)}
            >
              Send
            </button>
          </>
        );

        newRows.push(returnData);
      });
      setJournal({ ...journal, rows: newRows });
    }
  };

  const getWorkListing = async () => {
    const { data } = await getWorksheets();
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.worksheets.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.description = list.message;
        returnData.pdf = (
          <div className="header-imgg">
            <a href={list.pdf} target="_blank">
              <i
                className="fa fa-file-pdf-o"
                style={{ fontSize: "20px", color: "#000" }}
              ></i>
            </a>
          </div>
        );

        returnData.action = (
          <>
            <button
              class="comman_btn table_viewbtn"
              to=""
              onClick={() => assignedWorksheet(list._id)}
            >
              Send
            </button>
          </>
        );

        newRows.push(returnData);
      });
      setWorksheet({ ...worksheet, rows: newRows });
    }
  };

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

  const assignedActivity = async (id) => {
    const Data = {
      sessionId: sessionId,
      activityId: id,
    };

    console.log(Data);

    const { data } = await assignActivity(Data);
    if (!data.error) {
      console.log(data);
      await getSessionDetail();
      const link = document.getElementById("close");
      link.click();
    }
  };

  console.log(getSession);

  const assignedJournal = async (id) => {
    console.log(getSession, "hbjh", monthIndex);
    const formData = {
      sessionId: sessionId,
      journalId: id,
    };

    const { data } = await assignJournal(formData);
    if (!data.error) {
      console.log(data);
      await getSessionDetail();
      const link = document.getElementById("close2");
      link.click();
    }
  };

  const assignedWorksheet = async (id) => {
    const Data = {
      sessionId: sessionId,
      worksheetId: id,
    };

    const { data } = await assignWorksheet(Data);
    if (!data.error) {
      console.log(data);
      await getSessionDetail();
      const link = document.getElementById("close3");
      link.click();
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
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Activity"
                                    ).activity?.image ? (
                                      <div class="user_response_box me-3">
                                        <img
                                          src={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Activity"
                                            ).activity?.image
                                          }
                                          alt=""
                                        />
                                      </div>
                                    ) : (
                                      <>
                                        <Link
                                          class="comman_btn"
                                          to=""
                                          data-bs-toggle="modal"
                                          data-bs-target="#staticBackdrop07"
                                          onClick={() =>
                                            setSessionId(
                                              getSession[monthIndex].sessions[
                                                sessionIndex
                                              ]._id
                                            )
                                          }
                                        >
                                          Select Activity
                                        </Link>
                                      </>
                                    )}
                                  </div>
                                  {getActivities(
                                    getSession[monthIndex]?.activities,
                                    "Activity"
                                  ).activity?.message ? (
                                    <div class="form-group col ">
                                      <label for="">Message</label>

                                      <input
                                        type="text"
                                        class="form-control"
                                        value={
                                          getActivities(
                                            getSession[monthIndex]?.activities,
                                            "Activity"
                                          ).activity?.message
                                        }
                                        name="name"
                                        id="name"
                                      />
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                </form>
                                <div class="row mx-0 user_response text-center pb-4">
                                  <div className="col-6">
                                    <div class="col-12 mb-2">
                                      <label for="">Mother's Response</label>
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
                                              ).mother_response
                                                ? getActivities(
                                                    getSession[monthIndex]
                                                      ?.activities,
                                                    "Activity"
                                                  ).mother_response
                                                : "/assets/img/women.png"
                                            }
                                            alt=""
                                          />
                                        </div>

                                        {getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Activity"
                                        ).mother_response ? (
                                          <a
                                            class="comman_btn2"
                                            href={
                                              getActivities(
                                                getSession[monthIndex]
                                                  ?.activities,
                                                "Activity"
                                              ).mother_response ?? ""
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
                                  <div className="col-6">
                                    <div class="col-12 mb-2">
                                      <label for="">Daughter's Response</label>
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
                                              ).daughter_response
                                                ? getActivities(
                                                    getSession[monthIndex]
                                                      ?.activities,
                                                    "Activity"
                                                  ).daughter_response
                                                : "/assets/img/women.png"
                                            }
                                            alt=""
                                          />
                                        </div>

                                        {getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Activity"
                                        ).daughter_response ? (
                                          <a
                                            class="comman_btn2"
                                            href={
                                              getActivities(
                                                getSession[monthIndex]
                                                  ?.activities,
                                                "Activity"
                                              ).daughter_response ?? ""
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
                              </div>
                              <div class="col-12 design_outter_comman border rounded mb-4">
                                <div class="row comman_header justify-content-between">
                                  <div class="col-auto">
                                    <h2>Suggest A Journal</h2>
                                  </div>
                                </div>
                                <form class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between">
                                  <div class="form-group col-10">
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Journal"
                                    ).journal?.topic ? (
                                      <>
                                        <label for="">Journal Topic</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          value={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Journal"
                                            ).journal?.topic
                                          }
                                          name="name"
                                          id="name"
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <Link
                                          class="comman_btn"
                                          to=""
                                          data-bs-toggle="modal"
                                          data-bs-target="#staticBackdrop08"
                                          onClick={() =>
                                            setSessionId(
                                              getSession[monthIndex].sessions[
                                                sessionIndex
                                              ]._id
                                            )
                                          }
                                        >
                                          Select Journal
                                        </Link>
                                      </>
                                    )}
                                  </div>

                                  <div class="form-group col-12 mb-0">
                                    <label for="">Mother's Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Journal"
                                        ).mother_response
                                      }
                                      name="name"
                                      id="name"
                                    />
                                  </div>

                                  <div class="form-group col-4 mb-0 ">
                                    <div class="row  align-items-center">
                                      <audio controls>
                                        <source
                                          src="horse.ogg"
                                          type="audio/ogg"
                                        />
                                        <source
                                          src="horse.mp3"
                                          type="audio/mpeg"
                                        />
                                        Your browser does not support the audio
                                        element.
                                      </audio>
                                    </div>
                                  </div>
                                  <div class="form-group col-12 mb-0 mt-4">
                                    <label for="">Daughter's Response</label>
                                  </div>
                                  <div class="form-group col-10">
                                    <input
                                      type="text"
                                      class="form-control"
                                      value={
                                        getActivities(
                                          getSession[monthIndex]?.activities,
                                          "Journal"
                                        ).daughter_response
                                      }
                                      name="name"
                                      id="name"
                                    />
                                  </div>

                                  <div class="form-group col-4 mb-0">
                                    <div class="row  align-items-center">
                                      <audio controls>
                                        <source
                                          src="horse.ogg"
                                          type="audio/ogg"
                                        />
                                        <source
                                          src="horse.mp3"
                                          type="audio/mpeg"
                                        />
                                        Your browser does not support the audio
                                        element.
                                      </audio>
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
                                  <div class="form-group col  choose_file position-relative">
                                    {getActivities(
                                      getSession[monthIndex]?.activities,
                                      "Worksheet"
                                    ).worksheet?.pdf ? (
                                      <>
                                        <a
                                          href={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Worksheet"
                                            ).worksheet?.pdf
                                          }
                                          target="_blank"
                                        >
                                          <i
                                            className="fa fa-file-pdf-o"
                                            style={{
                                              fontSize: "65px",
                                              color: "#000",
                                              marginBottom: "-10px",
                                            }}
                                          ></i>
                                        </a>
                                      </>
                                    ) : (
                                      <Link
                                        class="comman_btn"
                                        to=""
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop09"
                                        onClick={() =>
                                          setSessionId(
                                            getSession[monthIndex].sessions[
                                              sessionIndex
                                            ]._id
                                          )
                                        }

                                        // onClick={() => assignedActivity()}
                                      >
                                        Select Worksheet
                                      </Link>
                                    )}
                                  </div>
                                  {getActivities(
                                    getSession[monthIndex]?.activities,
                                    "Worksheet"
                                  ).worksheet?.message ? (
                                    <>
                                      <div class="form-group col ">
                                        <label for="">Message</label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          value={
                                            getActivities(
                                              getSession[monthIndex]
                                                ?.activities,
                                              "Worksheet"
                                            ).worksheet?.message
                                          }
                                          name="name"
                                          id="name"
                                        />
                                      </div>{" "}
                                    </>
                                  ) : (
                                    ""
                                  )}
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

      <div
        class="modal fade assign_clinician comman_modal"
        id="staticBackdrop07"
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
                Select Activity
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close"
              ></button>
            </div>
            <div class="modal-body py-0">
              <div class="row">
                <div class="col-12 comman_table_design px-0">
                  <div class="table-responsive">
                    <MDBDataTable
                      bordered
                      hover
                      data={activity}
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

      <div
        class="modal fade assign_clinician comman_modal"
        id="staticBackdrop08"
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
                Select Journal
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close2"
              ></button>
            </div>
            <div class="modal-body py-0">
              <div class="row">
                <div class="col-12 comman_table_design px-0">
                  <div class="table-responsive">
                    <MDBDataTable
                      bordered
                      hover
                      data={journal}
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

      <div
        class="modal fade assign_clinician comman_modal"
        id="staticBackdrop09"
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
                Select Worksheet
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close3"
              ></button>
            </div>
            <div class="modal-body py-0">
              <div class="row">
                <div class="col-12 comman_table_design px-0">
                  <div class="table-responsive">
                    <MDBDataTable
                      bordered
                      hover
                      data={worksheet}
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
    </>
  );
}

export default ClinicianViewComplete;
