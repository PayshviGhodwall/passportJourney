import React, { useEffect, useState } from "react";
import AdminHeader from "../../adminComponent/commonComponent/adminHeader";

function UnAuth() {
  return (
    <>
      <AdminHeader />

      <div class="row d-flex justify-content-center align-items-center unAuth">
        <div class="col-md-4 col-12">
          <div class="add_business_box box_design">
            <div class="row">
              <div class="col-12 text-center">
                <i class="fa fa-frown-o sad" aria-hidden="true"></i>
                <p className="sad_heading">
                  {" "}
                  Oops! You are not authorized to view this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnAuth;
