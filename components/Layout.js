import React from "react";
import ButtonVertical from "./ButtonVertical";
import Navbar from "./Navbar";
import PhotoCard from "./PhotoCard";
import SideNavBar from "./SideNavBar/SideNavBar";

const Layout = (props) => {
  return (
    <>
      <div class="text-center w-100">
        <div class="row d-flex flex-row">
          <div class="col-xl-12">
            <PhotoCard />
          </div>
          <div class="col-lg-12">
            <ButtonVertical />
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
