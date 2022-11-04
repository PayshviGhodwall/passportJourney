import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import WebHeader from "./commonComponent/webHeader";
import OwlCarousel from "react-owl-carousel";
import WebFooter from "./commonComponent/webFooter";
import { getSubscriptionList } from "../apiServices/subscriptionHttpService/adminSubscriptionHttpService";
import { useForm } from "react-hook-form";
import { subscribeUs } from "../apiServices/adminHttpService/adminLoginHttpService";

function Index() {
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  const getSubscriptionInfo = async () => {
    const { data } = await getSubscriptionList();
    if (!data.error) {
      setSubscription(data.results.subscriptions);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    const response = await subscribeUs(data);
    if (!response.data.error) {
      document.getElementById("email").value = "";
      document.getElementById("first_name").value = "";
      document.getElementById("last_name").value = "";
      reset();
    }
  };

  return (
    <>
      {" "}
      <div className="web-body">
        <WebHeader />
        <section class="hero_section">
          <div class="container position-relative">
            <div class="row mx-0">
              <div class="col-lg-6 col-md-12 order-lg-0 order-md-1 order-1">
                <div class="hero_content">
                  <h1>
                    Every Mother-Daughter <br />
                    Pair Deserve a Beautiful <br />
                    Relationship
                  </h1>
                  <span>— Lacey Tezino, Founder</span>
                  <Link class="Buttn_comman Buttn-bg1" to="/contact-us">
                    Sign Up Today
                  </Link>
                </div>
              </div>
              <div class="col-12 d-lg-none d-md-block d-block text-center mb-md-5 mb-4">
                <img class="ipad_img" src="assets/img/banner_img.png" alt="" />
              </div>
            </div>
            <img class="banner_img" src="assets/img/banner_img.png" alt="" />
          </div>
        </section>
        <section class="mission_statement">
          <div class="container">
            <div class="row mx-md-0 align-items-center">
              <div class="col-md-6 mb-md-0 mb-4">
                <div class="mission_img">
                  <img src="assets/img/mission_img.png" alt="" />
                </div>
              </div>
              <div class="col-md-6 ps-md-4">
                <div class="mission_content ps-xl-5 ps-lg-4 ps-md-0">
                  <h2>Mission Statement</h2>
                  <p>
                    The mother-daughter relationship is one of the most
                    important connections in a woman’s life. But it can also be
                    one of the most difficult.
                  </p>
                  <p>
                    As mothers and daughters ourselves, we know there are times
                    when this relationship needs healing, bonding and growth.{" "}
                  </p>
                  <span>This is why we created Passport Journeys.</span>
                  <Link class="Buttn_comman Buttn-bg2" to="/contact-us">
                    Join Our Teletherapy Wishlists
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="pj-appdownload">
          <div class="container">
            <div class="row mx-md-0 justify-content-center">
              <div class="col-lg-8 col-md-10 mb-5">
                <div class="pj-appdownload-heading text-center">
                  <h2>Passport Journeys</h2>
                  <p>
                    a teletherapy app specific to the mother-daughter
                    relationship with video sessions and monthly activities led
                    by licensed clinicians to support your journey to a more
                    beautiful bond.{" "}
                  </p>
                  <div className="soon-banner">
                    <img src="assets/img/soon.png" alt="" />
                  </div>
                  <div class="download_btn">
                    <a
                      class="Buttn_comman Buttn-bg1 mx-md-2 mb-2"
                      href="javscript:;"
                    >
                      Download iOS App
                    </a>
                    <a
                      class="Buttn_comman Buttn-bg3 mx-md-2 mb-2"
                      href="javscript:;"
                    >
                      Download Android App
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-12 mb-lg-5  mb-0 pb-5">
                <OwlCarousel className="appdownload_slider owl-carousel">
                  <div class="item">
                    <img src="assets/img/Home Screen.png" alt="" />
                  </div>
                  <div class="item">
                    <img src="assets/img/screen_2.png" alt="" />
                  </div>
                  <div class="item">
                    <img src="assets/img/screen_3.png" alt="" />
                  </div>
                  <div class="item">
                    <img src="assets/img/screen_4.png" alt="" />
                  </div>
                  <div class="item adjust_height">
                    <img src="assets/img/screen_5.png" alt="" />
                  </div>
                </OwlCarousel>
              </div>
              <div class="col-12">
                <div class="row monthly_teletherapy">
                  <div class="col-5 width_adjust d-flex align-items-stretch">
                    <div class="teletherapy_content">
                      <h2>Mother-Daughter Monthly Teletherapy Journey</h2>
                      <p>
                        Below are items included in your monthly subscription
                      </p>
                      <div class="subscribe_cost">
                        <span>Subscription cost</span>
                        <h3>${subscription.plan_price}/Month</h3>
                      </div>
                      <ul class="list-unstyled mb-0 ul_design">
                        {subscription?.plan_features?.map((item, index) => (
                          <li>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                      <Link class="Buttn_comman Buttn-bg2" to="/contact-us">
                        Subscribe Now
                      </Link>
                    </div>
                  </div>
                  <div class="col px-xl-5 px-lg-4 px-md-4 border-start d-flex align-items-stretch">
                    <div class="row">
                      <div class="col-12">
                        <div class="teletherapy_boxes">
                          <span class="img_box">
                            <img
                              src="assets/img/live-video-sessions.png"
                              alt=""
                            />
                          </span>
                          <h3>Live Video Sessions</h3>
                          <p>
                            Bi-weekly Therapy Sessions with your assigned
                            licensed clinician through video meetings- 2 per
                            month
                          </p>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="teletherapy_boxes">
                          <span class="img_box">
                            <img
                              src="assets/img/journal-promotion.png"
                              alt=""
                            />
                          </span>
                          <h3>Journal Promots</h3>
                          <p>
                            Intimate journal prompts curated to pull out deep
                            throught to simulate growth and healing through
                            writing - 1 assigned per month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col px-xl-5 px-lg-4 px-md-4 border-start d-flex align-items-stretch">
                    <div class="row">
                      <div class="col-12">
                        <div class="teletherapy_boxes">
                          <span class="img_box">
                            <img
                              src="assets/img/prescribed-activities.png"
                              alt=""
                            />
                          </span>
                          <h3>Prescribed Activities</h3>
                          <p>
                            Throughtful activities in between video sessions to
                            promote intentional bonding in (in person and
                            virtual available) - 1 assigned per month
                          </p>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="teletherapy_boxes">
                          <span class="img_box">
                            <img src="assets/img/worksheets.png" alt="" />
                          </span>
                          <h3>Worksheets</h3>
                          <p>
                            Clinician selected homework to sharpen a particular
                            skill, based on your challenge areas - 1 assigned
                            per month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="therepy_launch">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12 therepy_launch_heading">
                <h2>How do you and your mother/daughter get started?</h2>
              </div>
              <div class="col-12">
                <div class="therepy_launch_outter">
                  <div class="therepy_launch_box">
                    <div class="therepy_img">
                      <img src="assets/img/img_1.png" alt="" />
                      <span>01</span>
                    </div>
                    <div class="therepy_content">
                      <p>
                        Mother and daughter both fill out a personal
                        questionnaire to help with therapist matching,
                        preferences and goals
                      </p>
                    </div>
                  </div>
                  <div class="therepy_launch_box">
                    <div class="therepy_img">
                      <img src="assets/img/img_2.png" alt="" />
                      <span>02</span>
                    </div>
                    <div class="therepy_content">
                      <p>
                        A relationship assistant will review the questionnaire
                        and connect with the pair to begin the journey
                      </p>
                    </div>
                  </div>
                  <div class="therepy_launch_box">
                    <div class="therepy_img">
                      <img src="assets/img/img_3.png" alt="" />
                      <span>03</span>
                    </div>
                    <div class="therepy_content">
                      <p>
                        A licensed clinician is assigned to the mother daughter
                        journey based on best fit
                      </p>
                    </div>
                  </div>
                  <div class="therepy_launch_box">
                    <div class="therepy_img">
                      <img src="assets/img/img_4.png" alt="" />
                      <span>04</span>
                    </div>
                    <div class="therepy_content">
                      <p>
                        Each therapy appointment is scheduled and conducted from
                        the app calendar & video platform (no in person
                        sessions)
                      </p>
                    </div>
                  </div>
                  <div class="therepy_launch_box">
                    <div class="therepy_img">
                      <img src="assets/img/img_5.png" alt="" />
                      <span>05</span>
                    </div>
                    <div class="therepy_content">
                      <p>
                        An activity and journal prompt are assigned after each
                        therapy appointment to the pair to track within the app
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="therepy_bottom text-center">
                  <Link class="Buttn_comman Buttn-bg1" to="/contact-us">
                    Join Our Therapy Pilot
                  </Link>
                  <p>Receive an email when the teletherapy version is live!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="subscribeer_sec">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12 subscribeer_heading text-center">
                <h2>Subscribe Us</h2>
                <p>
                  Sign up with your email address to receive news and updates.
                </p>
              </div>
              <div class="col-12">
                <form
                  class="subscribe_form row"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div class="form-group col-3 width_comman">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                      id="first_name"
                      name="first_name"
                      {...register("first_name", {
                        required: true,
                      })}
                    />
                    {errors?.first_name && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
                  </div>
                  <div class="form-group col-3 width_comman">
                    <input
                      type="text"
                      class="form-control"
                      id="last_name"
                      name="last_name"
                      placeholder="Last Name"
                      {...register("last_name", {
                        required: true,
                      })}
                    />
                    {errors?.last_name && (
                      <p className="form-error mt-2">This field is required</p>
                    )}
                  </div>
                  <div class="form-group col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email Address"
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
                      <p className="form-error mt-2">{errors.email.message}</p>
                    )}
                  </div>
                  <div class="form-group col-2 width_comman">
                    <button
                      class="Buttn_comman Buttn-bg2 border-0"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <WebFooter />
      </div>
    </>
  );
}

export default Index;
