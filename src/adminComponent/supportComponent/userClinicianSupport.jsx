import React, { useEffect, useState } from "react";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  changeSupportStatus,
  getSupport,
} from "../../apiServices/supportHttpService/adminSupportHttpService";

function UserClinicianSupport({ type }) {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [tab, setTab] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },

      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 100,
      },
      {
        label: "Subject",
        field: "subject",
        sort: "asc",
        width: 150,
      },
      {
        label: "Description",
        field: "description",
        sort: "asc",
        width: 150,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },

      {
        label: "Status",
        field: "status",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getTabListing();
  }, []);

  const getTabListing = async () => {
    const formData = {
      type: type,
      from: from,
      till: till,
    };
    const { data } = await getSupport(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.supports.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;

        returnData.email = list.email;
        returnData.subject = list.subject;
        returnData.description = list.description;
        returnData.date = moment(list.createdAt).format("L");
        returnData.status = (
          <div className="check_toggle">
            <input
              type="checkbox"
              name="check5"
              id={`check${index}`}
              className="d-none"
              checked={list.status}
              onChange={() => changeStatus(list._id)}
            />
            <label
              //   data-bs-toggle="modal"
              //   data-bs-target="#staticBackdrop12"
              for={`check${index}`}
            ></label>
          </div>
        );
        newRows.push(returnData);
      });

      setTab({ ...tab, rows: newRows });
    }
  };

  const changeStatus = async (id) => {
    const { data } = await changeSupportStatus(id);
    if (!data.error) {
      await getTabListing();
    }
  };
  return (
    <>
      {" "}
      <div className="row mx-0">
        <div className="col-12">
          <form
            className="form-design py-4 px-3 row align-items-end justify-content-between"
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
                className="comman_btn mt-4"
                onClick={() => getTabListing()}
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
                  data={tab}
                  noBottomColumns
                  sortable
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal"
        id="staticBackdrop11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Reply
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-12">
                  <form className="form-design row align-items-center">
                    <div className="form-group mb-0 col message_reply">
                      <label for="">Enter Your Message</label>
                      <textarea
                        className="form-control"
                        name=""
                        id=""
                      ></textarea>
                    </div>
                    <div className="form-group mb-0 mt-4 col-auto">
                      <button className="comman_btn">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserClinicianSupport;
