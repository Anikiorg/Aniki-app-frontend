import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../context/auth.context";
import DeleteFromList from "./DeleteFromList";

function CompletedList() {
  const [completedAnime, setCompletedAnime] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName
  console.log(user.userName)
  function showList() {
    axios
    .get(`http://localhost:5005/api/users/${userName}`)
    .then((response) => {
      console.log("got completed list");
      setCompletedAnime(response.data[0].completedList);
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
