import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNotificationList } from "../../apiServices/clinicianPanelHttpServices/loginHttpService/clinicianLoginHttpService";
import ClinicianHeader from "./clinicianHeader";
import ClinicianSidebar from "./clinicianSidebar";

function ClinicianNotifications() {
  const [noti, setNoti] = useState([]);
  const [nav, setNav] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getNotiInfo();
    if (nav) {
      navigate(nav);
    }
  }, [nav]);

  const getNotiInfo = async () => {
    const { data } = await getNotificationList();
    if (!data.error) {
      for (const notification of data.results.notifications) {
        const date1 = new Date(notification.createdAt);
        const date2 = Date.now();
        const diffTime = Math.abs(date2 - date1);
        const diffsec = Math.ceil(diffTime / 1000);
        let diff = `${diffsec} seconds ago`;

        if (diffsec > 59) {
          const diffmin = Math.ceil(diffTime / (1000 * 60));

          diff = `${diffmin} minutes ago `;

          if (diffmin > 59) {
            const diffhrs = Math.ceil(diffTime / (1000 * 60 * 60));
            diff = `${diffhrs} hours ago `;

            if (diffhrs > 23) {
              const diffdays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
              diff = `${diffdays} days ago `;

              if (diffdays > 6) {
                const diffweek = Math.ceil(
                  diffTime / (1000 * 60 * 60 * 24 * 7)
                );
                diff = `${diffweek} weeks ago `;
              }
            }
          }
        }
        notification.time = diff;
      }

      setNoti(data.results.notifications);
    }
  };

  const redirectTo = async (type, s_id) => {
    console.log(type);
    if (type === "Update Profile") {
      setNav("/clinician/my-profile");
    } else if (type === "Clinician Session") {
      setNav(`/clinician/view-upcoming/${s_id}`);
    } else if (type === "Cancel Session User") {
      setNav(`/clinician/view-cancel/${s_id}`);
    } else if (type === "Cancel Session Clinician") {
      setNav(`/clinician/view-cancel/${s_id}`);
    } else if (type === "Reschedule Session User") {
      setNav(`/clinician/view-upcoming/${s_id}`);
    } else if (type === "Response") {
      setNav(`/clinician/view-complete/${s_id}`);
    } else if (type === "Journal Response") {
      setNav(`/clinician/view-complete/${s_id}`);
    } else if (type === "Worksheet Response") {
      setNav(`/clinician/view-complete/${s_id}`);
    } else {
      setNav("/admin/dashboard");
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <ClinicianSidebar />
        <div className="admin_main_inner">
          <ClinicianHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row notification_page justify-content-center">
              <div className="col-12">
                <div className="row">
                  <div className="col-12 design_outter_comman recent_orders shadow">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Notifications</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 p-5 pb-4">
                        {noti.map((item, index) => (
                          <Link
                            to=""
                            onClick={() => redirectTo(item.type, item.id)}
                            className="row notification-box shadow mb-4"
                          >
                            <div className="col-auto">
                              <div className="notification_icons">
                                <i className="fas fa-bell"></i>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>{item.description}</h2>
                                <span className="">{item.time}</span>
                                <p>
                                  {moment(item.createdAt).format("DD MMM yy")}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
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

export default ClinicianNotifications;
