import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getContents,
  updateContent,
} from "../../apiServices/contentHttpService/admincontentHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";

function EditContent() {
  const [content, setContent] = useState([]);
  const [contentValue, setContentValue] = useState("");

  useEffect(() => {
    getContentInfo();
  }, []);

  const getContentInfo = async () => {
    const { data } = await getContents();
    if (!data.error) {
      setContent(data.results.contents);
    }
  };
  const updateContentInfo = async (id) => {
    let formData = {
      contentId: id,
      content: contentValue,
    };
    const { data } = await updateContent(formData);
    if (!data.error) {
      await getContentInfo();
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
              {content.map((item, index) => (
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
                    <a className="edit_content_btn comman_btn" href="">
                      Save
                    </a>
                    <Link
                      className="edit_content_btn comman_btn"
                      to=""
                      onClick={() => updateContentInfo(item._id)}
                    >
                      Save{" "}
                    </Link>

                    <div class="form-group col-12">
                      <textarea
                        name="note"
                        id="note"
                        class="form-control"
                        rows={8}
                        defaultValue={item.content}
                        onChange={(e) => setContentValue(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditContent;
