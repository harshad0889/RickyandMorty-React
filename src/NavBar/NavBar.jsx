import React from "react";

const NavBar = (props) => {
  return (
    <div className="navbar">
      {/*  */}

      <div className="Name_title ">
        <span className="large">R</span>
        <span className="small">icky</span>
        <span className="large"> '&' </span>
        <span className="large">M</span>
        <span className="small">orty</span>
      </div>

      <div className="nav_user">
        <img src="/assets/img/user.png" className="logo" alt="hellos"/>
      </div>
    </div>
  );
};

export default NavBar;
