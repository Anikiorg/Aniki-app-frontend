import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";

import Loading from "../../Loading";

import "../../../styles/pages/ListPage.css"
function CompletedMangaList() {
  
  const [loading, setLoading] = useState(true);
  const [completedManga, setCompletedManga] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName

  function showList() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      setCompletedManga(response.data.mangaLists.completed);
      setLoading(false);
    })
    .catch((err) => err);
  }

  useEffect(() => {
    showList()
    }, []);

  return (
    <>
    <h1 className="list-name">Completed manga</h1>
    {loading ? (
            <Loading/>
          ) :(
            completedManga.length == 0
            ? <a className="empty-list" href="/">List empty. Add some anime?</a>
            :
            <>
        {completedManga.map((manga) => {
           return(
            <div key={manga._id} className="card">
             <img src={manga.imageURL} alt="mangaImg" />
          
           <div className="card-content">
             <h2>{manga.name.nameEN}</h2>
             {manga.name.nameEN !== manga.name.nameJP &&
             <h2>{manga.name.nameJP}</h2>
             }
          <p>Genre: {manga.genre}</p>
             <p>Episodes: {manga.episodes}</p>
             <p>Status: {manga.status}</p>
             <p>Age rating: {manga.ageRating}</p>
             
             <div className="card-bottom">
             <Link to={`/manga/${manga._id}`}>
               {" "}
               <button className="btn bottom-button">See more</button>{" "}
             </Link>
       {user && <DeleteFromList mangaId={manga._id} showList={showList} case={"completed"}/>}
    
         </div>
         </div>
         </div>
    );
  })}</>
      )}
</>
);
}

export default CompletedMangaList;
