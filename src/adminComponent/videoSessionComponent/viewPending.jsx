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
                        <button
                          class="nav-link"
                          id="nav-09-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-09"
                          type="button"
                          role="tab"
                          aria-controls="nav-09"
                          aria-selected="false"
                        >
                          09
                        </button>
                        <button
                          class="nav-link"
                          id="nav-10-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-10"
                          type="button"
                          role="tab"
                          aria-controls="nav-10"
                          aria-selected="false"
                        >
                          10
                        </button>
                        <button
                          class="nav-link"
                          id="nav-11-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-11"
                          type="button"
                          role="tab"
                          aria-controls="nav-11"
                          aria-selected="false"
                        >
                          11
                        </button>
                        <button
                          class="nav-link"
                          id="nav-12-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-12"
                          type="button"
                          role="tab"
                          aria-controls="nav-12"
                          aria-selected="false"
                        >
                          12
                        </button>
                        <button
                          class="nav-link"
                          id="nav-13-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-13"
                          type="button"
                          role="tab"
                          aria-controls="nav-13"
                          aria-selected="false"
                        >
                          13
                        </button>
                        <button
                          class="nav-link"
                          id="nav-14-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-14"
                          type="button"
                          role="tab"
                          aria-controls="nav-14"
                          aria-selected="false"
                        >
                          14
                        </button>
                        <button
                          class="nav-link"
                          id="nav-15-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-15"
                          type="button"
                          role="tab"
                          aria-controls="nav-15"
                          aria-selected="false"
                        >
                          15
                        </button>
                        <button
                          class="nav-link"
                          id="nav-16-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-16"
                          type="button"
                          role="tab"
                          aria-controls="nav-16"
                          aria-selected="false"
                        >
                          16
                        </button>
                        <button
                          class="nav-link"
                          id="nav-17-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-17"
                          type="button"
                          role="tab"
                          aria-controls="nav-17"
                          aria-selected="false"
                        >
                          17
                        </button>
                        <button
                          class="nav-link"
                          id="nav-18-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-18"
                          type="button"
                          role="tab"
                          aria-controls="nav-18"
                          aria-selected="false"
                        >
                          18
                        </button>
                        <button
                          class="nav-link"
                          id="nav-19-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-19"
                          type="button"
                          role="tab"
                          aria-controls="nav-19"
                          aria-selected="false"
                        >
                          19
                        </button>
                        <button
                          class="nav-link"
                          id="nav-20-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-20"
                          type="button"
                          role="tab"
                          aria-controls="nav-20"
                          aria-selected="false"
                        >
                          20
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
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio1"
                              checked
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio1">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              name="radio1"
                              class="d-none"
                            />
                            <label for="radio2">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-02"
                        role="tabpanel"
                        aria-labelledby="nav-02-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-03"
                        role="tabpanel"
                        aria-labelledby="nav-03-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-04"
                        role="tabpanel"
                        aria-labelledby="nav-04-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-05"
                        role="tabpanel"
                        aria-labelledby="nav-05-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-06"
                        role="tabpanel"
                        aria-labelledby="nav-06-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-07"
                        role="tabpanel"
                        aria-labelledby="nav-07-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-08"
                        role="tabpanel"
                        aria-labelledby="nav-08-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-09"
                        role="tabpanel"
                        aria-labelledby="nav-09-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-10"
                        role="tabpanel"
                        aria-labelledby="nav-10-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-11"
                        role="tabpanel"
                        aria-labelledby="nav-11-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-12"
                        role="tabpanel"
                        aria-labelledby="nav-12-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-13"
                        role="tabpanel"
                        aria-labelledby="nav-13-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-14"
                        role="tabpanel"
                        aria-labelledby="nav-14-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-15"
                        role="tabpanel"
                        aria-labelledby="nav-15-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-16"
                        role="tabpanel"
                        aria-labelledby="nav-16-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-17"
                        role="tabpanel"
                        aria-labelledby="nav-17-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-18"
                        role="tabpanel"
                        aria-labelledby="nav-18-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-19"
                        role="tabpanel"
                        aria-labelledby="nav-19-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
                          </div>
                        </form>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="nav-20"
                        role="tabpanel"
                        aria-labelledby="nav-20-tab"
                      >
                        <form class="row question_ansbox">
                          <h3 class="mb-3">Have you been in therapy before?</h3>
                          <div class="form-group col-6 text-end custom_radio">
                            <input
                              type="radio"
                              id="radio2"
                              checked
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio2">Yes</label>
                          </div>
                          <div class="form-group col-6 text-start custom_radio">
                            <input
                              type="radio"
                              id="radio3"
                              name="radio2"
                              class="d-none"
                            />
                            <label for="radio4">No</label>
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
