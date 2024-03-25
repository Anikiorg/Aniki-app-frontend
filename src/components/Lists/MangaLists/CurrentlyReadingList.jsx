import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";
import { Link } from "react-router-dom";

import Loading from "../../Loading";

import "../../../styles/pages/ListPage.css"
function CurrentlyReadingMangaList() {  
  
  const [loading, setLoading] = useState(true);
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const { user } = useContext(AuthContext)
    const userName = user.userName
    
    function showList() {
    
      axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      setCurrentlyReading(response.data.mangaLists.reading);
      setLoading(false);
    })
    .catch((err) => err);
  }
    
  useEffect(() => {
  showList() 
  }, []);
    
  return (
    <>
    <h1 className="list-name">Currently reading manga</h1>
    {loading ? (
            <Loading/>
          ) :(
            currentlyReading.length == 0 
            ? <a className="empty-list" href="/">List empty. Add some anime?</a>
            : <>
        {currentlyReading.map((manga) => {
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
      {user && <DeleteFromList mangaId={manga._id} showList={showList} case={"currentlyReading"}/>}
   
        </div>
        </div>
        </div>
       );
      })}</>
          )}
    </>
  );
}

export default CurrentlyReadingMangaList