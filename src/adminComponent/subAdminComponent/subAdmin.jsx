import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  changeSubAdminStatus,
  createSubadmin,
  getModule,
  getSubAdmin,
} from "../../apiServices/subAdminHttpService/subAdminHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { MultiSelect } from "react-multi-select-component";
import { toast } from "react-toastify";
import { MDBDataTable } from "mdbreact";
import moment from "moment";
import { Link } from "react-router-dom";
import EditSubAdmin from "./editSubAdmin";

const options = [
  { label: "Dashboard", value: 1 },
  { label: "Users Management", value: 2 },
  { label: "Clinician Management", value: 3 },
  { label: "Video Session Management", value: 4 },
  { label: "Subscription Management", value: 5 },
  { label: "Sub-admin Management", value: 6 },
  { label: "Transaction Management", value: 7 },
  { label: "Help & Support Management", value: 8 },
  { label: "Content Management", value: 9 },
  { label: "Query Management", value: 10 },
  { label: "Activity Management", value: 11 },
  { label: "Journal Management", value: 12 },
  { label: "Worksheet Management", value: 13 },
];

function SubAdmin() {
  const [selected, setSelected] = useState([]);
  const [from, setFrom] = useState("");
  const [till, setTill] = useState("");
  const [adminId, setAdminId] = useState("");
  const [adminData, setAdminData] = useState("");

  const [admin, setAdmin] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
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
        label: "SUB-ADMIN NAME	",
        field: "name",
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAdminListing();
    if (adminId) getAdminValue();
  }, [adminId]);

  const getAdminValue = async () => {
    const { data } = await getModule(adminId);
    if (!data.error) {
      setAdminData(data.results.subadmin);
    }
  };

  const getAdminListing = async () => {
    const formData = {
      from: from,
      till: till,
    };
    const { data } = await getSubAdmin(formData);
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.subAdmins.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1;
        returnData.date = moment(list.createdAt).format("L");
        returnData.name = list.full_name;

        returnData.email = list.email;

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
              onClick={() => setAdminId(list._id)}
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              class="comman_btn table_viewbtn"
              to=""
            >
              Edit
            </Link>
          </>
        );
        newRows.push(returnData);
      });

      setAdmin({ ...admin, rows: newRows });
    }
  };

  const changeStatus = async (id) => {
    const { data } = await changeSubAdminStatus(id);
    if (!data.error) {
      await getAdminListing();
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (data.password === data.confirmPassword) {
      data.module = selected.map((option, index) => option.value);
      const response = await createSubadmin(data);
      if (!response.data.error) {
        document.getElementById("full_name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        setSelected([]);
        await getAdminListing();
        reset();
      }
    } else {
      toast.error("New password should be equal to Confirm password");
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
            <div class="row staff-management justify-content-center">
              <div class="col-12">
                <div class="row mx-0">
                  <div class="col-12 design_outter_comman shadow mb-4">
                    <div class="row comman_header justify-content-between">
                      <div class="col-auto">
                        <h2>Add Sub Admin</h2>
                      </div>
                    </div>
                    <form
                      class="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div class="form-group col-4">
                        <label for="">Sub-Admin Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="full_name"
                          name="full_name"
                          {...register("full_name", {
                            required: true,
                          })}
                        />
                        {errors?.full_name && (
                          <p className="form-error mt-1">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div class="form-group col-4 multiple_select_design">
                        <label for="">Select Module</label>
                        <MultiSelect
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy={"Select"}
                          isCreatable={true}
                        />
                      </div>
                      <div class="form-group col-4">
                        <label for="">Email</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          name="email"
                          {...register("email", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              message: "Invalid email address",
                            },
                          })}
                        />
                        {errors?.email && (
                          <p className="form-error mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group mb-0 col">
                        <label for="">Password</label>
                        <input
                          class="form-control"
                          type="password"
                          id="password"
                          name="password"
                          {...register("password", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                            },
                          })}
                        />
                        {errors?.password && (
                          <p className="form-error mt-1">
                            {errors?.password?.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group mb-0 col">
                        <label for="">Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          id="confirmPassword"
                          placeholder="New password"
                          {...register("confirmPassword", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                            },
                          })}
                        />
                        {errors?.confirmPassword && (
                          <p className="form-error mt-1">
                            {errors?.confirmPassword?.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group mb-0 col-auto">
                        <button class="comman_btn" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-12 design_outter_comman shadow">
                    <div class="row comman_header justify-content-between">
                      <div class="col">
                        <h2>Sub Admin Management</h2>
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
                      <div class="form-group mb-0 col-5">
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
                          onClick={() => getAdminListing()}
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
                            data={admin}
                            noBottomColumns
                            sortable
                          />{" "}
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
      <div
        class="modal fade comman_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          {adminId === adminData._id ? (
            <EditSubAdmin listing={getAdminListing} adminData={adminData} />
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default SubAdmin;
