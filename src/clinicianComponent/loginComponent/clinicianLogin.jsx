import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { clinicianLogin } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";

function ClinicianLogin() {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token-clinician")) {
      navigate("/clinician/dashboard");
    }
  }, []);

  const onSubmit = async (data) => {
    console.log(data);

    data.time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const response = await clinicianLogin(data);
    if (!response.data.error) {
      navigate("/clinician/dashboard");
    }
  };

  const typeChange = () => {
    if (type === "password") setType("text");
    else {
      setType("password");
    }
  };

  const getPasswordValue = (value) => {
    console.log(value);
    setPassword(value);
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
                    <h1>Login for Clinician</h1>
                    <p>Please enter your email and password</p>
                  </div>
                  <div className="col-12">
                    <form
                      className="row form-design"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <div className="form-group col-12">
                        <label for="">User Name</label>
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
                        <label for="">Password</label>
                        <input
                          type={type}
                          className="form-control"
                          placeholder="**********"
                          name="password"
                          id="password"
                          {...register("password", {
                            required: true,
                            onChange: (e) => {
                              getPasswordValue(e.target.value);
                            },
                          })}
                        />

                        {password ? (
                          <i
                            className={`fa eyepassword2 fa-eye${
                              type === "password" ? "" : "-slash"
                            }`}
                            onClick={() => typeChange()}
                          ></i>
                        ) : (
                          ""
                        )}

                        {errors?.password && (
                          <p className="form-error mt-1">
                            This field is required
                          </p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <Link
                          className="for_got"
                          to="/clinician/forgot-password"
                        >
                          Forgot Password?
                        </Link>
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

export default ClinicianLogin;
