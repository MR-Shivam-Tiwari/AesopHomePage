import React, { useEffect } from "react";
import "./main.css";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.js";
import { Link } from "react-router-dom";

function PromotionalSlider() {
  useEffect(() => {
    // Ensure that the DOM element exists before initializing Slick
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
  }, []);

  return (
    <div id="promotional_slider">
      <div className="promotionalslider_wrapper">
        <div
          className="promotionalslider_single text-start p-3"
          style={{ marginTop: "0px", marginLeft: "40px" }}
        >
          <h6>Fragrance</h6>
          <h2 className="mb-4" style={{ fontFamily: "serif" }}>
            Our personal scents
          </h2>
          <p className="mb-4">
            Unorthodox, evocative, and refined, Aesop fragrances are sensory
            bridges to memory and connection points to those around us.
          </p>
          <p className="bg-none">
            See all Fragrance{" "}
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
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6fS7KvwhtoYYrcc6zwJilY/4e2cb9b2e23b98648aae11ae7d0fa4e0/Aesop_Fragrance_Ouranon_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100% " }}
          />
          <Link className="text-black fw-bold">Ouranon Eau de Parfum</Link>
          <p>Woody , spicy, resinous</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5JnjTiylieRSYutnMFeyVK/0c78718d9172cd5384064512e06f0b52/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">Gloam Eau de Parfum</Link>
          <p>Floral, spicy, green</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/6otLbkgZuAv2oDJ3UG3r53/752eb0a5fe1f836a105247851d0200b8/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">Eidesis Eau de Parfum</Link>
          <p>Woody, spicy, ambery</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/J4lTP53G5Qg3MtFjmhnRW/945d6746058105e97c0552e3b0fbf54b/Aesop_Fragrance_Eremia_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">Erémia Eau de Parfum</Link>
          <p>Green, floral, citrus</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/4xJBSrjM8KCIc1c98Y2V08/38105def050ed90c4f47b58a22c32f97/Aesop_Fragrance_Miraceti_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">Miraceti Eau de Parfum</Link>
          <p>Resinous, woody, spicy</p>
        </div>
        <div
          className="promotionalslider_single p-2"
          style={{ marginTop: "50px" }}
        >
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/cc3b7QvhMcApvi0MCw9Xa/c2f5d7e204d7f2e9a5be48aaf66aff3d/Aesop_Fragrance_Karst_Eau_de_Parfum_50mL_Web_Front_Large_900x878px.png"
            alt=""
            style={{ width: "100%" }}
          />
          <Link className="text-black fw-bold">Karst Eau de Parfum</Link>
          <p>Fresh, herbaceous, marine</p>
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

export default PromotionalSlider;
