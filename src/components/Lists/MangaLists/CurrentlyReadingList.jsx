import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";

function CurrentlyReadingMangaList() {  
    const [currentlyReading, setCurrentlyReading] = useState([]);
    const { user } = useContext(AuthContext)
    const userName = user.userName
    console.log(user.userName)
    
    function showList() {
    
      axios
    .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
    .then((response) => {
      console.log("sent request to get currently reading list");
      setCurrentlyReading(response.data.mangaLists.reading);
    })
    .catch((err) => err);
  }
    
  useEffect(() => {
  showList() 
  }, []);
    console.log(currentlyReading)
    
  return (
    <>
        {currentlyReading.map((elm) => {
          return(
            <div key={elm._id}>
            <div>
               <p>{elm.name.nameJP}</p>
               <p>{elm.name.nameEN}</p>
               <p>{elm.imageURL}</p>
               <p>{elm.genre}</p>
               <p>{elm.rating}</p>
            </div>
           <DeleteFromList case="currentlyReading" showList={showList}/>
               <hr/>
           </div>
           ) 
        })}
    </>
  );

}
export default CurrentlyReadingMangaList