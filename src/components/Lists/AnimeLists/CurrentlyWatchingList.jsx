import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";

function CurrentlyWatchingAnimeList() {  
    const [currentlyWatchingAnime, setCurrentlyWatchingAnime] = useState([]);
    const { user } = useContext(AuthContext)
    const userName = user.userName
    console.log(user.userName)
  
    function showList() {

    axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      console.log("sent request to get currently watching list");
      setCurrentlyWatchingAnime(response.data.animeLists.watching);
    })
    .catch((err) => err);
  }
    
  useEffect(() => {
  showList() 
  }, []);
    console.log(currentlyWatchingAnime)
    
  return (
    <>
        {currentlyWatchingAnime.map((anime) => {
          return(
            <div key={anime._id}>
            <div className="card cards card-margin lg:card-side bg-base-100 shadow-xl">
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
       {user && <DeleteFromList animeId={anime._id} case="completed" showList={showList}/>}
          <hr/>
         </div>
         </div>
           ) 
        })}
    </>
  );

}
export default CurrentlyWatchingAnimeList