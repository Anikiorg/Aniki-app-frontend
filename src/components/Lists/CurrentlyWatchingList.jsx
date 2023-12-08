import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function CurrentlyWatchingList() {  
    const [currentlyWatchingAnime, setCurrentlyWatchingAnime] = useState([]);
    const { user } = useContext(AuthContext)
    const userName = user.userName
    console.log(user.userName)

    
  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/users/${userName}`)
      .then((response) => {
        console.log("got completed list");
        setCurrentlyWatchingAnime(response.data[0].currentlyWatchingList);
      })
      .catch((err) => err);
    }, []);
    console.log(currentlyWatchingAnime)
    
  return (
    <>
      <p>
        {currentlyWatchingAnime.map((elm) => {
           return(
            <div key={elm._id}>
               <p>{elm.name.nameJP}</p>
               <p>{elm.name.nameEN}</p>
               <p>{elm.imageURL}</p>
               <p>{elm.genre}</p>
               <p>{elm.rating}</p>
               <hr/>
            </div>
               ) 
        })}
        </p>
    </>
  );

}
export default CurrentlyWatchingList