import React from "react";

function Efficacious() {
  return (
    <div>
      <div className="mt-5 mb-5">
        <div className="row">
          <div className=" col video-player">
            <img
              width="740"
              height="100%"
              src="https://www.aesop.com/u1nb1km7t5q7/2ck6SrjYyPRBPhURWsSMEn/b0e30e9520ff0afd24b9b78a1eeb858e/Aesop_Always_On_Homepage_Secondary_Skin_Care_Blending_Mid_Mobile_640x360px.jpg"
              alt=""
            ></img>
          </div>
          <div
            className=" d-flex align-items-center justify-content-center col text-start p-3"
            style={{ width: "50%" , marginTop:"-160px" }}
          >
            <div style={{ width: "70%" }}>
              <h3 className="mb-4 " style={{ fontFamily: "monospace" }}>
                Efficacious pairings
              </h3>
              <p>
                Our consultants have long combined complementary formulations to
                effect additional benefits for the skin. Incorporate this
                time-honoured practice into your regimen with our recommended
                bundles.
              </p>
              <div
                className="p-3 border-1 rounded-0 d-flex justify-content-between"
                style={{
                  border: "1px solid black",
                  width: "90%",
                  transition: "color 0.3s, background-color 0.3s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "black";
                  e.currentTarget.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = ""; // Revert to original background color
                  e.currentTarget.style.color = ""; // Revert to original background color
                }}
              >
                <div>Browse Skin Care Bundles </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Efficacious;
