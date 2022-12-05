import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  changeUserStatus,
  getSessionData,
} from "../../apiServices/userHttpService/adminUserHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function ViewCancel() {
  const [cancelData, setCancelData] = useState("");
  let { id } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { data } = await getSessionData(id);
    if (!data.error) {
      console.log(data);
      setCancelData(data.results.session);
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
                <h1>Cancelled</h1>
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
                      checked={cancelData?.user?.status}
                      onChange={() => changeStatus(cancelData?.user?._id)}
                    />
                    <label for="check1"></label>
                  </div>
                  <div class="col-3">
                    <div class="row">
                      <div class="form-group col-12 mb-2">
                        <div class="userinfor_box text-center">
                          <span class="user_imgg">
                            <img src={cancelData?.user?.profile_image} alt="" />
                          </span>
                          <strong>
                            {cancelData?.user?.full_name}{" "}
                            <div class="sub_name">
                              ({cancelData?.user?.type})
                            </div>
                          </strong>
                        </div>
                      </div>
                      <div class="form-group col-12 text-center mb-2">
                        <label class="mb-0 text-center" for="">
                          Registration Date:{" "}
                          {moment(cancelData?.user?.createdAt).format("L")}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col px-4">
                    <div class="row">
                      <div class="form-group col-12">
                        <label for="">
                          Pairing Member ({cancelData?.user?.partner?.type}):
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          value={cancelData?.user?.partner?.full_name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Pairing Member Email: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={cancelData?.user?.partner?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12 mb-0">
                        <label for="">Relationship: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={cancelData?.user?.relationship}
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
                          value={cancelData?.user?.phone_number}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div class="form-group col-12">
                        <label for="">Email Id: </label>
                        <input
                          type="text"
                          class="form-control"
                          value={cancelData?.user?.email}
                          name="name"
                          id="name"
                        />
                      </div>
                      {cancelData?.user?.appleId ? (
                        <div class="form-group col-12 mb-0">
                          <label for="">Apple Id: </label>
                          <input
                            type="text"
                            class="form-control"
                            value={cancelData?.user?.appleId}
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
                          src={cancelData?.clinician?.profile_image}
                          alt=""
                        />
                      </span>
                      <strong>{cancelData?.clinician?.name}</strong>
                      <strong class="d-block fw-normal mt-1">
                        Registration Date:{" "}
                        {moment(cancelData?.clinician?.createdAt).format("L")}
                      </strong>
                    </div>
                  </div>
                  <div class="form-group col-4">
                    <label for="">Clinician Name</label>
                    <input
                      type="text"
                      class="form-control"
                      value={cancelData?.clinician?.name}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Mobile Number</label>
                    <input
                      type="text"
                      class="form-control"
                      value={cancelData?.clinician?.phone_number}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Email</label>
                    <input
                      type="text"
                      value={cancelData?.clinician?.email}
                      class="form-control"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4 position-relative">
                    <label for="">License No.</label>
                    <input
                      type="text"
                      value={cancelData?.clinician?.license}
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
                      value={cancelData?.clinician?.expertise}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-4">
                    <label for="">Experience (Years)</label>
                    <input
                      type="text"
                      class="form-control"
                      value={cancelData?.clinician?.experience}
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
                      value={cancelData?.clinician?.bio}
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
                      value={moment(cancelData?.date).format("L")}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col">
                    <label for="">Time</label>
                    <input
                      type="type"
                      class="form-control"
                      value={moment(cancelData?.date).format("L")}
                      name="name"
                      id="name"
                    />
                  </div>
                </form>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Cancelled Schedule</h2>
                  </div>
                </div>
                <form
                  class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                  action=""
                >
                  <div class="form-group col-6">
                    <label for="">Date</label>
                    <input
                      type="text"
                      class="form-control"
                      value={moment(cancelData?.cancelled_date).format("L")}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group col-6">
                    <label for="">Time</label>
                    <input
                      type="text"
                      class="form-control"
                      value={moment(cancelData?.cancelled_date).format(
                        "hh:mm A"
                      )}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col-6">
                    <label for="">Cancelled by (User / Clinician)</label>
                    <input
                      type="text"
                      class="form-control"
                      value={cancelData.cancelled_by}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div class="form-group mb-0 col-6">
                    <label for="">Cancellation Reason</label>
                    <input
                      type="text"
                      class="form-control"
                      value="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus laborum tempore officia, tempora qui nihil debitis a"
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

export default ViewCancel;
