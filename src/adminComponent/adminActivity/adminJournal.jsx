import { MDBDataTable } from "mdbreact";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addActivity,
  addJournal,
  changeActivityStatus,
  changeJournalStatus,
  deleteActivity,
  deleteJournal,
  editJournal,
  getActivities,
  getActivityDetail,
  getJournals,
} from "../../apiServices/adminHttpService/adminLoginHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function AdminJournal() {
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
        label: "Topic",
        field: "topic",
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
    data.journalId = activityId;
    const response = edit ? await editJournal(data) : await addJournal(data);
    if (!response.data.error) {
      console.log(data);

      let defaultValue = {};
      defaultValue.title = "";
      defaultValue.topic = "";

      reset({ ...defaultValue });

      setEdit(false);
      await getActListing();
    }
  };

  const getActListing = async () => {
    const { data } = await getJournals();
    if (!data.error) {
      const newRows = [];
      console.log(data);
      data.results.journals.map((list, index) => {
        const returnData = {};
        returnData.sn = index + 1;
        returnData.title = list.title;
        returnData.topic = list.topic;

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
    const { data } = await changeJournalStatus(id);
    if (!data.error) {
      await getActListing();
    }
  };

  const deleteAct = async (id) => {
    const { data } = await deleteJournal(id);
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
    defaultValue.topic = list.topic;

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
                      <h2>Journal Management</h2>
                    </div>
                  </div>
                  <form
                    class="form-design py-4 px-3 help-support-form 
                  row align-items-end justify-content-between"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div class="form-group col mb-0 ">
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

                    <div class="form-group col mb-0">
                      <label for="">Topic</label>
                      <input
                        type="text"
                        class="form-control"
                        id="topic"
                        name="topic"
                        {...register("topic", {
                          required: true,
                        })}
                      />
                      {errors?.topic && (
                        <p className="form-error mt-2">
                          This field is required
                        </p>
                      )}
                    </div>

                    <div class="form-group mb-0 col-auto mt-4 ">
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
                        <h2>Journals</h2>
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

export default AdminJournal;
