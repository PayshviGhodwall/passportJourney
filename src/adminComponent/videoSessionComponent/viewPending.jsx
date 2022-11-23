import React from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function ViewPending() {
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
                            Bella Ira <div class="sub_name">(Mother)</div>
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
                        <button
                          class="nav-link active"
                          id="nav-01-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-01"
                          type="button"
                          role="tab"
                          aria-controls="nav-01"
                          aria-selected="true"
                        >
                          01
                        </button>
                        <button
                          class="nav-link"
                          id="nav-02-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-02"
                          type="button"
                          role="tab"
                          aria-controls="nav-02"
                          aria-selected="false"
                        >
                          02
                        </button>
                        <button
                          class="nav-link"
                          id="nav-03-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-03"
                          type="button"
                          role="tab"
                          aria-controls="nav-03"
                          aria-selected="false"
                        >
                          03
                        </button>
                        <button
                          class="nav-link"
                          id="nav-04-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-04"
                          type="button"
                          role="tab"
                          aria-controls="nav-04"
                          aria-selected="false"
                        >
                          04
                        </button>
                        <button
                          class="nav-link"
                          id="nav-05-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-05"
                          type="button"
                          role="tab"
                          aria-controls="nav-05"
                          aria-selected="false"
                        >
                          05
                        </button>
                        <button
                          class="nav-link"
                          id="nav-06-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-06"
                          type="button"
                          role="tab"
                          aria-controls="nav-06"
                          aria-selected="false"
                        >
                          06
                        </button>
                        <button
                          class="nav-link"
                          id="nav-07-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-07"
                          type="button"
                          role="tab"
                          aria-controls="nav-07"
                          aria-selected="false"
                        >
                          07
                        </button>
                        <button
                          class="nav-link"
                          id="nav-08-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-08"
                          type="button"
                          role="tab"
                          aria-controls="nav-08"
                          aria-selected="false"
                        >
                          08
                        </button>
                      </div>
                    </nav>
                    <div class="tab-content mt-4" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="nav-01"
                        role="tabpanel"
                        aria-labelledby="nav-01-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            My mother/daughter and I communicate well with each
                            other.
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="radio1"
                              checked
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="radio4"
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="radio5"
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-02"
                        role="tabpanel"
                        aria-labelledby="nav-02-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">We enjoy quality time together.</h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v1"
                              checked
                              name="v1"
                              class="d-none"
                            />
                            <label for="v1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v2"
                              name="v1"
                              class="d-none"
                            />
                            <label for="v2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v3"
                              name="v1"
                              class="d-none"
                            />
                            <label for="v3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v4"
                              name="v1"
                              class="d-none"
                            />
                            <label for="v4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v5"
                              name="v1"
                              class="d-none"
                            />
                            <label for="v5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-03"
                        role="tabpanel"
                        aria-labelledby="nav-03-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            We regularly spend time together.
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v6"
                              checked
                              name="v6"
                              class="d-none"
                            />
                            <label for="v6">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v7"
                              name="v6"
                              class="d-none"
                            />
                            <label for="v7">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v8"
                              name="v6"
                              class="d-none"
                            />
                            <label for="v8">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v9"
                              name="v6"
                              class="d-none"
                            />
                            <label for="v9">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="v10"
                              name="v6"
                              class="d-none"
                            />
                            <label for="v10">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-04"
                        role="tabpanel"
                        aria-labelledby="nav-04-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            I have a good understanding of my mother/daughter
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="j1"
                              checked
                              name="j1"
                              class="d-none"
                            />
                            <label for="j1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="j2"
                              name="j1"
                              class="d-none"
                            />
                            <label for="j2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="j3"
                              name="j1"
                              class="d-none"
                            />
                            <label for="j3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="j4"
                              name="j1"
                              class="d-none"
                            />
                            <label for="j4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="j5"
                              name="j1"
                              class="d-none"
                            />
                            <label for="j5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-05"
                        role="tabpanel"
                        aria-labelledby="nav-05-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            The relationship with my mother/daughter is built
                            upon trust.
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="b1"
                              checked
                              name="b1"
                              class="d-none"
                            />
                            <label for="b1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="b2"
                              name="b1"
                              class="d-none"
                            />
                            <label for="b2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="b3"
                              name="b1"
                              class="d-none"
                            />
                            <label for="b3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="b4"
                              name="b1"
                              class="d-none"
                            />
                            <label for="b4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="b5"
                              name="b1"
                              class="d-none"
                            />
                            <label for="b5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-06"
                        role="tabpanel"
                        aria-labelledby="nav-06-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            I have the skills needed to maintain a healthy
                            relationship with my mother/daughter.
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="c1"
                              checked
                              name="c1"
                              class="d-none"
                            />
                            <label for="c1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="c2"
                              name="c1"
                              class="d-none"
                            />
                            <label for="c2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="c3"
                              name="c1"
                              class="d-none"
                            />
                            <label for="c3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="c4"
                              name="c1"
                              class="d-none"
                            />
                            <label for="c4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="c5"
                              name="c1"
                              class="d-none"
                            />
                            <label for="c5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-07"
                        role="tabpanel"
                        aria-labelledby="nav-07-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">I journal regularly.</h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="d1"
                              checked
                              name="d1"
                              class="d-none"
                            />
                            <label for="d1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="d2"
                              name="d1"
                              class="d-none"
                            />
                            <label for="d2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="d3"
                              name="d1"
                              class="d-none"
                            />
                            <label for="d3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="d4"
                              name="d1"
                              class="d-none"
                            />
                            <label for="d4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="d5"
                              name="d1"
                              class="d-none"
                            />
                            <label for="d5">Excellent</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-08"
                        role="tabpanel"
                        aria-labelledby="nav-08-tab"
                      >
                        <form class="row question_ansbox justify-content-center">
                          <h3 class="mb-4">
                            I look forward to planning activities with my
                            mother/daughter.
                          </h3>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="r1"
                              checked
                              name="r1"
                              class="d-none"
                            />
                            <label for="r1">Very Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="r2"
                              name="r1"
                              class="d-none"
                            />
                            <label for="r2">Poor</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="r3"
                              name="r1"
                              class="d-none"
                            />
                            <label for="r3">Average</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="r4"
                              name="r1"
                              class="d-none"
                            />
                            <label for="r4">Good</label>
                          </div>
                          <div class="form-group col-auto custom_radio">
                            <input
                              type="radio"
                              id="r5"
                              name="r1"
                              class="d-none"
                            />
                            <label for="r5">Excellent</label>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 pb-4 text-center">
                    <a
                      href="javscript:;"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop07"
                      class="comman_btn"
                    >
                      Assign Clinician
                    </a>
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
              ></button>
            </div>
            <div class="modal-body py-0">
              <div class="row">
                <div class="col-12 comman_table_design px-0">
                  <div class="table-responsive">
                    <table class="table mb-0">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>Clinician Name</th>
                          <th>Year Of Experience</th>
                          <th>Expertise</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Moh. Aarif</td>
                          <td>3 Years</td>
                          <td>Counselling </td>
                          <td>
                            <a
                              class="comman_btn table_viewbtn"
                              href="javscript:;"
                            >
                              Assign
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Moh. Aarif</td>
                          <td>3 Years</td>
                          <td>Psychology</td>
                          <td>
                            <a
                              class="comman_btn table_viewbtn"
                              href="javscript:;"
                            >
                              Assign
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Moh. Aarif</td>
                          <td>3 Years</td>
                          <td>Counselling </td>
                          <td>
                            <a
                              class="comman_btn table_viewbtn"
                              href="javscript:;"
                            >
                              Assign
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-12 text-center py-4">
                  <button class="comman_btn">Save</button>
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
