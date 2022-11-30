import React, { useEffect, useState } from "react";

function PaymentErrorSubscription() {
  useEffect(() => {}, []);

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

export default PaymentErrorSubscription;
