import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getContents,
  updateContent,
} from "../../apiServices/contentHttpService/admincontentHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import { stateFromHTML } from "draft-js-import-html";
import { stateToHTML } from "draft-js-export-html";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function EditContent() {
  const [content, setContent] = useState([]);
  const [editorPpState, setEditorPpState] = useState(null);
  const [editorTcState, setEditorTcState] = useState(null);
  const [editorAuState, setEditorAuState] = useState(null);

  useEffect(() => {
    getContentInfo();
  }, []);

  const getContentInfo = async () => {
    const { data } = await getContents();
    if (!data.error) {
      setContent(data.results.contents);

      const contentPpState = stateFromHTML(
        JSON.parse(data.results.contents[0]?.content)
      );
      const contentTcState = stateFromHTML(
        JSON.parse(data.results.contents[1]?.content)
      );
      const contentAuState = stateFromHTML(
        JSON.parse(data.results.contents[2]?.content)
      );

      console.log(contentPpState);

      setEditorPpState(EditorState.createWithContent(contentPpState));
      setEditorTcState(EditorState.createWithContent(contentTcState));
      setEditorAuState(EditorState.createWithContent(contentAuState));
    }
  };
  const updateContentInfo = async (id, index) => {
    let content;
    if (index === 0) {
      content = await JSON.stringify(
        stateToHTML(editorPpState.getCurrentContent())
      );
    } else if (index === 1) {
      content = await JSON.stringify(
        stateToHTML(editorTcState.getCurrentContent())
      );
    } else {
      content = await JSON.stringify(
        stateToHTML(editorAuState.getCurrentContent())
      );
    }

    let formData = {
      contentId: id,
      content: content,
    };
    const { data } = await updateContent(formData);
    if (!data.error) {
      await getContentInfo();
    }
  };

  const onEditorPPStateChange = async (editorPpState) => {
    await setEditorPpState(editorPpState);
  };

  const onEditorTCStateChange = async (editorTcState) => {
    await setEditorTcState(editorTcState);
  };

  const onEditorAUStateChange = async (editorAuState) => {
    await setEditorAuState(editorAuState);
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
                      onClick={() => updateContentInfo(item._id, index)}
                    >
                      Save{" "}
                    </Link>
                    {index === 0 ? (
                      <Editor
                        editorState={editorPpState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        wrapperStyle={{}}
                        editorStyle={{}}
                        toolbarStyle={{}}
                        onEditorStateChange={onEditorPPStateChange}
                      />
                    ) : index === 1 ? (
                      <Editor
                        editorState={editorTcState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        wrapperStyle={{}}
                        editorStyle={{}}
                        toolbarStyle={{}}
                        onEditorStateChange={onEditorTCStateChange}
                      />
                    ) : (
                      <Editor
                        editorState={editorAuState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        wrapperStyle={{}}
                        editorStyle={{}}
                        toolbarStyle={{}}
                        onEditorStateChange={onEditorAUStateChange}
                      />
                    )}
                    {/* <div class="form-group col-12">
                      <textarea
                        name="note"
                        id="note"
                        class="form-control"
                        rows={8}
                        defaultValue={item.content}
                        onChange={(e) => setContentValue(e.target.value)}
                      ></textarea>
                    </div> */}
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
