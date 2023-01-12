import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNotificationList } from "../../apiServices/adminHttpService/adminLoginHttpService";
import AdminHeader from "./adminHeader";
import AdminSidebar from "./adminSidebar";

function Notifications() {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    getNotiInfo();
  }, []);

  const getNotiInfo = async () => {
    const { data } = await getNotificationList();
    if (!data.error) {
      for (const notification of data.results.users) {
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

      setNoti(data.results.users);
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <AdminSidebar />{" "}
        <div className="admin_main_inner">
          <AdminHeader />
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
                            to={`/admin/user-details/${item._id}`}
                            className="row notification-box shadow mb-4"
                          >
                            <div className="col-auto">
                              <div className="notification_icons">
                                <i className="fas fa-bell"></i>
                              </div>
                            </div>
                            <div className="col">
                              <div className="notification-box-content">
                                <h2>{item.full_name} created a new account</h2>
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

export default Notifications;
