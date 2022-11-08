import React from "react";
import { Link } from "react-router-dom";
import WebHeader from "./commonComponent/webHeader";
import WebFooter from "./commonComponent/webFooter";

function Team() {
  return (
    <>
      {" "}
      <div className="web-body">
        <WebHeader />
        <section class="hero_section team_hero">
          <div class="container position-relative">
            <div class="row mx-0">
              <div class="col-lg-6 col-md-12 order-lg-0 order-md-1 order-1">
                <div class="hero_content">
                  <h1>
                    “I wish that it didn’t take a terminal illness for my mother
                    and I to prioritize our bond.”
                  </h1>
                  <span>— Lacey Tezino, Founder</span>
                  <Link class="Buttn_comman Buttn-bg1" to="/contact-us">
                    Make Your Bond Stronger
                  </Link>
                </div>
              </div>
              <div class="col-12 d-lg-none d-md-block d-block text-center mb-md-5 mb-4">
                <img class="ipad_img" src="assets/img/team_bg.png" alt="" />
              </div>
            </div>
            <img class="banner_img" src="assets/img/team_bg.png" alt="" />
          </div>
        </section>
        <section class="team_about bg-white">
          <div class="container">
            <div class="row mx-md-0 align-items-center">
              <div class="col-md-5">
                <div class="team_about_img">
                  <img src="assets/img/lacey-tezino.png" alt="" />
                </div>
              </div>
              <div class="col-md-7">
                <div class="team_about_content">
                  <h2>Lacey Tezino</h2>
                  <span>Founder of Passport Journeys, LLC</span>
                  <p>
                    is an experienced technology leader with a passion for
                    promoting healthier mother-daughter relationships. Lacey
                    believes that technology can be used in beautiful ways to
                    enhance our lives and make mental health care more
                    accessible and convenient. She worked as the Director of IT
                    and Clinical Applications Manager for the Menninger Clinic,
                    one of the top 10 best psychiatric hospitals in the nation.
                    Lacey spent 3 years in Doha leading the digitization of
                    clinical documentation for the entire nation of Qatar, 8
                    hospitals and 23 clinics onto electronic health records. She
                    holds a Bachelors of Science in Biology and a Master’s
                    degree in healthcare administration. Lacey lives in Houston,
                    Texas with a beautiful family that names her the loving
                    wife, mother of three and caretaker for her 83 year old
                    grandmother. She has her hands full and pouring every
                    creative ounce into the success of Passport Journeys, as a
                    way to honor her own unique mother-daughter relationship.
                  </p>
                  <div class="social_icon">
                    <a href="mailto: laceytezino@passportjourneysapp.com">
                      <img src="assets/img/main_icon.png" alt="" />
                    </a>
                    <a
                      href="https://www.facebook.com/passportjourneysapp"
                      target="_blank"
                    >
                      <img src="assets/img/facebook_icon.png" alt="" />
                    </a>
                    <a
                      href="https://www.instagram.com/passportjourneys/?hl=en"
                      target="_blank"
                    >
                      <img src="assets/img/instagram_icon.png" alt="" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/passport-journeys-app/"
                      target="_blank"
                      header
                    >
                      <img src="assets/img/linkedin_icon.png" alt="" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@passportjourneysapp"
                      target="_blank"
                    >
                      <img src="assets/img/tik-tok.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="founding_team">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 founding_head mb-5">
                <h2>Founding Team Members</h2>
              </div>
              <div class="col-lg-3 col-md-4 mb-md-0 mb-5">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/member_1.png" alt="" />
                  </div>
                  <h3>Cheri Green</h3>
                  <span>Co- Founder</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 mb-md-0 mb-5">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/member_2.png" alt="" />
                  </div>
                  <h3>Dr. Sylvia Gonzalez Cruz</h3>
                  <span>Chief Medical Officer</span>
                </div>
              </div>
              <div class="col-lg-3 col-md-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/member_3.png" alt="" />
                  </div>
                  <h3>Karen Franko</h3>
                  <span>VP, Marketing & PR</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="advisory_board">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 founding_head mb-5 text-center">
                <h2>2022 Clinical Advisory Board</h2>
                <p>
                  Licensed clinicians have been onboarded to design and guide
                  the company with clinical best practices and evidence-based
                  research
                </p>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_1.png" alt="" />
                  </div>
                  <h3>Dr. Sylvia Gonzalez Cruz</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_2.png" alt="" />
                  </div>
                  <h3>Lynn Quackenbush</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_3.png" alt="" />
                  </div>
                  <h3>Angela Koreth</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_4.png" alt="" />
                  </div>
                  <h3>Ashley Reece</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_5.png" alt="" />
                  </div>
                  <h3>Adriana Martinex Crane</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_6.png" alt="" />
                  </div>
                  <h3>Candice Holloway</h3>
                </div>
              </div>
              <div class="col-md-3 col-6 mb-lg-5 mb-md-4 mb-4">
                <div class="founding_team_box text-center">
                  <div class="founding_img">
                    <img src="assets/img/advisory_7.png" alt="" />
                  </div>
                  <h3>Danielle Bowman</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="clinical_advisory">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12 clinical_head">
                <h2>Clinical Advisory Board</h2>
                <p>
                  Our mother-daughter teletherapy app is being thoughtfully
                  designed by 7 licensed clinicians who are guiding each
                  decision with years of experience.
                </p>
              </div>
              <div class="col-12">
                <div class="clinical_advisory_img">
                  <img src="assets/img/clinical-advisory.png" alt="" />
                </div>
                <div class="about_clinical">
                  <h3>“Behind every great woman... is another great woman.”</h3>
                  <span>— Kate Hodges</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="ourteam_brings">
          <div class="container">
            <div class="row mx-md-0">
              <div class="col-12 about_clinical">
                <h3>
                  “Our team Brings the perfect blend of technology, psychiatry,
                  Banking and Marketing!”
                </h3>
                <span>— Passport Journeys Founders</span>
              </div>
              <div class="col-12">
                <div class="clinical_advisory_img">
                  <img src="assets/img/our_team.png" alt="" />
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

export default Team;
