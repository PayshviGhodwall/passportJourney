import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  getAdminData,
  updateProfile,
} from "../../apiServices/adminHttpService/adminLoginHttpService";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";

function EditProfile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [adminData, setAdminData] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAdminValue();
  }, []);

  const getAdminValue = async () => {
    const { data } = await getAdminData();
    if (!data.error) {
      setAdminData(data.results.admin);
      let defaultValues = {};
      defaultValues.email = data.results.admin.email;
      defaultValues.full_name = data.results.admin.full_name;

      reset({ ...defaultValues });
      if (data.results.admin.profile_image) {
        setImageFile(
          `${process.env.REACT_APP_APIENDPOINTNEW}${data.results.admin.profile_image}`
        );
      }
    }
  };

  const onSubmit = async (data) => {
    console.log(data);

    const formData = new FormData();
    for (const item in data) {
      formData.append(item, data[item]);
    }

    if (selectedFile) {
      formData.append("profile_image", selectedFile, selectedFile.name);
    }

    const response = await updateProfile(formData);
    if (!response.data.error) {
    }
  };

  const onFileSelection = (event) => {
    console.log(event);
    let file = event.target.files[0];
    if (file && file.size < 2880) {
      toast.error("Minimum File size should be 1MB.");
      return;
    } else if (file && file.size > 5242880) {
      toast.error("File size exceeded. Max size should be 5MB.");
      return;
    } else {
      // Update the state
      console.log(file);
      setImageFile(URL.createObjectURL(file));
      setSelectedFile(file);
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
            <div class="row">
              <div class="col-12 editprofile design_outter_comman shadow">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Edit Profile</h2>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <form
                      class="row form-design justify-content-center position-relative mx-0 p-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div class="form-group col-auto">
                        <div class="account_profile position-relative">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              src={
                                imageFile
                                  ? imageFile
                                  : "../assets/img/profile_img1.png"
                              }
                            />
                          </div>
                          <div class="p-image">
                            <label for="input-file">
                              <i class="upload-button fas fa-camera"></i>
                            </label>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                              id="input-file"
                              onChange={(e) => onFileSelection(e)}
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-group col-12">
                        <label for="">Full Name</label>
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
                      <div class="form-group col-12">
                        <label for="">Email Id</label>
                        <input
                          type="text"
                          class="form-control"
                          id="email"
                          disabled
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
                      <div class="form-group col-12 text-center">
                        <button class="comman_btn" type="submit">
                          Save
                        </button>
                      </div>
                    </form>
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

export default EditProfile;
