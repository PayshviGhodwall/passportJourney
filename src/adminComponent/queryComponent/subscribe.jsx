import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import { getSubscribeList } from "../../apiServices/adminHttpService/adminLoginHttpService";

function Subscribe() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [sub, setSub] = useState({
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
    const { data } = await getSubscribeList(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.subscribe.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;
        returnData.first_name = list.first_name;
        returnData.last_name = list.last_name;
        returnData.email = list.email;
        returnData.date = moment(list.createdAt).format("L");

        newRows.push(returnData);
      });

      setSub({ ...sub, rows: newRows });
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
                  data={sub}
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

export default Subscribe;
