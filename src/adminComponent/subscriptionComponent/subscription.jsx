import React, { useEffect, useState } from "react";
import { getSubscriptionList } from "../../apiServices/subscriptionHttpService/adminSubscriptionHttpService";
import AdminHeader from "../commonComponent/adminHeader";
import AdminSidebar from "../commonComponent/adminSidebar";
import EditSubscription from "./editSubscription";

function Subscription() {
  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  const getSubscriptionInfo = async () => {
    const { data } = await getSubscriptionList();
    if (!data.error) {
      setSubscription(data.results.subscriptions);
    }
  };

  return (
    <>
      {" "}
      <div className="admin_main">
        <AdminSidebar />
        <div className="admin_main_inner">
          <AdminHeader />
          <div className="admin_panel_data height_adjust">
            <div className="row subscription-management justify-content-center">
              <div className="col-12">
                <div className="row mx-0">
                  <div className="col-12 design_outter_comman shadow mb-4">
                    <div className="row comman_header justify-content-between">
                      <div className="col-auto">
                        <h2>Subscription Plan Management </h2>
                      </div>
                      <div className="col-auto">
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          className="edit_form"
                          href="javascript:;"
                        >
                          <i className="fas fa-edit"></i>
                        </a>
                      </div>
                    </div>
                    <form
                      className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                      action=""
                    >
                      <div className="form-group col-4">
                        <label for="">Plan Name</label>
                        <input
                          type="text"
                          className="form-control"
                          value={subscription.plan_name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group col-4">
                        <label for="">Plan Price</label>
                        <input
                          type="text"
                          className="form-control"
                          value={subscription.plan_price}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group col-4">
                        <label for="">Plan Duration (Month)</label>
                        <input
                          type="text"
                          className="form-control"
                          value={subscription.plan_duration}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="form-group mb-0 col-12">
                        <label for="">Features</label>
                        <ul className="list-circle">
                          {subscription?.plan_features?.map((item, index) => (
                            <li>
                              <p className="text-capitalize">{item}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade comman_modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <EditSubscription listing={getSubscriptionInfo} />
      </div>
    </>
  );
}

export default Subscription;
