import React from "react";
import "./home.css";
import { useState } from "react";
import CharecterList from "../charecterList/charecterList";


const  HomePage=()=> {
const [charecter] = useState(["AA","BB","CC","DD","EE","FF"])

  return (
    <div className="home_container">
      <div className="content_container">
        <div className="search_box">
          <p>Find your favourite ricky and morty charecter..</p>
          <div className="input_outer_div">
            <input
              className="input"
              type="text"
              placeholder="serach your charecter "
            />
            <button className="btn">Search</button>
          </div>
        </div>

        <div className="card_section">
          <p>Charecters</p>
          <div className="card_div">
          {charecter.map(()=>
          <CharecterList />)}
          </div>
        </div>


        <div className="d-flex">
          <div className="flex-1">hello</div>
          <div className="flex-3">hello</div>
          <div className="flex-1">hello</div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
