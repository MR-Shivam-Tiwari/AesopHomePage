import React from "react";

function LocationSlider() {
  return (
    <div className="row">
      <div className="col  p-3">
        <div
          className="text-start p-5"
          style={{ width: "83%", marginLeft: "40px" }}
        >
          <h2
            className="mb-4"
            style={{ fontFamily: "monospace", marginTop: "-50px" }}
          >
            Store locator
          </h2>
          <p className="mb-5">
            Our consultants are available to host you in-store and provide
            tailored guidance on gift purchases.
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
            <div>Find a nearby store </div>
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

      <div id="carouselExample" className="carousel col-7 slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/5U8aDtbYkybIgilkq1tJ7w/41bdf1c8b1eb863fd9ac7cde0ee1c64a/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/4StXXhzwKgYMIFgTSIOgUk/8c3406be7d5c1194b0e267b773fa66e6/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.aesop.com/u1nb1km7t5q7/iC1baQuIzXXC6Ho3lZSFW/1226a07142e70fec26df3f0b72578cbd/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          style={{
            backgroundColor: "black",
            height: "90px",
            marginTop: "20%",
            width: "90px",
            marginLeft: "12px",
          }}
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          style={{
            backgroundColor: "black",
            height: "90px",
            marginTop: "20%",
            width: "90px",
            // marginLeft: "12px",
          }}
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default LocationSlider;
