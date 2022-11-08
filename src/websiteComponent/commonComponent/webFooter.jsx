import React from "react";
import { Link } from "react-router-dom";

function WebFooter() {
  return (
    <>
      <footer class="footer_section bg-white">
        <div class="container">
          <div class="row mx-md-0 footer_top">
            <div class="col-lg-4 pe-lg-5 mb-lg-0 mb-md-5 mb-5">
              <div class="footer_box">
                <h2>Support</h2>
                <p>
                  Passport Journeys has a philanthropic arm that will support
                  charitable events and therapeutic support for under served
                  mother - daughter pairs through our non-profit, Mom + Me
                  Journey.
                </p>
                <Link
                  class="Buttn_comman Buttn-bg1 d-lg-flex d-md-inline-flex me-4"
                  to="/payment"
                >
                  Donate Now
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 d-flex justify-content-lg-center justify-content-md-start justify-content-start mb-md-0 mb-4">
              <div class="footer_box">
                <h2>Quick Links</h2>
                <ul class="footer-menus list-unstyled">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/team">Founder Info</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Connect</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="footer_box contact_box">
                <h2>Contact</h2>
                <p>
                  Keep up with our exciting startup journey through social media
                  - Passport Journeys.
                </p>
                <p>
                  <strong>Location:</strong> 5300 N Braeswood BLVD STE 4 - V711,
                  Houston, TX 77096
                </p>
                <div class="social_icon">
                  <a href="" target="_blank">
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
          <div class="row mx-0 coppy_right">
            <div class="col-12">
              <p class="mb-0">© 2022 Passport Journeys. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default WebFooter;
