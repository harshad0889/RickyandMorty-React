import React, { useEffect, useState } from "react";
import axios from "axios";
import "./charecter.css";
import { useParams } from "react-router-dom";

const Charecter = () => {
  const { id } = useParams();
  console.log(id, ">>>> singel id ");

  const [charecter, setCharecter] = useState([]);
  const [Episode, setEpisode] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (id && id !== 0 && id !== "0") {
      getCharecterData();
    }
    getEpisodeData();
  }, []);

  //-----------get all charecters data ------------
  const getCharecterData = async () => {
    setisLoading(true);
    await axios("https://rickandmortyapi.com/api/character/" + id).then(
      (res) => {
        console.log(res, "axios response");
        setisLoading(false);
        setCharecter(res?.data);
      },
      (err) => {
        setisLoading(false);
        console.log(err);
      }
    );
  };
  //-----------get all charecters data ------------
  const getEpisodeData = async () => {
    setisLoading(true);
    await axios("https://rickandmortyapi.com/api/episode").then(
      (res) => {
        console.log(res, "axios response");
        setisLoading(false);
        setEpisode(res?.data?.results);
      },
      (err) => {
        setisLoading(false);
        console.log(err);
      }
    );
  };
  console.log("el");
  return (
    <div className="char_container">
      <div className="continer_flexx">
        {isLoading && (
          <div className="laoding_view">
            <img src="/assets/img/loader.gif" className="loader" alt="hellos" />
          </div>
        )}

        {!isLoading && (
          <>
            <div className="charecter_card">
              <div className="d-flex">
                <div className="flex-1">
                  <p>{charecter.origin?.name}</p>
                </div>
                <div className="flex-3">
                  <h1>{charecter.name}</h1>

                  <p>Location : {charecter.location?.name}</p>
                  <p>Gender : {charecter.gender}</p>
                  <p>Episodes : {charecter?.episode?.length}</p>
                </div>
                <div className="bottom_panel">
                  <div className="alive_tile">{charecter.status}</div>
                  <div className="alive_tile">{charecter.species}</div>
                </div>
              </div>
              <div className="top_panel">
                <img
                  src={charecter.image}
                  className="charecter_image"
                  alt="hellos"
                />
                <div className="alive_tag">{charecter.status}</div>
              </div>
            </div>

            <div className="episode_section">
              <div className="episode_row">
                {Episode?.map((item) => (
                  <div className="episode_card">
                    <img
                  src={charecter.image}
                  className="episode_image"
                  alt="hellos"
                />
                    <p>{item?.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Charecter;
