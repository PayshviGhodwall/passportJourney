import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  getSubscriptionList,
  updateSubscription,
} from "../../apiServices/subscriptionHttpService/adminSubscriptionHttpService";

function EditSubscription({ listing }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [subscription, setSubscription] = useState("");

  useEffect(() => {
    getSubscriptionInfo();
  }, []);

  const getSubscriptionInfo = async () => {
    const { data } = await getSubscriptionList();
    if (!data.error) {
      setSubscription(data.results.subscriptions);
      let defaultValues = {};
      defaultValues.plan_name = data.results.subscriptions.plan_name;
      defaultValues.plan_price = data.results.subscriptions.plan_price;
      defaultValues.plan_duration = data.results.subscriptions.plan_duration;

      reset({ ...defaultValues });
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    if (
      !data.features0 ||
      !data.features1 ||
      !data.features2 ||
      !data.features3
    ) {
      toast.error("Please add all features");
      return;
    }
    const features = [
      data.features0,
      data.features1,
      data.features2,
      data.features3,
    ];

    data.plan_features = features;

    const response = await updateSubscription(data);
    if (!response.data.error) {
      const button = document.getElementById("close");
      button.click();
      await listing();
    }
  };

  return (
    <>
      {" "}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Edit Subscription Plan
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="close"
            ></button>
          </div>
          <div className="modal-body py-4 px-4">
            <form
              className="row form-design align-items-end px-2 py-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form-group mb-3 col-6">
                <label for="">Plan Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="plan_name"
                  id="plan_name"
                  {...register("plan_name", { required: true })}
                />

                {errors?.plan_name && (
                  <p className="form-error mt-1">This field is required</p>
                )}
              </div>
              <div className="form-group mb-3 col-6">
                <label for="">Plan Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="plan_price"
                  id="plan_price"
                  {...register("plan_price", { required: true })}
                />

                {errors?.plan_price && (
                  <p className="form-error mt-1">This field is required</p>
                )}
              </div>
              <div className="form-group mb-0">
                <label for="" className="mb-0">
                  Features{" "}
                </label>
              </div>

              {subscription?.plan_features?.map((item, index) => {
                return (
                  <div className="form-group mb-3 col-6">
                    <input
                      type="text"
                      className={
                        index === 0 ? "form-control mt-0" : "form-control mt-3"
                      }
                      name={`features${index}`}
                      id={`features${index}`}
                      defaultValue={item}
                      {...register(`features${index}`, {
                        required: true,
                      })}
                    />
                  </div>
                );
              })}

              {/* {errors?.plan_duration && (
                  <p className="form-error mt-1">This field is required</p>
                )} */}

              <div className="form-group mb-0 mt-3 col-12 text-center">
                <button className="comman_btn" type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditSubscription;
