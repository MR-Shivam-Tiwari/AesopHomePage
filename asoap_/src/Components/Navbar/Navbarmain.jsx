import React from "react";
import "./nav.css";
function Navbarmain() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg  "
        style={{ backgroundColor: "#fffef2" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse p-2"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Skin Care
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Body & Hand
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Hair
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Fragrance
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Home
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Kits & Travel
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Gifts
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Read
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Stores
                  </h6>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="/">
                  <h6 className="" style={{ color: "#66686a" }}>
                    Facial Appointments
                  </h6>
                </a>
              </li>
              &nbsp;
              <svg
                aria-labelledby="search-61"
                className="Icon_base__GKZ58 Icon_light__1TZsq PrimaryMenu_searchIcon__lEkvv"
                data-testid="data-testid-Icon"
                focusable="false"
                height="18"
                role="img"
                tabIndex="-1"
                viewBox="0 0 16 16"
                width="18"
                style={{ marginTop: "10px" }}
              >
                <g>
                  <path
                    d="M11.9544 10.8246C12.8838 9.65831 13.3941 8.18223 13.3941 6.68793C13.3941 3.00683 10.3872 0 6.68793 0C2.98861 0 0 3.00683 0 6.68793C0 10.369 3.00683 13.3759 6.68793 13.3759C8.16401 13.3759 9.64009 12.8656 10.8246 11.9362L14.8519 15.9636L16 14.8155L11.9544 10.8246ZM6.68793 11.7904C3.89977 11.7904 1.62187 9.51253 1.62187 6.72437C1.62187 3.93622 3.89977 1.65831 6.68793 1.65831C9.47608 1.65831 11.754 3.93622 11.754 6.72437C11.754 9.51253 9.47608 11.7904 6.68793 11.7904Z"
                    fill="#66686a"
                  ></path>
                </g>
              </svg>
            </ul>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    <h6 className="" style={{ color: "#66686a" }}>
                      Login{" "}
                    </h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    <h6 className="" style={{ color: "#66686a" }}>
                      Cabinet{" "}
                    </h6>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    <h6 className="" style={{ color: "#66686a" }}>
                      Cart
                    </h6>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarmain;
