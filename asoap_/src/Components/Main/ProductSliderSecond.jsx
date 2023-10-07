import React, { useEffect } from "react";
import "./main.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";

import { Link } from "react-router-dom";

function ProductSliderSecond() {
  useEffect(() => {
    // Ensure that the DOM element exists before initializing Slick
    $(document).ready(function () {
      if ($(".promotionalslider_wrapper").length) {
        $(".promotionalslider_wrapper").slick({
          infinite: false,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: false,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ],
        });
      }
      if ($(".sidebar_wrapper").length) {
        $(".sidebar_wrapper").slick({
          infinite: false,
          slidesToShow: 1, // Adjust the number of slides to show for the sidebar
          slidesToScroll: 1,
          autoplay: false,
        });
      }
    });
  }, []);

  return (
    <div id="promotional_slider">
      <div className="promotionalslider_wrapper">
        <div
          className="promotionalslider_single text-start p-3"
          style={{ marginTop: "0px", marginLeft: "40px" }}
        >
          <h6>Parsley Seed Skin Care</h6>
          <h2 className="mb-4" style={{ fontFamily: "serif" }}>
            Fortification of the highest order
          </h2>
          <p className="mb-4">
            Our Parsley Seed Skin Care range provides potent doses of
            anti-oxidant rich ingredients in formulations suited to all skin
            types. They are especially recommended for those in urban
            environments, to fortify the skin against the damaging effects of
            free radicals.
          </p>
          <p className="bg-none">
            Explore the range
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
          </p>
        </div>
        <div
          className="promotionalslider_single p-2 "
          style={{ marginTop: "150px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5vuGB9OlPfCwhd0di4sqjF/8c66786e2c82846e7e86c2e234c7c0e5/Aesop_Kits_Parsley_Seed_Anti-Oxidant_Skin_Care_Kit_Web_Large_1584x962px.png"
            alt=""
            style={{ width: "100% " }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Anti-Oxidant Skin Care Kit
          </Link>
          <p>A trio of Parsley Seed staples</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "175px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4fclKcB1FNLpV5wHmZkAQ6/c6c62862184703d834efbc07077b86cb/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Anti-Oxidant Eye Cream
          </Link>
          <p>Nourishes delicate skin around eyes</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "-5px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5T3H9UXxNE9yT2Na2kjXvW/71d804effdc8b27b1aced97e1781f1ec/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Facial Cleansing Oil
          </Link>
          <p>Gently liberates skin of grime and mekeup</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "30px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4dDnzrqcgMeqKPXni0V0iV/d32a161375b1e4f21f5fe79471ef4b3c/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Facial Cleanser
          </Link>
          <p>For those in polluted urban environments</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "170px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/1pr54VIGFr7VyVW9UXGXm4/0eeedad1ea45c86f45ce8c724bfbc4cb/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-large.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Anti-Oxidant Facial Hydrating Cream
          </Link>
          <p>A potent, nourishing cream</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "25px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/27ALSA2USE1gv4VGow4S10/4342f79cf74c9ea2f9474e3ea057bde2/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Hydrator-60mL-large.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">
            Parsley Seed Anti-Oxidant Hydrator
          </Link>
          <p>Light, rapidly absorbed fortification</p>
        </div>
      </div>
      <div className="sidebar_wrapper">
        {/* Sidebar slide */}
        <div className="sidebar_slide" style={{ width: "1px" }}>
          {/* Sidebar content */}
          {/* You can add any content you want here */}
        </div>
      </div>
    </div>
  );
}

export default ProductSliderSecond;
