import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { getSessionList } from "../../apiServices/userHttpService/adminUserHttpService";

function AdminUpcoming() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [upcoming, setUpcoming] = useState({
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
        width: 100,
      },
      {
        label: "Clinician Name",
        field: "clinician",
        sort: "asc",
        width: 100,
      },

      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Time",
        field: "time",
        sort: "asc",
        width: 100,
      },

      {
        label: "View",
        field: "action",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getUpcomingListing();
  }, []);

  const getUpcomingListing = async () => {
    const formData = {
      from: from,
      till: till,
      type: 1,
    };
    const { data } = await getSessionList(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.session.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.name = list.clinician.name;
        returnData.clinician = list.user.full_name;
        returnData.date = moment(list.date).format("L");
        returnData.time = list.time;
        returnData.action = (
          <>
            <Link
              className="comman_btn table_viewbtn"
              to={`/admin/view-upcoming/${list._id}`}
            >
              View
            </Link>
          </>
        );

        newRows.push(returnData);
      });

      setUpcoming({ ...upcoming, rows: newRows });
    }
  };

  return (
    <>
      <div class="row">
        <div class="col-12 design_outter_comman recent_orders shadow">
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
                onClick={() => getUpcomingListing()}
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
                  data={upcoming}
                  noBottomColumns
                  sortable
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpcoming;
