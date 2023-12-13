import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";

function FavoritesList () {
  const [favoriteManga, setFavoriteManga] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName
  console.log(user.userName)

  function showList() {
    axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      console.log("sent request to get favorites list");
      setFavoriteAManga(response.data.mangaLists.favorites);
    })
    .catch((err) => err);
  }

  useEffect(() => {
    showList()
  }, []);
    console.log(favoriteManga)

  return (
    <>
        {favoriteManga.map((elm) => {
           return(
            <>
            <div key={elm._id}>
               <p>{elm.name.nameJP}</p>
               <p>{elm.name.nameEN}</p>
               <p>{elm.imageURL}</p>
               <p>{elm.genre}</p>
               <p>{elm.rating}</p>
            </div>
            <DeleteFromList id={elm._id} case="favorites" showList={showList}/>
               <hr/>
            </>
               ) 
        })}
    </>
  );
}

export default FavoritesList