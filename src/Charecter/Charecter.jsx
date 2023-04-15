import React from "react";
import "./charecter.css";

const Charecter = () => {
  console.log("el");
  return (
    <div className="char_container">
      <div className="continer_flex">
        <div className="charecter_card">
          

          <div className="d-flex">
            <div className="flex-1">
              
                <p>ricky@gmail.com</p>
            </div>
            <div className="flex-3">
              <h1>Ricky Karlon</h1>
              <p>
                {" "}
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available
              </p>
            </div>
            <div className="bottom_panel">
              <div className="alive_tile">Alive</div>
              <div className="alive_tile">Human</div>
              
            </div>
          </div>
          <div className="top_panel">
            <img
              src="/assets/img/char1.jpg"
              className="charecter_image"
              alt="hellos"
            />
            <div className="alive_tag">alive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charecter;
