import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";

import "../../../styles/components/Lists.css"
function CompletedAnimeList() {
  const [completedAnime, setCompletedAnime] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName
  console.log(user.userName)
  
  function showList() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      console.log("sent request to get completed list");
      setCompletedAnime(response.data.animeLists.completed);
    })
    .catch((err) => err);
  }

  useEffect(() => {
    showList()
    }, []);
    console.log(completedAnime)

  return (
    <>
        {completedAnime.map((anime) => {
           return(
               <div key={anime._id}>
                 <div className="card border cards">
                <figure>
                  <img src={anime.imageURL} alt="animeImg" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{anime.name.nameEN}</h2>
                  {anime.name.nameEN !== anime.name.nameJP &&
                  <h2 className="card-title">{anime.name.nameJP}</h2>
                  }
               <p>Genre: {anime.genre}</p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>Status: {anime.status}</p>
                  <p>Age rating: {anime.ageRating}</p>
                  <Link to={`/animes/${anime._id}`}>
                    {" "}
                    <button className="btn">See more</button>{" "}
                  </Link>
            </div>
            {user && <DeleteFromList animeId={anime._id} showList={showList}/>}
               <hr/>
              </div>
              </div>
               ) 
        })}
    </>
  );
}

export default CompletedAnimeList;
