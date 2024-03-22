import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";
import "../../../styles/pages/ListPage.css";

function PlanToWatchAnimeList() {
  const [planToWatchAnime, setPlanToWatchAnime] = useState([]);
  const { user } = useContext(AuthContext);
  const userName = user.userName;

  function showList() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
      .then((response) => {
        setPlanToWatchAnime(response.data.animeLists.planToWatch);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    showList();
  }, []);

  return (
    <>
      {planToWatchAnime.map((anime) => {
        return (
          <div key={anime._id} className="card">
            <img src={anime.imageURL} alt="animeImg" />
            <div className="card-content">
              <h2>{anime.name.nameEN}</h2>
              {anime.name.nameEN !== anime.name.nameJP && (
                <h2>{anime.name.nameJP}</h2>
              )}
              <p>Genre: {anime.genre}</p>
              <p>Episodes: {anime.episodes}</p>
              <p>Status: {anime.status}</p>
              <p>Age rating: {anime.ageRating}</p>

              <div className="card-bottom">
                <Link to={`/animes/${anime._id}`}>
                  {" "}
                  <button className="btn bottom-button">See more</button>{" "}
                </Link>
                {user && (
                  <DeleteFromList animeId={anime._id} showList={showList} case={"planToWatch"}/>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default PlanToWatchAnimeList;
