import React from "react";
import ButtonVertical from "./ButtonVertical";
import Navbar from "./Navbar";
import PhotoCard from "./PhotoCard";
import SideNavBar from "./SideNavBar/SideNavBar";

const Layout = (props) => {
  return (
    <>


      <div class="container text-center">
  <div class="row justify-content-md-center">

    <div class="col-md-12">
  <PhotoCard /> 
    </div>
    <div class="row col-md-6">
  <ButtonVertical/>
  {props.children}
    </div>
  </div>




    {/* <div class="container-fluid text-center">
      <div class="row align-items-start">
        <div class="col-lg-10 justify-content-start">
        </div>
        <div class="col-lg-2 mt-1 justify-content-end">
          {/* <SideNavBar />   */}
        {/* </div> */}
    {/* </div> */}
  
  
  
  </div> 


  </>
  );
};
export default Layout;