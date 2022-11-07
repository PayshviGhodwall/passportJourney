import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joinUs } from "../apiServices/adminHttpService/adminLoginHttpService";

function JoinOuTeam({ modalClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await joinUs(data);
    if (!response.data.error) {
      document.getElementById("email").value = "";
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";

      reset();
      modalClose();
    }
  };

  return (
    <>
      <form
        class="form_design row form_design_modal"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div class="form-group col-md-6">
          <label class="form_label" for="">
            First Name
          </label>
          <input
            type="text"
            class="form-control"
            id="first_name"
            name="first_name"
            placeholder="Enter Your First Name"
            {...register("first_name", {
              required: true,
            })}
          />
          {errors?.first_name && (
            <p className="form-error_modal ">This field is required</p>
          )}
        </div>
        <div class="form-group col-md-6">
          <label class="form_label" for="">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            id="last_name"
            name="last_name"
            placeholder="Enter Your Last Name"
            {...register("last_name", {
              required: true,
            })}
          />
          {errors?.last_name && (
            <p className="form-error_modal ">This field is required</p>
          )}
        </div>
        <div class="form-group col-md-6">
          <label class="form_label" for="">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Email Address"
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
            <p className="form-error_modal">{errors.email.message}</p>
          )}
        </div>

        <div class="form-group col-12 my-md-2 mt-2 mb-0 text-center">
          <button class="Buttn_comman Buttn-bg3" type="submit">
            Submit Now
          </button>
        </div>
      </form>
    </>
  );
}

export default JoinOuTeam;
