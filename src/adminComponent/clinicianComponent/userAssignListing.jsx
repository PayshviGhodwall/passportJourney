import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  getAssignedUser,
  getClinicianData,
  getClinicianList,
  getClinicianSessionHistory,
} from "../../apiServices/clinicianHttpService/adminClinicianHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { useParams } from "react-router-dom";
import { MultiSelect } from "react-multi-select-component";
import moment from "moment";

import { MDBDataTable } from "mdbreact";
import AssignClinicianListing from "./assignClinicianListing";
import { assignClinician } from "../../apiServices/userHttpService/adminUserHttpService";

function UserAssignListing({ clinicianId }) {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [userId, setUserId] = useState("");
  const [session, setSession] = useState({
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
        label: "Action",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });
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

  useEffect(() => {
    getSessionListing();
    getClinicianListing();
  }, [userId]);

  const getSessionListing = async () => {
    const formData = {
      from: from,
      till: till,
      clinicianId: clinicianId,
    };
    const { data } = await getAssignedUser(formData);
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

        returnData.action = (
          <>
            <Link
              className="comman_btn table_viewbtn"
              to=""
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop07"
              onClick={() => setUserId(list._id)}
            >
              Re-assign Clinician
            </Link>
          </>
        );

        newRows.push(returnData);
      });

      setSession({ ...session, rows: newRows });
    }
  };

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
        returnData.expertise = list.expertise.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        });

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

  console.log(userId);

  const assignClinician_ = async (id) => {
    const formData = {
      userId: userId,
      clinicianId: id,
    };
    console.log(formData);
    const { data } = await assignClinician(formData);
    if (!data.error) {
      const link = document.getElementById("close");
      link.click();
      await getSessionListing();
    }
  };

  return (
    <>
      <div class="col-12 design_outter_comman recent_orders shadow mt-4">
        <div class="row comman_header justify-content-between">
          <div class="col-auto">
            <h2> Users Assigned </h2>
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
              onClick={() => getSessionListing()}
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
                data={session}
                noBottomColumns
                sortable
              />
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
            {/* <MDBDataTable
                      bordered
                      hover
                      data={clinician}
                      noBottomColumns
                      sortable
                    /> */}

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

export default UserAssignListing;
