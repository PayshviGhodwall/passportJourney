import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  changeClinicianStatus,
  getClinicianList,
} from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";

function ClinicianManagement() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
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
        label: "Mobile Number",
        field: "number",
        sort: "asc",
        width: 150,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Registration Date & Time",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Video Session",
        field: "session",
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
    getClinicianListing();
  }, []);

  const getClinicianListing = async () => {
    const formData = {
      from: from,
      till: till,
    };
    const { data } = await getClinicianList(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.clinicians.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;

        returnData.name = list.name;
        returnData.number = list.phone_number;
        returnData.email = list.email;
        returnData.date = moment(list.createdAt).format("L");
        returnData.session = list.session;
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
              to={`/admin/view-clinician/${list._id}`}
            >
              View
            </Link>
          </>
        );
        newRows.push(returnData);
      });
      setClinician({ ...clinician, rows: newRows });
    }
  };

  const changeStatus = async (id) => {
    const { data } = await changeClinicianStatus(id);
    if (!data.error) {
      await getClinicianListing();
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
            <div class="row clinician-management justify-content-center">
              <div class="col-12 mb-4 text-end">
                <Link to="/admin/add-new-clinician" class="comman_btn">
                  Add New
                </Link>
              </div>
              <div class="col-12">
                <div class="row mx-0">
                  <div class="col-12 design_outter_comman recent_orders shadow">
                    <div class="row comman_header justify-content-between">
                      <div class="col-auto">
                        <h2>Clinician Management</h2>
                      </div>
                      <div class="col-3">
                        <form class="form-design" action="">
                          <div class="form-group mb-0 position-relative icons_set">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search"
                              name="name"
                              id="name"
                            />
                            <i class="far fa-search"></i>
                          </div>
                        </form>
                      </div>
                    </div>
                    <form
                      class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
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
                          onClick={() => getClinicianListing()}
                          to=""
                        >
                          Search
                        </Link>
                      </div>
                    </form>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ClinicianManagement;
