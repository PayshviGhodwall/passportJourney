import React from "react";
import { Link } from "react-router-dom";

function WebHeader() {
  return (
    <>
      <header class="header_main">
        <div class="row header_top bg-1">
          <div class="col-12">
            <div class="container">
              <div class="top_header_inner">
                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="mailto: laceytezino@passportjourneysapp.com">
                      <img src="assets/img/main_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/passportjourneysapp"
                      target="_blank"
                    >
                      <img src="assets/img/facebook_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/passportjourneys/?hl=en"
                      target="_blank"
                    >
                      <img src="assets/img/instagram_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/passport-journeys-app/"
                      target="_blank"
                      header
                    >
                      <img src="assets/img/linkedin_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@passportjourneysapp"
                      target="_blank"
                    >
                      <img src="assets/img/tik-tok (1).png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row header_bottom">
          <div class="col-12">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-auto">
                  <Link class="header_logo" to="/">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
                <div class="col d-md-flex d-none align-items-center justify-content-end">
                  <ul class="list-unstyled header_menus mb-0">
                    <li>
                      <Link
                        class={
                          window.location.href.split("/")[3] === ""
                            ? "active"
                            : ""
                        }
                        to="/"
                      >
                        Home
                      </Link>
                      {console.log(window.location.href.split("/"))}
                    </li>
                    <li>
                      <Link
                        class={
                          window.location.href.includes("/donate")
                            ? "active"
                            : ""
                        }
                        to="/donate"
                      >
                        Donate
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={
                          window.location.href.includes("/team") ? "active" : ""
                        }
                        to="/team"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={
                          window.location.href.includes("/contact-us")
                            ? "active"
                            : ""
                        }
                        to="/contact-us"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <Link
                    class={
                      window.location.href.includes("/contact-us")
                        ? "active header_btn"
                        : " header_btn"
                    }
                    to="/contact-us"
                  >
                    Join The Wait List
                  </Link>
                </div>
                <div class="col d-md-none d-block mobile_menus text-end">
                  <a
                    class="btn btn-primary"
                    data-bs-toggle="offcanvas"
                    href="#offcanvasExample"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    <i class="far fa-bars"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">
            <a class="header_logo" href="index.html">
              <img src="assets/img/logo.png" alt="" />
            </a>
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body text-center">
          <div class="menus_mobiinner">
            <Link to="/">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <Link class="Buttn_comman Buttn-bg1 mt-4" to="/contact-us">
            Join The Wait List
          </Link>
        </div>
      </div>
    </>
  );
}

export default WebHeader;
