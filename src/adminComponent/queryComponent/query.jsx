import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import { getTransactions } from "../../apiServices/supportHttpService/adminSupportHttpService";
import { getQuery } from "../../apiServices/adminHttpService/adminLoginHttpService";

function Query() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [query, setQuery] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: " Date & Time",
        field: "date",
        sort: "asc",
        width: 100,
      },

      {
        label: "First Name",
        field: "first_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Last Name",
        field: "last_name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 150,
      },
      {
        label: "Interested",
        field: "interested",
        sort: "asc",
        width: 150,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getQueryListing();
  }, []);

  const getQueryListing = async () => {
    const formData = {
      from: from,
      till: till,
    };
    const { data } = await getQuery(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.query.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.first_name = list.first_name;
        returnData.last_name = list.last_name;
        returnData.email = list.email;
        returnData.interested = list.isInterested ? "Yes" : "No";
        returnData.date = moment(list.createdAt).format("L");

        newRows.push(returnData);
      });

      setQuery({ ...query, rows: newRows });
    }
  };

  return (
    <>
      <div className="row mx-0">
        <div className="col-12">
          <form
            className="form-design py-4 px-3 row align-items-end justify-content-between"
            action=""
          >
            <div className="form-group mb-0 col-5">
              <label for="">From</label>
              <input
                type="datetime-local"
                className="form-control"
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="form-group mb-0 col-5">
              <label for="">To</label>
              <input
                type="datetime-local"
                className="form-control"
                onChange={(e) => setTill(e.target.value)}
              />
            </div>
            <div className="form-group mb-0 col-auto">
              <Link
                className="comman_btn mt-4"
                onClick={() => getQueryListing()}
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
                  data={query}
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

export default Query;
