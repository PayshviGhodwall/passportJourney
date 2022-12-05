import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { Link, useParams } from "react-router-dom";
import {
  changeUserStatus,
  getSessionData,
} from "../../apiServices/userHttpService/adminUserHttpService";
import moment from "moment";

function ViewUpcoming() {
  const [upcomingData, setUpcomingData] = useState("");
  let { id } = useParams();

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

  const changeStatus = async (Id) => {
    const { data } = await changeUserStatus(Id);
    if (!data.error) {
      await getDetail();
    }
  };

  return (
    <>
      {" "}
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
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
                  <div class="check_toggle">
                    <input
                      type="checkbox"
                      name="check1"
                      id="check1"
                      class="d-none"
                      checked={upcomingData?.user?.status}
                      onChange={() => changeStatus(upcomingData?.user?._id)}
                    />
                    <label for="check1"></label>
                  </div>
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
                            value={upcomingData?.user?.appleId}
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
                    <h2>Clinician Information</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-start justify-content-between"
                  action=""
                >
                  <div class="form-group col-12 mb-4">
                    <div class="userinfor_box text-center">
                      <span class="user_imgg">
                        <img
                          src={upcomingData?.clinician?.profile_image}
                          alt=""
                        />
                      </span>
                      <strong>{upcomingData?.clinician?.name}</strong>
                      <strong class="d-block fw-normal mt-1">
                        Registration Date:{" "}
                        {moment(upcomingData?.clinician?.createdAt).format("L")}
                      </strong>
                    </div>
                  </div>
                  <div class="form-group col-4">
                    <label for="">Clinician Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={upcomingData?.clinician?.name}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value={upcomingData?.clinician?.phone_number}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Email</label>
                    <input
                      type="text"
                      value={upcomingData?.clinician?.email}
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4 position-relative">
                    <label for="">License No.</label>
                    <input
                      type="text"
                      value={upcomingData?.clinician?.license}
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4 multiple_select_design">
                    <label for="">Expertise</label>
                    <input
                      type="text"
                      class="form-control"
                      value={upcomingData?.clinician?.expertise}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Experience (Years)</label>
                    <input
                      type="text"
                      class="form-control"
                      value={upcomingData?.clinician?.experience}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-12 boi_box">
                    <label for="">Bio</label>
                    <textarea
                      class="form-control"
                      name=""
                      id=""
                      value={upcomingData?.clinician?.bio}
                    ></textarea>
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
                  <div class="form-group mb-0 col">
                    <label for="">Date</label>
                    <input
                      type="type"
                      class="form-control"
                      value={moment(upcomingData?.date).format("L")}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col">
                    <label for="">Time</label>
                    <input
                      type="type"
                      class="form-control"
                      value={upcomingData?.time}
                      name="name"
                      id="name"
                    />
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

export default ViewUpcoming;
