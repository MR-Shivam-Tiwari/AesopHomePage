import React from "react";
import FirstNavbar from "./Navbar/FirstNavbar";
import Navbarmain from "./Navbar/Navbarmain";
import FirstSlider from "./Main/FirstSlider";
import Athenaeum from "./Main/Athenaeum";
import Efficacious from "./Main/Efficacious";
import Appointments from "./Main/Appointments";
import FooterFirst from "./Main/FooterFirst";
import FooterMain from "./Main/FooterMain";

function Home() {
  return (
    <div>
      <FirstNavbar />

      <Navbarmain />
      <div className="" style={{ marginBottom: "130px" }}>
        <FirstSlider />
      </div>
      <div style={{ marginBottom: "130px" }}>
        <Athenaeum />
      </div>
      <div style={{ marginBottom: "130px" }}>
        <Efficacious />
      </div>
      <div style={{ marginBottom: "130px" }}>
        <Appointments />
      </div>
      <div style={{ marginBottom: "130px" }}>
        <FooterFirst />
      </div>
      <div style={{ marginBottom: "" }}>
       <FooterMain />
      </div>
    </div>
  );
}

export default Home;
