import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../apiServices/adminHttpService/adminLoginHttpService";

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await adminLogin(data);
    if (!response.data.error) {
      navigate("/admin/dashboard");
    }
  };

  return (
    <>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4">
                    <img src="../assets/img/logo.png" alt="" />
                    <h1>Login for Admin Panel</h1>
                    <p>Please enter your email and password</p>
                  </div>

                  <form
                    className="row form-design"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="col-12">
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
                          type="password"
                          className="form-control"
                          placeholder="**********"
                          name="password"
                          id="password"
                          {...register("password", { required: true })}
                        />

                        {errors?.password && (
                          <p className="form-error">This field is required</p>
                        )}
                      </div>
                      <div className="form-group col-12">
                        <Link className="for_got" to="/admin/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                      <div className="form-group col-12">
                        <button className="comman_btn" to="" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
