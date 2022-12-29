import { MDBDataTable } from "mdbreact";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addActivity,
  changeActivityStatus,
  deleteActivity,
  editActivity,
  getActivities,
  getActivityDetail,
} from "../../apiServices/adminHttpService/adminLoginHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function EditActivity({ listing, activityDetail }) {
  const [selectedFilee, setSelectedFilee] = useState(null);

  console.log(listing, activityDetail);

  useEffect(() => {
    getActListing();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!selectedFilee) {
      toast.error("Please upload image");
      return;
    }
    data.activityId = activityDetail._id;
    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
      console.log(data[item]);
    }
    console.log(data);

    if (selectedFilee) {
      formData.append("image", selectedFilee, selectedFilee.name);
    }

    const response = await editActivity(formData);
    if (!response.data.error) {
      console.log(data);
    }
  };

  const onFileSelectionn = (event) => {
    console.log(event);
    let file = event.target.files[0];
    setSelectedFilee(file);
  };

  const getActListing = async () => {
    let defaultValue = {};
    defaultValue.title = activityDetail.title;
    defaultValue.message = activityDetail.message;
    defaultValue.type = activityDetail.type;

    reset({ ...defaultValue });
  };

  return (
    <>
      <div className="modal-content border-0">
        <div className="modal-header">
          <h5 className="modal-title" id="staticBackdropLabel">
            Edit Assigned Activity
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            id="close"
          ></button>
        </div>
        <div className="modal-body py-4 px-4">
          <form
            class="form-design py-4 px-3 help-support-form  row align-items-end justify-content-between"
            onSubmit={handleSubmit(onSubmit)}
          >
            {console.log(activityDetail)}
            <div class="form-group col-6 mb-4 ">
              <label for="">Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                defaultValue={activityDetail.title}
                name="title"
                {...register("title", {
                  required: true,
                })}
              />
              {errors?.title && (
                <p className="form-error mt-2">This field is required</p>
              )}
            </div>
            <div class="form-group col-6 mb-4 choose_file position-relative">
              <span>Upload Image</span>
              <label for="input-file">
                <i class="fal fa-camera me-1"></i>
                Choose File
              </label>
              <input
                class="form-control"
                type="file"
                accept="image/*"
                id="input-file"
                onChange={(e) => onFileSelectionn(e)}
              />{" "}
            </div>
            <div class="form-group col-6 mb-0">
              <label for="">Message</label>
              <input
                type="text"
                class="form-control"
                id="message"
                name="message"
                defaultValue={activityDetail.message}
                {...register("message", {
                  required: true,
                })}
              />
              {errors?.message && (
                <p className="form-error mt-2">This field is required</p>
              )}
            </div>
            <div class="form-group col-6 multiple_select_design mb-0">
              <label for="">Select Type</label>
              <select
                class="form-control"
                id="type"
                defaultValue={activityDetail.type}
                name="type"
                {...register("type", {
                  required: true,
                })}
              >
                <option value="" selected>
                  Select
                </option>
                <option value="In-person">In-person</option>
                <option value="Virtual">Virtual</option>
              </select>
              {errors?.type && (
                <p className="form-error mt-2">This field is required</p>
              )}
            </div>
            <div class="form-group mb-0 col-6 mt-4 ">
              <button class="comman_btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditActivity;
