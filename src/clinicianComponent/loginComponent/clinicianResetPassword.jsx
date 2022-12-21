import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { updatePassword } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";

function ClinicianResetPassword() {
  const [type, setType] = useState("password");
  const [type2, setType2] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmpassword) {
      toast.error("Password & Confirm Password should be same");
      return;
    }
    console.log(data);

    const formData = {
      email: location.state.email,
      password: data.password,
    };
    const response = await updatePassword(formData);
    if (!response.data.error) {
      navigate("/clinician/login");
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

  return (
    <>
      {" "}
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4">
                    <img src="../assets/img/logo.png" alt="" />
                    <h1>Reset Password</h1>
                    <p>Enter New Password</p>
                  </div>
                  <div className="col-12">
                    <form
                      className="row form-design"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-12">
                        <label for="">New Password</label>
                        <input
                          type={type}
                          className="form-control"
                          placeholder="**********"
                          name="password"
                          id="password"
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
                        <i
                          className={`fa eyepassword2 fa-eye${
                            type === "password" ? "" : "-slash"
                          }`}
                          onClick={() => typeChange()}
                        ></i>
                        {errors?.password && (
                          <p className="form-error mt-1">
                            {errors?.password?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <label for="">Confirm New Password</label>
                        <input
                          type={type2}
                          className="form-control"
                          placeholder="**********"
                          name="confirmpassword"
                          id="confirmpassword"
                          {...register("confirmpassword", {
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

                        {errors?.confirmpassword && (
                          <p className="form-error mt-1">
                            {errors?.confirmpassword?.message}
                          </p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <button className="comman_btn" type="submit">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClinicianResetPassword;
