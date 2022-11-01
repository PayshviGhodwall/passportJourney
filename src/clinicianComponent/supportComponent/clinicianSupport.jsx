import React from "react";
import { useForm } from "react-hook-form";
import { createSupport } from "../../apiServices/clinicianPanelHttpServices/supportHttpService/clinicianSupportHttpService";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";

function ClinicianSupport() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    data.type = "Clinician";

    const response = await createSupport(data);
    if (!response.data.error) {
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("description").value = "";
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <ClinicianSidebar />
        <div className="admin_main_inner">
          <ClinicianHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row help_support justify-content-center">
              <div className="col-12 design_outter_comman shadow mb-4">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Help And Support Management</h2>
                  </div>
                </div>
                <form
                  className="form-design py-4 px-3 row align-items-end justify-content-between"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group mb-4 col-6">
                    <label for="">Email Address</label>
                    <input
                      type="text"
                      className="form-control"
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
                      <p className="form-error mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div className="form-group mb-4 col-6">
                    <label for="">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      {...register("subject", {
                        required: true,
                      })}
                    />
                    {errors?.subject && (
                      <p className="form-error mt-1">This field is required</p>
                    )}
                  </div>
                  <div className="form-group mb-4 col-12">
                    <label for="">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      {...register("description", {
                        required: true,
                      })}
                    ></textarea>
                    {errors?.description && (
                      <p className="form-error mt-1">This field is required</p>
                    )}
                  </div>
                  <div className="form-group col-12 text-center">
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
    </>
  );
}

export default ClinicianSupport;
