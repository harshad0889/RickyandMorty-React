import React from "react";
import "./charecter.css";

const Charecter = () => {
  console.log("el");
  return (
    <div className="home_container">
      <div className="continer_flex">
        <div className="charecter_card">
          <div className="name_section">
            <div>
              <h1>Ricky Karlon</h1>
              <p>
                {" "}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
            </div>
            
          </div>
          <div className="flex1">
            <img
              src="/assets/img/char1.jpg"
              className="charecter_image"
              alt="hellos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charecter;
