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

function AssignClinicianListing({ userId }) {
  const [user, setUser] = useState("");
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
    getClinicianListing();
    if (!user) {
      setUser(userId);
    }
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
      userId: user,
      clinicianId: id,
    };
    console.log(formData);
    const { data } = await assignClinician(formData);
    if (!data.error) {
      const link = document.getElementById("close");
      link.click();
    }
  };

  return (
    <>
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
    </>
  );
}

export default AssignClinicianListing;
