import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { donate } from "../apiServices/adminHttpService/adminLoginHttpService";

function Payment() {
  const [amount, setAmount] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await donate(data);
    if (!response.data.error) {
      setTimeout(() => {
        window.open(response.data.results.url, "_blank");
      });

      // const link = document.createElement("a");
      // link.href = response.data.results.url;
      // link.target = "_blank";
      // link.click();
    }
  };
  return (
    <>
      <div style={{ background: "#f6f6f6" }}>
        <header
          className="
        checkout-tweak-background-color
        checkout-tweak-header-border
    "
        >
          <nav className="checkout-tweak-header-color">
            <div className="AiCODYSRCgkxektsMFTR">
              <h1 className="B1aoEhQo0hiNCSQoeO2u _1yk6zYseVQsUA93TD_G">
                <a className="SCUfohLNxGnwu5rf9k5Y checkout-tweak-overlay-logo">
                  <span className="rgFsoBYBYwUAZxal0KWr checkout-tweak-site-title-color">
                    Passport Journeys: MOM + ME JOURNEY{" "}
                  </span>
                </a>
              </h1>
            </div>
          </nav>
        </header>
        <div class="payment__card mt-4">
          <div class="payment__body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-group payment_group">
                <label for="">Your Email</label>
                <input
                  placeholder="Email Address"
                  type="text"
                  class="form-control "
                  id="email"
                  name="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address",
                    },
                  })}
                />

                {errors?.email && (
                  <p className="form-error mt-1">{errors.email.message}</p>
                )}

                <p>
                  You'll receive receipts and notifications at this email
                  address.
                </p>
              </div>
              <div class="form-group payment_group mt-3">
                <label for="" className="mb-0">
                  Your Contribution
                </label>
                <p className="my-1">
                  Our mission is to expand access to teletherapy services to
                  mother-daughter pairs who want help today. Your donations will
                  allow us to provide charity sessions with licensed clinicians
                  to those pairs with financial hardships.
                </p>
                <div className="payment_radio mt-3">
                  <p>
                    <input
                      type="radio"
                      id="test1"
                      name="amount"
                      value={25.0}
                      {...register("amount", {
                        required: true,
                      })}
                    />

                    <label for="test1">$25.00</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="test2"
                      name="amount"
                      value={50.0}
                      {...register("amount", {
                        required: true,
                      })}
                    />
                    <label for="test2">$50.00</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="test3"
                      name="amount"
                      value={100.0}
                      {...register("amount", {
                        required: true,
                      })}
                    />
                    <label for="test3">$100.00</label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="test4"
                      name="amount"
                      value={220.0}
                      {...register("amount", {
                        required: true,
                      })}
                    />
                    <label for="test4">
                      $220.00 (A full month of therapy for 1 mother-daughter
                      pair )
                    </label>
                  </p>
                  <p>
                    <input
                      type="radio"
                      id="test5"
                      name="amount"
                      value={amount}
                      {...register("amount", {
                        required: true,
                      })}
                    />
                    <label for="test5">
                      <div class="form-group payment_group">
                        <input
                          placeholder="Other Amount"
                          type="text"
                          class="form-control "
                          style={{ width: "55%" }}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                    </label>
                  </p>
                  {errors?.amount && (
                    <p className="form-error">This field is required</p>
                  )}
                </div>
                <div class="row">
                  <div class="form-group col-12 text-center my-3 ">
                    <button class="payment__btn" type="submit">
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
