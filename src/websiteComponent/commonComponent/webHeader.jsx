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
                    <a href="javascript:;">
                      <img src="assets/img/main_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="assets/img/facebook_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="assets/img/instagram_icon.png" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <img src="assets/img/linkedin_icon.png" alt="" />
                    </a>
                  </li>
                </ul>
                <div id="search_header" class="search_header position-relative">
                  <div class="search-button">
                    <a
                      class="search_btn search-toggle"
                      data-selector="#search_header"
                      href="javascript:;"
                    >
                      <img src="assets/img/search_icon.png" alt="" />
                    </a>
                  </div>
                  <form action="" class="search-box">
                    <input
                      type="text"
                      class="text search-input"
                      placeholder="Type here to search..."
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row header_bottom">
          <div class="col-12">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-auto">
                  <Link class="header_logo" to="/home">
                    <img src="assets/img/logo.png" alt="" />
                  </Link>
                </div>
                <div class="col d-md-flex d-none align-items-center justify-content-end">
                  <ul class="list-unstyled header_menus mb-0">
                    <li>
                      <Link
                        class={
                          window.location.href.includes("/home") ? "active" : ""
                        }
                        to="/home"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        class={
                          window.location.href.includes("/Donate")
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
            <Link to="/home">Home</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/contact-us">Contact</Link>
          </div>
          <Link class="Buttn_comman Buttn-bg1 mt-4" to="">
            Join The Wait List
          </Link>
        </div>
      </div>
    </>
  );
}

export default WebHeader;
