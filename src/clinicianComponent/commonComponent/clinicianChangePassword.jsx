import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import ClinicianHeader from "./clinicianHeader";
import ClinicianSidebar from "./clinicianSidebar";

function ClinicianChangePassword() {
  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");
  const [type3, setType3] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    if (data.newPassword === data.confirmPassword) {
      const response = await changePassword(data);
      if (!response.data.error) {
        navigate("/clinician/logout");
      }
    } else {
      toast.error("New password should be equal to Confirm password");
    }
  };

  const typeChange = () => {
    if (type === "password") setType("text");
    else {
      setType("password");
    }
  };
  const typeChange2 = () => {
    if (type2 === "password") setType2("text");
    else {
      setType2("password");
    }
  };

  const typeChange3 = () => {
    if (type3 === "password") setType3("text");
    else {
      setType3("password");
    }
  };

  return (
    <>
      {" "}
      <div class="admin_main">
        <ClinicianSidebar />
        <div class="admin_main_inner">
          <ClinicianHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row">
              <div class="col-12 editprofile design_outter_comman shadow">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Change Password</h2>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <form
                      class="row form-design justify-content-center position-relative mx-0 p-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div class="form-group col-12 position-relative">
                        <label for="">Old Password</label>
                        <input
                          type={type}
                          className="form-control"
                          name="oldPassword"
                          id="oldPassword"
                          placeholder="Old password"
                          {...register("oldPassword", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                            },
                          })}
                        />
                        <i
                          className={`fa eyepassword2 fa-eye${
                            type === "password" ? "" : "-slash"
                          }`}
                          onClick={() => typeChange()}
                        ></i>
                        {errors?.oldPassword && (
                          <p className="form-error mt-1">
                            {errors?.oldPassword?.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group col-12 position-relative">
                        <label for="">New Password</label>
                        <input
                          type={type2}
                          className="form-control"
                          name="newPassword"
                          id="newPassword"
                          placeholder="New password"
                          {...register("newPassword", {
                            required: "This field is required",
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              message:
                                "Password must be 8 characters including one uppercase letter, one special character and alphanumeric characters",
                            },
                          })}
                        />
                        <i
                          className={`fa eyepassword2 fa-eye${
                            type2 === "password" ? "" : "-slash"
                          }`}
                          onClick={() => typeChange2()}
                        ></i>
                        {errors?.newPassword && (
                          <p className="form-error mt-1">
                            {errors?.newPassword?.message}
                          </p>
                        )}
                      </div>
                      <div class="form-group col-12">
                        <label for="">Confirm New Password</label>
                        <input
                          type={type3}
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
                        <i
                          className={`fa eyepassword2 fa-eye${
                            type3 === "password" ? "" : "-slash"
                          }`}
                          onClick={() => typeChange3()}
                        ></i>
                        {errors?.confirmPassword && (
                          <p className="form-error mt-1">
                            {errors?.confirmPassword?.message}
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

export default ClinicianChangePassword;
