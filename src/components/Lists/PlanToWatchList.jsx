import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

function PlanToWatchList() {
    const [planToWatchAnime, setPlanToWatchAnime] = useState([]);
  const { user } = useContext(AuthContext)
  const userName = user.userName
  console.log(user.userName)

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/users/${userName}`)
      .then((response) => {
        console.log("got completed list");
        setPlanToWatchAnime(response.data[0].planToWatchList);
      })
      .catch((err) => err);
    }, []);
    console.log(planToWatchAnime)

  return (
    <>
        {planToWatchAnime.map((elm) => {
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
    </>
  );
}

export default PlanToWatchList