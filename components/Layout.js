import React from "react";
import ButtonVertical from "./ButtonVertical";
import Navbar from "./Navbar";
import PhotoCard from "./PhotoCard";
import SideNavBar from "./SideNavBar/SideNavBar";

const Layout = (props) => {
  return (
    <>
      <div class="container text-center">
        <div class="row justify-content-lg-center">
          <div class="col-lg-12">
            <PhotoCard />
          </div>
          <div class="row col-lg-10">
            <ButtonVertical />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
