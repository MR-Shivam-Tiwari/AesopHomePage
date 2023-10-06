import React from "react";
import { Link } from "react-router-dom";

function FirstNavbar() {
  const inlineStyles = {
    fontFamily: "Suisse Regular, sans-serif",
    fontSize: "16px",
    lineHeight: "1.7",
    WebkitFontSmoothing: "antialiased",
    listStyleType: "none",
    color: "#333",
    backgroundColor: "#c2c2af",
    boxSizing: "border-box",
    margin: "0",
    clear: "both",
    height: "auto",
    overflow: "visible",
    padding: "10px 20px",
    top: "0",
    width: "100%",
    zIndex: "2",
  };
  const BlackBanner = {
    fontFamily: "Suisse Regular, sans-serif",
    fontSize: "16px",
    lineHeight: "1.7",
    WebkitFontSmoothing: "antialiased",
    listStyleType: "none",
    color: "white",
    backgroundColor: "#252525",
    boxSizing: "border-box",
    margin: "0",
    clear: "both",
    height: "auto",
    overflow: "visible",
    padding: "10px 20px",
    top: "0",
    width: "100%",
    zIndex: "2",
  };

  return (
    <>
      <div style={inlineStyles}>
        <li aria-label="alert-banner" style={{ height: "25px" }}>
          <p className="">
            Trained Aesop consultants are available to provide bespoke skin care
            advice.
            <Link
              href="/hk/en/r/live-video-consultations/"
              style={{ textDecoration: "none" }}
            >
              &nbsp;{" "}
              <strong className="text-dark " style={{fontSize:"15px"}}>
                Book a video consultation
              </strong>
            </Link>
          </p>
        </li>
      </div>
      <div style={BlackBanner}>
        <li aria-label="alert-banner" style={{ height: "25px" }}>
          <p>
            Click and Collect is now available in Hong Kong. Enjoy complimentary
            shipping on orders over $400.&nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </p>
        </li>
      </div>
    </>
  );
}

export default FirstNavbar;
