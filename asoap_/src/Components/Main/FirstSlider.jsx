import React, { useEffect, useState } from "react";

function FirstSlider() {
  
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsHidden(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [
    "https://www.aesop.com/u1nb1km7t5q7/u3xwLdwyHOhnFjFDnp9xh/78ae09241ad257722205bb61089ab46a/Aesop_Othertopias_2023_Web_Homepage_3_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/6gh1BfrwUWExsAYoI9MhxK/56b784ae98ed3421486a09e0c112bdea/Aesop_Bar_Soaps_2023_Web_Homepage_1_Primary_Full_Bleed_Desktop_2880x1044px.jpg",
    "https://www.aesop.com/u1nb1km7t5q7/4SUhr7BGma03r1oHxGHgpY/736e8b4997372edbecf26d60044caabf/Aesop_PSAOIS_2023_Web_Homepage_Primary_50-50_Desktop_1440x1500px.jpg",
  ];
  const imageCaptions = [
    "Caption for Image 1",
    "Caption for Image 2",
    "This is the third image. It has a different width and text below.",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevImage = () => {
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };
  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div className="">
      <div className="image-slider">
        <div className="slider-container">
          <div className="image-overlay">
            <div
              className="carousel-caption "
              style={{
                zIndex: "10",
                marginBottom: "-40px",
                color: currentImageIndex === 2 ? "black" : "white",
              }}
            >
              <form className="d-flex ">
                <div
                  className="d-flex "
                  style={{
                    width: "50%",
                    marginLeft: "-150px",
                    color: currentImageIndex === 2 ? "black" : "white",
                  }}
                >
                  <svg
                    aria-labelledby="aesop-35"
                    className="Icon_base__GKZ58 Icon_light__1TZsq Logo_icon__NDEf8"
                    data-testid="data-testid-Icon"
                    focusable="false"
                    height="40"
                    role="img"
                    tabindex="-1"
                    viewBox="0 0 489.7 154.3"
                    width="100%"
                    fill="white"
                    style={{}}

                    //   style="height: 40px; width: 120px;"
                  >
                    <title
                      aria-label="Aesop logo"
                      id="aesop-35"
                      className="text-white"
                    >
                      Aesop
                    </title>
                    <g>
                      <path d="M48.6,22.5L31.8,62.2h34.2L48.6,22.5z M28.6,70.3c-3.2,7.4-9.6,21.7-14.9,42c-1.9-0.3-3.5-0.9-6.6-0.9c-3.1,0-5,0.6-7.1,0.9C14.3,81.2,38,28.9,49.4,0c1.3,0.2,2.3,0.5,4,0.5c1.4,0,2.3-0.2,3.5-0.5c12.3,33.7,47.8,111.7,48.1,112.3c-2.7-0.5-5.5-0.9-9.5-0.9c-4.2,0-7.2,0.5-10.3,0.9c-5.6-19.2-12.2-33.2-16.2-42H28.6z"></path>
                      <path d="M172.4,66.6c0-5.3,0-26.6-19.2-26.6c-14,0-20.7,10.6-22.2,26.6H172.4z M130.9,73.3c0,4.5,0,13.6,4.3,21c7.4,12.1,17.8,12.5,22.5,12.5c15.7,0,23.1-9.6,25.5-13l1.9,0.4c-1,4.5-1,7.1-1.1,9.6c-7.1,6.7-16.8,10.5-29.8,10.5c-24.4,0-39.3-15.4-39.3-40.1c0-22.1,12.2-40.7,38.5-40.7c35.8,0,35.3,31.1,35.1,39.8H130.9z"></path>
                      <path d="M249.6,52.1c-0.6-2.4-1.6-6.4-6.2-9.6c-3.4-2.4-7.8-2.7-10.4-2.7c-9.8,0-14.9,5.1-14.9,12c0,9.3,9.5,12.7,15.1,14.1c14.3,3.7,25.8,6.7,25.8,22.8c0,12.2-8.5,25.8-30.8,25.8c-13,0-22-5.5-23.7-6.7c2.1-3.9,3.4-10.7,3.7-12.8l1.9-0.5c1.1,2.7,2.7,7.1,8.7,10.6c4,2.4,8.2,3,11.7,3c8.4,0,16.2-4,16.2-13.2c0-9.1-5.5-10.9-22.3-16.4c-6.9-2.3-18.3-7.2-18.3-21.3c0-9.1,5.6-23.9,27.8-23.9c11.1,0,17.5,3.4,21.2,5.3c-1.6,4.2-2.7,8-3.2,13.5H249.6z"></path>
                      <path d="M291.5,73.5c0,22.3,9.8,34.6,24.5,34.6c15.4,0,25.5-13.3,25.5-34.5c0-12.5-3.9-33.8-24.7-33.8C291.5,39.8,291.5,68.6,291.5,73.5 M357.9,73c0,25.5-17.6,41.5-42,41.5c-17,0-40.8-7.7-40.8-40.6c0-25,16.7-40.6,40.8-40.6 C346.3,33.4,357.9,53.4,357.9,73"></path>
                      <path d="M399.4,49.6c-3.2,4-6.6,9.8-6.6,25.7c0,14.1,3.2,19.4,6.6,23.4c4.1,5,9.6,7.9,17,7.9 c22.9,0,22.9-27.1,22.9-32.3c0-24.2-11.6-33-22-33C408.7,41.2,403.1,44.9,399.4,49.6 M419.3,114.7c-15.1,0-23.6-8.3-26.2-14.9 c0,25.2-0.2,39.8,0.8,54.5c-2.4-0.6-4.5-0.9-8.4-0.9c-4,0-6.1,0.3-8.6,0.9c1.3-20.8,1.8-41.9,1.8-62.7c0-14.6-0.3-34.3-0.8-57.6 c2.2,0.5,4.8,0.9,7.9,0.9c2.9,0,5.6-0.5,7.9-0.9c-0.6,8.8-0.6,11.2-0.6,14.6c2.6-4.2,9.5-15.4,27.3-15.4c16,0,35.6,11.7,35.6,40.3 C455.9,98.8,440.3,114.7,419.3,114.7"></path>
                      <rect x="131.8" y="13.5" width="44.3" height="5"></rect>
                      <path d="M477.2,98.1c0,1.6,0,3,0,4.4c1.3,0,4.3,0,4.3-2.3C481.5,98.1,479.2,98.1,477.2,98.1 M484.9,109.1 c-0.4,0-0.7-0.1-1.2-0.1c-0.4,0-0.8,0.1-1.5,0.1c-2-2.9-3.6-4.5-4.7-5.8h-0.4c0,1.8,0,3.2,0.2,5.8c-0.5,0-0.7-0.1-1.3-0.1 c-0.6,0-0.8,0.1-1.1,0.1c0.1-1.3,0.2-2.7,0.2-6.2c0-3-0.1-4.4-0.1-5.7c0.9,0,1.5,0,2.9,0c2.9,0,5.9,0,5.9,2.8c0,2.5-2.7,2.9-3.9,3 c0.8,1.1,4.4,5.1,5.1,5.9L484.9,109.1z M479.2,94.8c-4.8,0-8.5,3.8-8.5,8.6c0,4.9,3.6,8.6,8.5,8.6c4.9,0,8.5-3.7,8.5-8.6 C487.8,98.7,484.3,94.8,479.2,94.8 M479.2,92.9c5.9,0,10.5,4.7,10.5,10.5c0,5.9-4.7,10.5-10.5,10.5c-5.8,0-10.5-4.6-10.5-10.5 C468.8,97.5,473.5,92.9,479.2,92.9"></path>
                    </g>
                  </svg>{" "}
                  &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                  <div className="text-start">
                    <h6 className="mb-3">A new Othertopias fragrance</h6>
                    <h3 className="mb-4">Ouranon Eau de Parfum</h3>
                    <p>
                      A fragrance that evokes a silent monolith, the last
                      vestige of a stone circle whose meaning has been lost to
                      time earthy minerality commingling with Frankincense, Hay
                      and Myrrh.
                    </p>
                    <div
                      className="p-3 border-1 rounded-0 d-flex justify-content-between"
                      style={{
                        border: "1px solid white",
                        width: "90%",
                        transition: "color 0.3s, background-color 0.3s",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "black";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = ""; // Revert to original background color
                        e.currentTarget.style.color = ""; // Revert to original background color
                      }}
                    >
                      <div>Discover Ouranon</div>
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
              </form>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end", // Align to the right
                width: "100%", // Ensure the container takes up the full width
              }}
            >
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                style={{
                  width: currentImageIndex === 2 ? "50%" : "120%", // Change width for the third image
                  height: "600px",
                }}
              />
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center p-2">
            <button
              onClick={prevImage}
              className="prev-button border-0 fw-bold shadow-0"
              style={{ backgroundColor: "#f6f5e8" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </button>
            <div className="image-count">{`${currentImageIndex + 1} / ${
              images.length
            }`}</div>
            <div>
              <button
                onClick={nextImage}
                className=" border-0 "
                style={{ backgroundColor: "#f6f5e8" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </button>
              <button
                onClick={togglePlayPause}
                className="border-0 "
                style={{ backgroundColor: "#f6f5e8" }}
              >
                {isPlaying ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pause-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-play-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                  </svg>
                )}
              </button>
            </div>
            <div></div>
          </div>
          <form className=" bg-black ">
            <div
              className="d-flex "
              style={{
                width: "100%",
                height: "400px",
                color: currentImageIndex === 2 ? "black" : "white",
              }}
            >
              <div className="text-start p-4" style={{ width: "100%" }}>
                <h6 className="mb-4 mt-3 ">A new Othertopias fragrance</h6>
                <h3 className="mb-4">Ouranon Eau de Parfum</h3>
                <p className="" style={{ lineHeight: "30px" }}>
                  A fragrance that evokes a silent monolith, the last vestige of
                  a stone circle whose meaning has been lost to time earthy
                  minerality commingling with Frankincense, Hay and Myrrh.
                </p>
                <div
                  className="p-3 border-1 rounded-0 d-flex justify-content-between"
                  style={{
                    border: "1px solid white",
                    width: "100%",
                    transition: "color 0.3s, background-color 0.3s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "black";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = ""; // Revert to original background color
                    e.currentTarget.style.color = ""; // Revert to original background color
                  }}
                >
                  <div>Discover Ouranon</div>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default FirstSlider;
