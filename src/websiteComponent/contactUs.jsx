import React, { useState } from "react";
import { Link } from "react-router-dom";
import WebHeader from "./commonComponent/webHeader";
import WebFooter from "./commonComponent/webFooter";
import { useForm } from "react-hook-form";
import { contactUs } from "../apiServices/adminHttpService/adminLoginHttpService";
import JoinOuTeam from "./joinOurTeam";

function ContactUs() {
  const [int, setInt] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    data.isInterested = int;

    const response = await contactUs(data);
    if (!response.data.error) {
      document.getElementById("email").value = "";
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      document.querySelector('input[name="v3"]:checked').checked = "";

      setInt("");
      reset();
    }
  };

  return (
    <>
      {" "}
      <div className="web-body">
        <WebHeader />
        <section class="contact_us">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12 comman_heading_box">
                <span>Contact</span>
                <h2>Lets Connect</h2>
              </div>
              <div class="col-12">
                <form class="form_design row" onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-group col-12">
                    <p>
                      Please fill out your information below and a member <br />{" "}
                      of our Passport Journeys team will contact you.
                    </p>
                  </div>
                  <div class="form-group col-md-6">
                    <label class="form_label" for="">
                      Are you interested in participating in our Teletherapy
                      Pilot?
                    </label>
                    <div class="outer_check">
                      <div class="checkbox_main">
                        <input
                          type="radio"
                          id="v1"
                          name="v3"
                          class="d-none"
                          onChange={() => setInt(true)}
                        />
                        <label for="v1">
                          <div class="btns_check">Yes</div>
                        </label>
                      </div>
                      <div class="checkbox_main">
                        <input
                          type="radio"
                          id="v2"
                          name="v3"
                          class="d-none"
                          onChange={() => setInt(false)}
                        />
                        <label for="v2">
                          <div class="btns_check">No</div>
                        </label>
                      </div>
                    </div>
                  </div>
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
                      <p className="form-error mt-2">This field is required</p>
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
                      <p className="form-error mt-2">This field is required</p>
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
                      <p className="form-error mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div class="form-group col-12 mt-md-4 mt-2 mb-0">
                    <button class="Buttn_comman Buttn-bg3" type="submit">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="contact_team">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12">
                <div class="contact_team_content">
                  <h2>Opportunities </h2>
                  <p>
                    We are actively recruiting Licensed Clinicians who meet the
                    following criteria:{" "}
                    <ul>
                      <li>
                        Masters Level Clinicians (LCSW, LPC, LMFT) or
                        Psychologists
                      </li>
                      <li>Independently licensed in the state of Texas </li>
                      <li>
                        Versed in Systems Theory, Attachment Theory, and Trauma
                        Informed care{" "}
                      </li>
                      <li>
                        Experience working with diverse patient populations{" "}
                      </li>

                      <li>Independently licensed for at least 2 years. </li>
                      <li>
                        Additional LCDC certification or expertise a bonus{" "}
                      </li>
                    </ul>
                  </p>
                  <Link
                    class="Buttn_comman Buttn-bg1"
                    to=""
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WebFooter />
      </div>
      <div
        class="modal fade comman_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Join Our Team
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close"
              ></button>
            </div>
            <div class="modal-body py-4 px-4">
              <JoinOuTeam
                modalClose={() => document.getElementById("close").click()}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
