import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";

import "../../../styles/pages/ListPage.css"

function AddToList(props) {
  const { user } = useContext(AuthContext);
  const [favoritesList, setFavoritesList] = useState(null)
  const [completedList, setCompletedList] = useState(null)
  const [currentlyWatchingList, setCurrentlyWatchingList] = useState(null)
  const [planToWatchList, setPlanToWatchList] = useState(null)
  const storedToken = localStorage.getItem("authToken");
  
  
  axios
  .get(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}`)
      .then((response) => {
        setFavoritesList(response.data.animeLists.favorites.map((elm) =>elm._id))
        setCompletedList(response.data.animeLists.completed.map((elm) =>elm._id))
        setCurrentlyWatchingList(response.data.animeLists.watching.map((elm) =>elm._id))
        setPlanToWatchList(response.data.animeLists.planToWatch.map((elm) =>elm._id))
      })
      .catch(err => err)

      function handleAdd(optionType) {
    
    switch (optionType) {
      case "FavoritesList":
        favoritesList.includes(props.id)
        ? console.log("already in list")
        : axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "favorites"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
          break;

      case "CompletedList":
      completedList.includes(props.id)  
      ? console.log("already in list")
      : axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "completed"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "CurrentlyWatchingList":
        currentlyWatchingList.includes(props.id)
        ? console.log("already in list")
        : axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "currentlyWatching"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "PlanToWatchList":
        planToWatchList.includes(props.id)
        ? console.log("already in list")
        : axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "plan to watch"},{ headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      default:
      break;
    }
  }

  return (
    <div id="list">
      <button
        className="btn"
        onClick={() => {
          handleAdd("FavoritesList");
        }}
      >
        Favorites
      </button>
      <button
        className="btn"
        onClick={() => {
          handleAdd("CurrentlyWatchingList");
        }}
      >
        Currently Watching
      </button>

      <button
        className="btn"
        onClick={() => {
          handleAdd("CompletedList");
        }}
      >
       Completed
      </button>

     

      <button
        className="btn"
        onClick={() => {
          handleAdd("PlanToWatchList");
        }}
      >
        Plan To Watch
      </button>
    </div>
  );
}
export default AddToList;
