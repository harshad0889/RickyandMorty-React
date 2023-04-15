import React from "react";
import "./card.css";
import { Link, useNavigate } from "react-router-dom";

const Card = () => {
  return (
    <div className="card">
      <Link to="/charecter">
        <img src="/assets/img/char1.jpg" className="char_image" alt="hello" />
        <h3>Ricky</h3>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
      </Link>
    </div>
  );
};

export default Card;
