import React from "react";
import "./charecterlist.css";
import { Link, } from "react-router-dom";

const CharecterList = (props) => {

  return (
    <div className="card">
      <Link to={"/charecter/"+props.data.id}>
        <div className="alive_tag">{props.data?.status}</div>
        <img src={props.data?.image} className="char_image" alt="hello" />
        <h3>{props?.data?.name}</h3>
        <p>
          {props.data.location?.name}
        </p>
      </Link>
    </div>
  );
};

export default CharecterList;
