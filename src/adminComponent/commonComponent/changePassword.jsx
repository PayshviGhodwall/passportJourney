import React from "react";
import { useForm } from "react-hook-form";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword } from "../../apiServices/adminHttpService/adminLoginHttpService";

function ChangePassword() {
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
        navigate("/admin/logout");
      }
    } else {
      toast.error("New password should be equal to Confirm password");
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
            <div className="row">
              <div className="col-12 editprofile design_outter_comman shadow">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Change Password</h2>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    <form
                      className="row form-design 
                    justify-content-center position-relative mx-0 p-4"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-12">
                        <label for="">Old Password</label>
                        <input
                          type="password"
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
                        {errors?.oldPassword && (
                          <p className="form-error mt-1">
                            {errors?.oldPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label for="">New Password</label>
                        <input
                          type="password"
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
                        {errors?.newPassword && (
                          <p className="form-error mt-1">
                            {errors?.newPassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label for="">Confirm New Password</label>
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
                      <div className="form-group col-12 text-center">
                        <button className="comman_btn" type="submit">
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

export default ChangePassword;
