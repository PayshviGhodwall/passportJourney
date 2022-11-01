import React, { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { verifyOTP } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";

function ClinicianOtpVerify() {
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
      navigate("/clinician/reset-password", {
        state: { email: location.state.email },
      });
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
                    <h1>Verification</h1>
                    <p>Please enter the OTP received on your Email Address </p>
                  </div>
                  <div className="col-12">
                    <form className="row form-design" action="">
                      <div className="form-group col-12 otp_input d-flex">
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="2"
                          name="otp1"
                          id="otp1"
                          {...register("otp1", { required: true })}
                        />
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="4"
                          name="otp2"
                          id="otp2"
                          {...register("otp2", { required: true })}
                        />
                        <input
                          type="number"
                          className="form-control me-3 px-1 text-center"
                          maxlength="1"
                          placeholder="6"
                          name="otp3"
                          id="otp3"
                          {...register("otp3", { required: true })}
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
                        <span className="count_Sec">00:30</span>
                      </div>
                      <div className="form-group col-12 text-center">
                        <label className="text-center" for="">
                          Didn't received the OTP?{" "}
                          <a href="javscript:;">Request again</a>
                        </label>
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

export default ClinicianOtpVerify;
