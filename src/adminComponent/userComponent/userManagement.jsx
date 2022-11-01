import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import {
  changeUserStatus,
  getUserList,
} from "../../apiServices/userHttpService/adminUserHttpService";

function UserManagement() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [user, setUser] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "User Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "User Type",
        field: "type",
        sort: "asc",
        width: 150,
      },

      {
        label: "Mobile Number",
        field: "mobile_number",
        sort: "asc",
        width: 100,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Registration Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plan Purchased",
        field: "plan",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plan Pricing",
        field: "pricing",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plan duration",
        field: "duration",
        sort: "asc",
        width: 100,
      },
      {
        label: "Status",
        field: "status",
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

  useEffect(() => {
    getUserListing();
  }, []);

  const getUserListing = async () => {
    const formData = {
      from: from,
      till: till,
    };
    const { data } = await getUserList(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.users.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1;
        returnData.name = list.full_name;
        returnData.type = list.type;
        returnData.mobile_number = list.phone_number;
        returnData.email = list.email;
        returnData.date = moment(list.createdAt).format("L");
        returnData.plan = list?.planId?.plan_name;
        returnData.pricing = list?.planId?.plan_price;
        returnData.duration = list?.planId?.plan_duration;

        returnData.status = (
          <div class="check_toggle">
            <input
              type="checkbox"
              id={`check${index}`}
              class="d-none"
              checked={list.status}
              onChange={() => changeStatus(list._id)}
            />
            <label for={`check${index}`}></label>
          </div>
        );

        returnData.action = (
          <>
            <Link
              className="comman_btn table_viewbtn"
              to={`/admin/user-details/${list._id}`}
            >
              View
            </Link>
          </>
        );
        newRows.push(returnData);
      });

      setUser({ ...user, rows: newRows });
    }
  };

  const changeStatus = async (id) => {
    const { data } = await changeUserStatus(id);
    if (!data.error) {
      await getUserListing();
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
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman recent_orders shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>User Mangement</h2>
                      </div>
                      <div className="col-3">
                        <form className="form-design" action="">
                          <div className="form-group mb-0 position-relative icons_set">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search"
                              name="name"
                              id="name"
                            />
                            <i className="far fa-search"></i>
                          </div>
                        </form>
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
                          id="from"
                          onChange={(e) => setFrom(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-0 col-5">
                        <label for="">To</label>
                        <input
                          type="date"
                          className="form-control"
                          id="till"
                          onChange={(e) => setTill(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-0 col-auto">
                        <Link
                          className="comman_btn"
                          onClick={() => getUserListing()}
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
                            data={user}
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

export default UserManagement;
