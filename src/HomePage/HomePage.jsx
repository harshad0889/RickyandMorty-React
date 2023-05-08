import React, { useEffect } from "react";
import "./home.css";
import { useState } from "react";
import CharecterList from "../charecterList/charecterList";
import axios from "axios";
const HomePage = () => {
  const [charecter, setCharecter] = useState([]);
  const [isLoading,setisLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getCharecterData();
  }, [searchQuery]);

  const baseurl = "https://rickandmortyapi.com/api/character/?name="

  //-----------get all charecters data ------------
  const getCharecterData = async () => {
    setisLoading(true)
    await axios(baseurl+searchQuery).then(
      (res) => {
        console.log(res, "axios response");
        setisLoading(false)
        setCharecter(res?.data?.results);
      },
      (err) => {
        setisLoading(false)
        console.log(err);
      }
    );
  };

  

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="close_btn" onClick={()=>setSearchQuery("")}>x</div>
            <button className="btn">Search</button>
          </div>
        </div>

        <div className="card_section">
          <p>Charecters</p>
          {isLoading && <div className="laoding_view"><img src="/assets/img/loader.gif" className="loader" alt="hellos"/></div>}
          <div className="card_div">
          
            {charecter.map((item) => (
              <CharecterList data ={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
