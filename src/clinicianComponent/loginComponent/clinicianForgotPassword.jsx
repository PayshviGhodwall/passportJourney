import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { forgotPassword } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";

function ClinicianForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await forgotPassword(data);
    if (!response.data.error) {
      navigate("/clinician/otp-verification", { state: { email: data.email } });
    }
  };
  return (
    <section className="login_page">
      <div className="container-fluid px-0">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="login_page_form shadow">
              <div className="row">
                <div className="col-12 formheader mb-4">
                  <img src="../assets/img/logo.png" alt="" />
                  <h1>Forgot Password</h1>
                  <p>
                    Please enter your registered Email Address to receive the
                    OTP
                  </p>
                </div>
                <div className="col-12">
                  <form
                    className="row form-design"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="form-group col-12">
                      <label for="">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User@gmail.com"
                        name="email"
                        id="email"
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
  );
}

export default ClinicianForgotPassword;
