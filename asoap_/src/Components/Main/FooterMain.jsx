import React from "react";
import { Link } from "react-router-dom";

function FooterMain() {
  return (
    <div className=" text-white" style={{ backgroundColor: "#252525" }}>
      <div className="mb-2"> &nbsp;</div>
      <div className=" text-white p-4" style={{ backgroundColor: "#252525" }}>
        <footer className="footer-07">
          <div className="">
            <div className="row justify-content-center">
              <div className="row  text-start">
                <div className="col-5 m-1">
                  <h6 className="mb-3">Subscribe to Aesop communications</h6>
                  <div className=" card border-1 rounded mb-3"></div>{" "}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div
                      className=" border-1 p-1 rounded mt-2 d-flex justify-content-between"
                      style={{
                        border: "3px solid white",
                        width: "100%",
                        height: "",
                      }}
                    >
                      <input
                        className="bg-dark border-0"
                        placeholder="Email Address"
                        style={{
                          width: "100%",
                          "::placeholder": {
                            color: "white",
                            fontWeight: "bold",
                          },
                        }}
                      />

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-start">
                    <input type="checkbox" className="mt-3" />
                    <label
                      for="vehicle1"
                      className="p-2 text-start"
                      style={{ width: "90%" }}
                    >
                      Subscribe to receive communications from Aesop. By
                      subscribing, you confirm you have read and understood our
                      <Link className="text-white">&nbsp;privacy policy.</Link>
                    </label>
                    <br></br>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3">Orders and support</h6>
                  <div className=" card border-1"></div>{" "}
                  <div className="mt-4">
                    <p className="mt-2 mb-3">
                      Contact us{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      FAQs{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      Shipping{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      Returns{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">Order history </p>
                    <p className="mt-2 mb-3">Terms and conditions</p>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3">Services</h6>
                  <div className=" card border-1"></div>
                  <div className="mt-4">
                    <p className="mt-2 mb-3">Live assistance</p>
                    <p className="mt-2 mb-3">Corporate gifts </p>
                    <p className="mt-2 mb-3">Facial Appointments</p>
                    <p className="mt-2 mb-3">Click and Collect</p>
                    <p className="mt-2 mb-3">Video consultation</p>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3">Location preferences</h6>
                  <div className=" card border-1"></div>
                  <div className="mt-4">
                    <p className="mt-2 mb-3">Shipping:</p>
                    <Link className=" text-white mt-2 mb-3">
                      Hong Kong SAR, China{" "}
                    </Link>
                    <p className="mt-2 mb-3"></p>
                    <p className=" mb-3 mt-4 fw-bold">Language:</p>
                    <Link className=" text-white mt-2 mb-3">English</Link>
                    <p className="mt-1 mb-3">繁體中文</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-5 ">
              <div className="row  text-start">
                <div className="col-5 m-1">
                  <h6 className="mb-3">Sustainability</h6>
                  <div className=" card border-1 rounded"></div>{" "}
                  <div className="d-flex align-items-start mt-3">
                    All Aesop products are vegan, and we do not test our
                    formulations or ingredients on animals. We are Leaping Bunny
                    approved and a Certified B Corporation. Learn more
                    <br></br>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3">About</h6>
                  <div className=" card border-1"></div>{" "}
                  <div className="mt-4">
                    <p className="mt-2 mb-3">Our story</p>
                    <p className="mt-2 mb-3">Foundation</p>
                    <p className="mt-2 mb-3">Careers</p>
                    <p className="mt-2 mb-3">Privacy policy</p>
                    <p className="mt-2 mb-3">Accessibility </p>
                    <p className="mt-2 mb-3">Cookie Policy</p>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3">Social media</h6>
                  <div className=" card border-1"></div>
                  <div className="mt-4">
                    <p className="mt-2 mb-3">
                      Instagram{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      Twitter{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      LinkedIn{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      WeChat{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                    <p className="mt-2 mb-3">
                      Weibo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
                <div className="col m-1">
                  <h6 className="mb-3"></h6>
                  {/* <div className=" card border-1"></div> */}
                  {/* <div className="mt-4">
                    <p className="mt-2 mb-3">Shipping:</p>
                    <Link className=" text-white mt-2 mb-3">
                      Hong Kong SAR, China{" "}
                    </Link>
                    <p className="mt-2 mb-3"></p>
                    <p className=" mb-3 mt-4 fw-bold">Language:</p>
                    <Link className=" text-white mt-2 mb-3">English</Link>
                    <p className="mt-1 mb-3">繁體中文</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className=" card " style={{ border: "1.5px solid white" }}></div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="copyright fs-5 mt-3 text-start ms-5">© Aesop</p>
        </div>
      </div>
    </div>
  );
}

export default FooterMain;
