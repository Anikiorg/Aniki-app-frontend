import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";

function CompletedList() {
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
        {completedAnime.map((elm) => {
           return(
               <>
            <div key={elm._id}>
               <p>{elm.name.nameJP}</p>
               <p>{elm.name.nameEN}</p>
               <p>{elm.imageURL}</p>
               <p>{elm.genre}</p>
               <p>{elm.rating}</p>
            </div>
             <DeleteFromList id={elm._id} case="completed" showList={showList}/>
               <hr/>
              </>
               ) 
        })}
    </>
  );
}

export default CompletedList;
