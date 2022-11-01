import React, { useEffect, useState } from "react";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import { getTransactions } from "../../apiServices/supportHttpService/adminSupportHttpService";

function TransactionManagement() {
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [transaction, setTransaction] = useState({
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
        label: "Subscription Plan Name",
        field: "plan",
        sort: "asc",
        width: 150,
      },
      {
        label: "Pricing",
        field: "pricing",
        sort: "asc",
        width: 150,
      },
      {
        label: "Transaction Date & Time",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Plan Validity",
        field: "validity",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [],
  });

  useEffect(() => {
    getTransactionListing();
  }, []);

  const getTransactionListing = async () => {
    const formData = {
      from: from,
      till: till,
    };
    const { data } = await getTransactions(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.transactions.map((list, index) => {
        const returnData = {};

        returnData.sn = index + 1;

        returnData.name = list.user.full_name;
        returnData.plan = list.plan.plan_name;
        returnData.pricing = list.plan.plan_price;
        returnData.date = moment(list.createdAt).format("L");
        returnData.validity = list.plan.plan_duration;

        newRows.push(returnData);
      });

      setTransaction({ ...transaction, rows: newRows });
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
            <div className="row transaction-management justify-content-center">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 design_outter_comman recent_orders shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Transaction Management</h2>
                      </div>
                      <div className="col-3">
                        <form className="form-design">
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
                          className="comman_btn "
                          onClick={() => getTransactionListing()}
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
                            data={transaction}
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

export default TransactionManagement;
