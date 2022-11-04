import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getContents } from "../../apiServices/contentHttpService/admincontentHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function ContentManagement() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getContentInfo();
  }, []);

  const getContentInfo = async () => {
    const { data } = await getContents();
    if (!data.error) {
      setContent(data.results.contents);
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <AdminSidebar />{" "}
        <div className="admin_main_inner">
          <AdminHeader />{" "}
          <div className="admin_panel_data height_adjust">
            <div className="row content_management justify-content-center">
              {content.map((item, index) => {
                item.content = item.content.split("\\n").join("");
                {
                  console.log(item.content);
                }
                return (
                  <div className="col-12 mb-5">
                    <div className="row content_management_box">
                      {item.type === "Policy" ? (
                        <h2>Privacy Policies</h2>
                      ) : item.type === "Condition" ? (
                        <h2>Terms & Condition</h2>
                      ) : item.type === "About Us" ? (
                        <h2>About Us</h2>
                      ) : (
                        ""
                      )}
                      <Link
                        className="edit_content_btn comman_btn"
                        to="/admin/edit-content-management"
                      >
                        <i className="far fa-edit me-2"></i>Edit
                      </Link>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.content.slice(
                            1,
                            item.content.length - 1
                          ),
                        }}
                      ></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentManagement;
