import { MDBDataTable } from "mdbreact";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addActivity,
  addWorksheet,
  changeActivityStatus,
  changeWorksheetStatus,
  deleteActivity,
  deleteWorksheet,
  editWorksheet,
  getActivities,
  getActivityDetail,
  getWorksheets,
} from "../../apiServices/adminHttpService/adminLoginHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function AdminWorksheet() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [activityId, setActivityId] = useState("");
  const [edit, setEdit] = useState("");
  const [activity, setActivity] = useState({
    columns: [
      {
        label: "S.No.",
        field: "sn",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "title",
        sort: "asc",
        width: 150,
      },

      {
        label: "Message",
        field: "description",
        sort: "asc",
        width: 100,
      },

      {
        label: "Pdf",
        field: "pdf",
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
    getActListing();
  }, [activityId]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!selectedFile && !edit) {
      toast.error("Please upload pdf");
      return;
    }

    data.worksheetId = activityId;
    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
      console.log(data[item]);
    }
    console.log(data);

    if (selectedFile) {
      formData.append("pdf", selectedFile, selectedFile.name);
    }

    const response = edit
      ? await editWorksheet(formData)
      : await addWorksheet(formData);
    if (!response.data.error) {
      console.log(data);

      let defaultValue = {};
      defaultValue.title = "";
      defaultValue.message = "";
      defaultValue.type = "";

      reset({ ...defaultValue });

      setSelectedFile(null);
      document.getElementById("input-file").value = "";

      setEdit(false);
      await getActListing();
    }
  };

  const onFileSelection = (event) => {
    console.log(event);
    let file = event.target.files[0];
    setSelectedFile(file);
  };

  const getActListing = async () => {
    const { data } = await getWorksheets();
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.worksheets.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1;
        returnData.title = list.title;
        returnData.description = list.message;

        returnData.pdf = (
          <div className="header-imgg">
            <a href={list.pdf} target="_blank">
              <i
                className="fa fa-file-pdf-o"
                style={{ fontSize: "20px", color: "#000" }}
              ></i>
            </a>
          </div>
        );

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
            <div className="">
              <Link
                to=""
                className="comman_btn table_viewbtn me-2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => editActivityData(list)}
              >
                Edit
              </Link>
              <Link
                className="comman_btn table_viewbtn"
                to=""
                onClick={() => deleteAct(list._id)}
              >
                Delete
              </Link>
            </div>
          </>
        );
        newRows.push(returnData);
      });

      setActivity({ ...activity, rows: newRows });
    }
  };

  const changeStatus = async (id) => {
    const { data } = await changeWorksheetStatus(id);
    if (!data.error) {
      await getActListing();
    }
  };

  const deleteAct = async (id) => {
    const { data } = await deleteWorksheet(id);
    if (!data.error) {
      await getActListing();
    }
  };

  const scrollToTop = () => {
    document.getElementById("scroller").scroll(0, 0);
  };

  const editActivityData = async (list) => {
    scrollToTop();
    let defaultValue = {};
    defaultValue.title = list.title;
    defaultValue.message = list.message;

    reset({ ...defaultValue });
    setActivityId(list._id);
    setEdit(true);
  };

  return (
    <>
      <div className="admin_main">
        <AdminSidebar />

        <div className="admin_main_inner">
          <AdminHeader />

          <div className="admin_panel_data height_adjust" id="scroller">
            <div className="row dashboard_part justify-content-center">
              <div className="col-12">
                <div class="col-12 design_outter_comman border rounded mb-4">
                  <div class="row comman_header justify-content-between">
                    <div class="col-auto">
                      <h2>Worksheet Management</h2>
                    </div>
                  </div>
                  <form
                    class="form-design py-4 px-3 help-support-form 
                  row align-items-end justify-content-between"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div class="form-group col-6 mb-4 ">
                      <label for="">Title</label>
                      <input
                        type="text"
                        class="form-control"
                        id="title"
                        name="title"
                        {...register("title", {
                          required: true,
                        })}
                      />
                      {errors?.title && (
                        <p className="form-error mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div class="form-group col-6 mb-4 choose_file position-relative">
                      <span>Upload Pdf</span>
                      <label for="input-file">
                        <i class="fal fa-camera me-1"></i>
                        Choose File
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        accept=".pdf"
                        id="input-file"
                        onChange={(e) => onFileSelection(e)}
                      />{" "}
                    </div>
                    <div class="form-group col-6 mb-0">
                      <label for="">Message</label>
                      <input
                        type="text"
                        class="form-control"
                        id="message"
                        name="message"
                        {...register("message", {
                          required: true,
                        })}
                      />
                      {errors?.message && (
                        <p className="form-error mt-2">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div class="form-group mb-0 col-6 mt-4 ">
                      <button class="comman_btn" type="submit">
                        {edit ? "Edit" : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman recent_orders shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Worksheets</h2>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 comman_table_design px-0">
                        <div className="table-responsive">
                          <MDBDataTable
                            bordered
                            hover
                            data={activity}
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

export default AdminWorksheet;
