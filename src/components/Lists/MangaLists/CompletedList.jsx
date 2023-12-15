import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";

function CompletedMangaList() {
  const [completedManga, setCompletedManga] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName
  console.log(user.userName)
  function showList() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      console.log("sent request to get completed list");
      setCompletedManga(response.data.mangaLists.completed);
    })
    .catch((err) => err);
  }

  useEffect(() => {
    showList()
    }, []);
    console.log(completedManga)

  return (
    <>
        {completedManga.map((manga) => {
           return(
            <div key={manga._id}>
            <div className="card cards card-margin lg:card-side bg-base-100 shadow-xl">
           <figure>
             <img src={manga.imageURL} alt="mangaImg" />
           </figure>
           <div className="card-body">
             <h2 className="card-title">{manga.name.nameEN}</h2>
             {manga.name.nameEN !== manga.name.nameJP &&
             <h2 className="card-title">{manga.name.nameJP}</h2>
             }
          <p>Genre: {manga.genre}</p>
             <p>Episodes: {manga.episodes}</p>
             <p>Status: {manga.status}</p>
             <p>Age rating: {manga.ageRating}</p>
             <Link to={`/manga/${manga._id}`}>
               {" "}
               <button className="btn">See more</button>{" "}
             </Link>
       </div>
       {user && <DeleteFromList animeId={manga._id} case="completed" showList={showList}/>}
          <hr/>
         </div>
         </div>
               ) 
        })}
    </>
  );
}

export default CompletedMangaList;
