import React from "react";

function Athenaeum() {
  return (
    <div className="mt-5 mb-5">
      <div className="row">
        <div
          className=" d-flex align-items-center justify-content-center col text-start p-3"
          style={{ width: "50%", marginTop:"-80px" }}
        >
          <div style={{ width: "70%" }}>
            <h6 className="mb-3">The Athenaeum</h6>
            <h3 className="mb-4 " style={{ fontFamily: "monospace" }}>
              Ouranon: the sixth Othertopias fragrance
            </h3>
            <p>
              Each of the six Othertopias fragrances is a doorway to another
              realm, real and imagined. Ouranon a woody, spicy, resinous scent,
              distinguished by Frankincense, Hay and Myrrh is the final chapter
              of that journey.
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
              <div>Step inside Ouranon</div>
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
        <div className=" col video-player">
          <video
            controls
            autoPlay
            loop
            width="740"
            height="460"
            src="https://videos.ctfassets.net/u1nb1km7t5q7/6OYv521nP7i1wAaGz5dhqP/c83a3696a09e71fa09c5a869f9b2c3cf/Aesop_Othertopias_2023_Web_Othertopias_Page_Secondary_4_Mid_Mobile_1920x1080px.mp4"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default Athenaeum;
