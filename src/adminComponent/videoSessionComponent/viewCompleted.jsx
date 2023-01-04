import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSessionData } from "../../apiServices/userHttpService/adminUserHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function ViewCompleted() {
  const [completedData, setCompletedData] = useState("");
  let { id } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const { data } = await getSessionData(id);
    if (!data.error) {
      console.log(data);
      setCompletedData(data.results.session);
    }
  };

  return (
    <>
      {" "}
      <div class="admin_main">
        <AdminSidebar />
        <div class="admin_main_inner">
          <AdminHeader />
          <div class="admin_panel_data height_adjust">
            <div class="row user-details-part upcoming_view justify-content-center">
              <div class="col-12 mb-4 main_heading text-center">
                <h1>Completed</h1>
              </div>
              <div class="col-12 design_outter_comman shadow mb-4">
                <div class="row comman_header justify-content-between">
                  <div class="col-auto">
                    <h2>Clinician Documentation</h2>
                  </div>
                </div>
                <div class="row p-4">
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Clinician feedback</span>
                      <div class="documentation_box_data">
                        <p>{completedData.feedback}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Focus of Session</span>
                      <div class="documentation_box_data">
                        <p>{completedData.focus_of_session}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Progress toward Goals</span>
                      <div class="documentation_box_data">
                        <p>{completedData.progress_toward_goals}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Safety Concerns</span>
                      <div class="documentation_box_data">
                        <p>{completedData.safety_concerns}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Plan</span>
                      <div class="documentation_box_data">
                        <p>{completedData.plan}</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr"> Completion Date</span>
                      <div class="documentation_box_data">
                        <p>
                          {moment(completedData.completion_date).format("LLL")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 mb-4 px-0 mt-3">
                    <div class="clinician_documentation_box border">
                      <span class="headerrr">Clinician Signature</span>

                      <div class="user_response_box me-3">
                        <img src={completedData.clinician_signature} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCompleted;
