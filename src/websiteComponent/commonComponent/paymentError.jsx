import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { success } from "../../apiServices/adminHttpService/adminLoginHttpService";
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function PaymentError() {
  useEffect(() => {
    payment();
  }, []);

  const payment = async () => {
    const formData = {
      email: params.email,
      amount: params.amount,
    };
    const { data } = await success(formData);
    if (!data.error) {
    }
  };
  return (
    <>
      <div class="fresh_trader_main">
        <div class="buyer-container">
          <div class="trader_main_inner">
            <div class="row w-100 align-items-center">
              <div
                className="modal fade settings_section show px-0 "
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-modal="true"
                style={{
                  display: "block",
                  backgroundColor: "rgba(0, 0, 0, .5)",
                }}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div class="row">
                        <div class="modalbox error col-12 center animate">
                          <div class="icon">
                            <span class="glyphicon glyphicon-thumbs-down"></span>
                          </div>

                          <h1 className="my-3">Oh no!</h1>
                          <p>
                            Oops! Something went wrong,
                            <br /> you should try again.
                          </p>
                          <Link to="/payment" class="redo btn my-3">
                            Try again
                          </Link>
                          <span class="change"></span>
                        </div>
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

export default PaymentError;
