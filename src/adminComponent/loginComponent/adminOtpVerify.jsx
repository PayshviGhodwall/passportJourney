import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  forgotPassword,
  verifyOTP,
} from "../../apiServices/adminHttpService/adminLoginHttpService";
import OtpTimer from "otp-timer";

function AdminOtpVerify() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const otp4 = useWatch({ control, name: "otp4" });

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (otp4 && otp4.length > 0) {
      handleSubmit(onSubmit)();
    }
  }, [otp4, handleSubmit]);

  const onSubmit = async (data) => {
    let otp = Object.values(data);
    otp = otp.join("");

    const formData = {
      email: location.state.email,
      otp: otp,
    };

    const response = await verifyOTP(formData);
    if (!response.data.error) {
      navigate("/admin/reset-password", {
        state: { email: location.state.email },
      });
    }
  };
  const moveOnMax = (event, field, nextField) => {
    event = event || window.event;
    if (event.keyCode != 9) {
      if (field.value.length >= field.maxLength) {
        nextField.focus();
      }
    }
  };

  const resendOtp = async () => {
    const response = await forgotPassword({ email: location.state.email });
    if (!response.data.error) {
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
                    <h1>Verification</h1>
                    <p>Please enter the OTP received on your Email Address </p>
                  </div>
                  <div className="col-12">
                    <form className="row form-design">
                      <div className="form-group col-12 otp_input d-flex">
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="2"
                          name="otp1"
                          id="otp1"
                          {...register("otp1", { required: true })}
                          onKeyUp={(event) => {
                            moveOnMax(
                              event,
                              document.getElementById("otp1"),
                              document.getElementById("otp2")
                            );
                          }}
                        />
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="4"
                          name="otp2"
                          id="otp2"
                          {...register("otp2", { required: true })}
                          onKeyUp={(event) => {
                            moveOnMax(
                              event,
                              document.getElementById("otp2"),
                              document.getElementById("otp3")
                            );
                          }}
                        />
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="6"
                          name="otp3"
                          id="otp3"
                          {...register("otp3", { required: true })}
                          onKeyUp={(event) => {
                            moveOnMax(
                              event,
                              document.getElementById("otp3"),
                              document.getElementById("otp4")
                            );
                          }}
                        />
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="8"
                          name="otp4"
                          id="otp4"
                          {...register("otp4", { required: true })}
                        />
                      </div>
                      <div className="form-group col-12 text-center">
                        <OtpTimer
                          seconds={30}
                          minutes={0}
                          style={{ marginTop: "-100px" }}
                          resend={() => resendOtp()}
                        />
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

export default AdminOtpVerify;
