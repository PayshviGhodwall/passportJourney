import React, { useEffect, useState } from "react";
import { getContents } from "../../apiServices/clinicianPanelHttpServices/supportHttpService/clinicianSupportHttpService";
import ClinicianHeader from "../commonComponent/clinicianHeader";
import ClinicianSidebar from "../commonComponent/clinicianSidebar";

function ClinicianTermConditions() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getContentInfo();
  }, []);

  const getContentInfo = async () => {
    const { data } = await getContents({ type: "Condition" });
    if (!data.error) {
      setContent(data.results.contents[0].content.split("\\n").join(""));
    }
  };

  return (
    <>
      <div className="admin_main">
        <ClinicianSidebar />
        <div className="admin_main_inner">
          <ClinicianHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row help_support justify-content-center">
              <div className="col-12 design_outter_comman shadow mb-4">
                <div className="row comman_header justify-content-between">
                  <div className="col-auto">
                    <h2>Terms & Conditions</h2>
                  </div>
                </div>
                <div className="row mx-1">
                  <div className="col-12 all_page_text py-4">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: content.slice(1, content.length - 1),
                      }}
                    ></p>
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

export default ClinicianTermConditions;
