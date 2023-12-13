import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/auth.context";
import DeleteFromList from "./DeleteFromList";

function PlanToWatchAnimeList() {
  const [planToWatchAnime, setPlanToWatchAnime] = useState([]);
  const { user } = useContext(AuthContext);
  const userName = user.userName;
  console.log(user.userName);

  function showList() {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${userName}`)
      .then((response) => {
        console.log("sent request to get plan to watch list");
        setPlanToWatchAnime(response.data.animeLists.planToWatch);
      })
      .catch((err) => err);
  }

  useEffect(() => {
    showList();
  }, []);
  console.log(planToWatchAnime);

  return (
    <>
      {planToWatchAnime.map((elm) => {
        return (
          <div key={elm._id}>
            <div>
              <p>{elm.name.nameJP}</p>
              <p>{elm.name.nameEN}</p>
              <p>{elm.imageURL}</p>
              <p>{elm.genre}</p>
              <p>{elm.rating}</p>
            </div>
            <DeleteFromList id={elm._id} case="planToWatch" showList={showList}/>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default PlanToWatchAnimeList;
