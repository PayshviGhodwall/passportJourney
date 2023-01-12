import React, { useEffect, useState } from "react";
import { getContents } from "../apiServices/clinicianPanelHttpServices/supportHttpService/clinicianSupportHttpService";
import ClinicianHeader from "../clinicianComponent/commonComponent/clinicianHeader";
import ClinicianSidebar from "../clinicianComponent/commonComponent/clinicianSidebar";
import WebFooter from "./commonComponent/webFooter";
import WebHeader from "./commonComponent/webHeader";

function WebPrivacyPolicy() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getContentInfo();
  }, []);

  const getContentInfo = async () => {
    const { data } = await getContents({ type: "Policy" });
    if (!data.error) {
      setContent(data.results.contents[0].content.split("\\n").join(""));
    }
  };

  return (
    <>
      <div className="web-body">
        <WebHeader />

        <div className="row justify-content-center ">
          <div className="col-10 mb-4 mt-5">
            <div className="row justify-content-center ">
              <div className="col-auto">
                <h2 style={{ fontSize: "30px" }}>Privacy Policy</h2>
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
        <WebFooter />
      </div>
    </>
  );
}

export default WebPrivacyPolicy;
