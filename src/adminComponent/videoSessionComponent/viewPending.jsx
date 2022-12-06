import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { Link, useParams } from "react-router-dom";
import {
  assignClinician,
  changeUserStatus,
  getUserData,
} from "../../apiServices/userHttpService/adminUserHttpService";
import moment from "moment";
import { MDBDataTable } from "mdbreact";
import { getClinicianList } from "../../apiServices/clinicianHttpService/adminClinicianHttpService";

function ViewPending() {
  const [user, setUser] = useState("");
  const [index1, setIndex1] = useState(0);
  const [clinician, setClinician] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },

      {
        label: "Clinician Name",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Year Of Experience",
        field: "year",
        sort: "asc",
        width: 150,
      },
      {
        label: "Expertise",
        field: "expertise",
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

  useEffect(() => {
    getClinicianListing();
    getDetail();
  }, []);

  const getClinicianListing = async () => {
    const formData = {
      from: "",
      till: "",
    };
    const { data } = await getClinicianList(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.clinicians.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.name = list.name;
        returnData.year = list.experience;
        returnData.expertise = list.expertise.map((x) => x).join(", ");

        returnData.action = (
          <>
            <button
              class="comman_btn table_viewbtn"
              to=""
              onClick={() => assignClinician_(list._id)}
            >
              Assign
            </button>
          </>
        );

        newRows.push(returnData);
      });
      setClinician({ ...clinician, rows: newRows });
    }
  };

  const getDetail = async () => {
    const { data } = await getUserData(id);
    if (!data.error) {
      setUser(data.results.user);
    }
  };

  const changeStatus = async (Id) => {
    console.log(Id);
    const { data } = await changeUserStatus(Id);
    if (!data.error) {
      await getDetail();
    }
  };

  const assignClinician_ = async (clinicianId) => {
    const formData = {
      userId: id,
      clinicianId: clinicianId,
    };
    const { data } = await assignClinician(formData);
    if (!data.error) {
      await getDetail();
      const link = document.getElementById("close");
      link.click();
    }
  };

  return (
    <>
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />{" "}
          <div class="admin_panel_data height_adjust">
            <div class="row user-details-part upcoming_view justify-content-center">
              <div class="col-12 mb-4 main_heading text-center">
                <h1>Pending</h1>
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
                      id="check"
                      class="d-none"
                      checked={user?.status}
                      onChange={() => changeStatus(user?._id)}
                    />
                    <label for="check"></label>
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img src={user.profile_image} alt="" />
                          </span>
                          <strong>
                            {user.full_name}
                            <div className="sub_name">({user.type})</div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date:{" "}
                          {moment(user.createdAt).format("L")}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">
                          Pairing Member ({user?.partner?.type}):
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          value={user?.partner?.full_name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={user?.partner?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.relationship}
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
                          value={user.phone_number}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={user.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      {user.appleId ? (
                        <div className="form-group col-12 mb-0">
                          <label for="">Apple Id: </label>
                          <input
                            type="text"
                            className="form-control"
                            value={user.appleId}
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
              <div class="col-12 design_outter_comman recent_orders shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col">
                    <h2>Question & Answer</h2>
                  </div>
                </div>

                <div class="row">
                  <div class="col-12 user_tabbing py-4 px-4">
                    <nav>
                      <div
                        class="nav nav-tabs d-flex justify-content-start border-0"
                        id="nav-tab"
                        role="tablist"
                      >
                        {user?.answers?.map((item, index) => {
                          return (
                            <button
                              class={
                                index === index1
                                  ? "nav-link active"
                                  : "nav-link"
                              }
                              id={`nav-${index}-tab`}
                              data-bs-toggle="tab"
                              data-bs-target={`#nav-${index}`}
                              type="button"
                              role="tab"
                              aria-controls={`nav-${index}`}
                              aria-selected="true"
                              onClick={() => setIndex1(index)}
                            >
                              {index + 1}
                            </button>
                          );
                        })}
                      </div>
                    </nav>
                    {user.answers ? (
                      <div class="tab-content mt-4" id="nav-tabContent">
                        <div
                          class="tab-pane fade show active"
                          id={`nav-${index1}`}
                          role="tabpanel"
                          aria-labelledby={`nav-${index1}-tab`}
                        >
                          <form class="row question_ansbox justify-content-center">
                            <h3 class="mb-4">
                              {user?.answers[index1]?.questionId?.question}
                            </h3>

                            {user?.answers[index1]?.questionId?.options.map(
                              (item, index) => {
                                return (
                                  <div class="form-group col-auto custom_radio">
                                    <input
                                      type="radio"
                                      id="radio1"
                                      name="radio1"
                                      class="d-none"
                                      checke={
                                        item === user.answers[index1].answer
                                      }
                                    />
                                    <label for="radio1">{item}</label>
                                  </div>
                                );
                              }
                            )}
                          </form>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="col-12 pb-4 text-center">
                    {!user.assignedClinician ? (
                      <a
                        href="javscript:;"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop07"
                        class="comman_btn"
                      >
                        Assign Clinician
                      </a>
                    ) : (
                      <Link
                        to={`/admin/view-clinician/${user?.assignedClinician?._id}`}
                        class="comman_btn"
                      >
                        Assigned Clinician
                      </Link>
                    )}
                  </div>
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
                Assign Clinician
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
                      data={clinician}
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

export default ViewPending;
