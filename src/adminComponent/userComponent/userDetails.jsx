import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { Link, useParams } from "react-router-dom";
import {
  changeUserStatus,
  getUserData,
  getUserPlanHistory,
} from "../../apiServices/userHttpService/adminUserHttpService";
import moment from "moment";
import { MDBDataTable } from "mdbreact";

function UserDetails() {
  const [user, setUser] = useState("");
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [plan, setPlan] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "Plan Name",
        field: "name",
        sort: "asc",
        width: 150,
      },

      {
        label: "Date Of Purchase",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Valid Till",
        field: "till",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plan Price",
        field: "price",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  let { id } = useParams();

  useEffect(() => {
    getDetail();
    getPlanListing();
  }, []);

  const getDetail = async () => {
    const { data } = await getUserData(id);
    if (!data.error) {
      setUser(data.results.user);
    }
  };
  const changeStatus = async () => {
    const { data } = await changeUserStatus(id);
    if (!data.error) {
      await getDetail();
    }
  };

  const getPlanListing = async () => {
    const formData = {
      userId: id,
      from: from,
      till: till,
    };
    const { data } = await getUserPlanHistory(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.plans.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1;
        returnData.name = list?.plan?.plan_name;

        returnData.date = moment(list.createdAt).format("L");
        returnData.till = moment(list.valid_till).format("L");
        returnData.price = list?.plan?.plan_price;

        newRows.push(returnData);
      });

      setPlan({ ...plan, rows: newRows });
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <AdminSidebar />
        <div className="admin_main_inner">
          <AdminHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row user-details-part justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>User's Information</h2>
                      </div>
                    </div>
                    <form className="row mx-0 align-items-start justify-content-center form-design position-relative p-4 py-5">
                      <div className="check_toggle">
                        <input
                          type="checkbox"
                          id="check"
                          class="d-none"
                          checked={user.status}
                          onChange={() => changeStatus(user._id)}
                        />
                        <label for="check"></label>
                      </div>
                      <div className="col-3">
                        <div className="row">
                          <div className="form-group col-12 mb-2">
                            <div className="userinfor_box text-center">
                              <span className="user_imgg">
                                <img src="/assets/img/profile.png" alt="" />
                              </span>
                              <strong>
                                {user.full_name}
                                <div className="sub_name">({user.type})</div>
                              </strong>
                            </div>
                          </div>
                          <div className="form-group col-12 text-center mb-2">
                            <label className="mb-0 text-center" for="">
                              Registration Date:{" "}
                              {moment(user.createdAt).format("L")}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col px-4">
                        <div className="row">
                          <div className="form-group col-12">
                            <label for="">
                              Pairing Member ({user?.partner?.type}):
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={user?.partner?.full_name}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-12">
                            <label for="">Pairing Member Email: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={user?.partner?.email}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-12 mb-0">
                            <label for="">Relationship: </label>
                            <input
                              type="text"
                              className="form-control"
                              value={user.relationship}
                              name="name"
                              id="name"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col pe-5">
                        <div className="row">
                          <div className="form-group col-12">
                            <label for="">Mobile Number:</label>
                            <input
                              type="text"
                              className="form-control"
                              value={user.phone_number}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-12">
                            <label for="">Email Id: </label>
                            <input
                              type="text"
                              className="form-control"
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
                  <div className="col-12 design_outter_comman recent_orders shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Plan Purchase History</h2>
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
                          onChange={(e) => setFrom(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label for="">To</label>
                        <input
                          type="date"
                          className="form-control"
                          onChange={(e) => setTill(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <Link
                          className="comman_btn"
                          onClick={() => getPlanListing()}
                          to=""
                        >
                          Search
                        </Link>
                      </div>
                    </form>
                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <MDBDataTable
                            bordered
                            hover
                            data={plan}
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
        </div>
      </div>
    </>
  );
}

export default UserDetails;
