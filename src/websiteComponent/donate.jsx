import React from "react";
import { Link } from "react-router-dom";
import WebHeader from "./commonComponent/webHeader";
import WebFooter from "./commonComponent/webFooter";

function Donate() {
  return (
    <>
      {" "}
      <div className="web-body">
        <WebHeader />
        <section class="donate_banner">
          <div class="container position-relative">
            <div class="row mx-md-0">
              <div class="col-lg-8 col-md-12 order-lg-0 order-md-1 order-1">
                <div class="donate_banner_content">
                  <span>Our Mission</span>
                  <h2>
                    To expand access to Teletherapy <br /> services for
                    mother-Daughter <br /> pairs who want help{" "}
                  </h2>
                  <a
                    target="_blank"
                    class="Buttn_comman Buttn-bg3"
                    href="https://www.passportjourneysapp.com/checkout/donate?donatePageId=62e21245f558fa6e59fba9fe"
                  >
                    Give Today
                  </a>
                </div>
              </div>
              <div class="col-4 d-lg-block d-md-none d-none"></div>
              <div class="col-12 d-lg-none d-md-block d-block text-center mb-md-5 mb-4">
                <img
                  class="Donate_ipad_img"
                  src="assets/img/smiling-woman-hug.png"
                  alt=""
                />
              </div>
              <div class="col-12 innetiative_top">
                <div class="row">
                  <div class="col-12">
                    <h2>Our To 3 Innetiative</h2>
                  </div>
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div class="innetiative_box">
                      <span class="innetiative_icon">
                        <img src="assets/img/live-video-sessions.png" alt="" />
                      </span>
                      <h3>Support</h3>
                      <p>
                        mother-daughter pairs who are ready for teletherapy
                        services and need financial help with payments.{" "}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div class="innetiative_box">
                      <span class="innetiative_icon">
                        <img
                          src="assets/img/prescribed-activities.png"
                          alt=""
                        />
                      </span>
                      <h3>Education</h3>
                      <p>
                        mother-daughter pairs on how to communicate, bond and
                        heal through quality learning materials.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-4 mb-md-0 mb-4">
                    <div class="innetiative_box">
                      <span class="innetiative_icon">
                        <img src="assets/img/journal-promotion.png" alt="" />
                      </span>
                      <h3>Create</h3>
                      <p>
                        safe and unique spaces for mother-daughter pairs to come
                        together and focus on the beauty of their relationship.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="donate_banner_img"
              src="assets/img/smiling-woman-hug.png"
              alt=""
            />
          </div>
        </section>

        <section class="our_innetiative">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12">
                <div class="innetiative_bottom">
                  <div class="innetiative_bottom_img">
                    <img
                      class="main_img"
                      src="assets/img/Innetiative.png"
                      alt=""
                    />
                    <img
                      class="badge_img"
                      src="assets/img/badge_img.png"
                      alt=""
                    />
                  </div>
                  <div class="innetiative_content">
                    <p>In Honor of my mother, this mission is personal. </p>
                    <h4>
                      Mom + Me Journey is a registered 501(c)3 nonprofit <br />{" "}
                      organization, tax ID # 88-1258936.
                    </h4>
                    <p>Copyright © 2022 All Rights Reserved Mom + Me Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WebFooter />
      </div>
    </>
  );
}

export default Donate;
