import "../../../styles/pages/ListPage.css";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";

function AddToList(props) {
  const { user } = useContext(AuthContext);
  const [favoritesList, setFavoritesList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [currentlyWatchingList, setCurrentlyWatchingList] = useState([]);
  const [planToWatchList, setPlanToWatchList] = useState([]);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [togglePlanToWatch, setTogglePlanToWatch] = useState(false);
  const [toggleWatching, setToggleWatching] = useState(false);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}`)
      .then((response) => {
        setFavoritesList(
          response.data.animeLists.favorites.map((elm) => elm._id)
        );
        setCompletedList(
          response.data.animeLists.completed.map((elm) => elm._id)
        );
        setCurrentlyWatchingList(
          response.data.animeLists.watching.map((elm) => elm._id)
        );
        setPlanToWatchList(
          response.data.animeLists.planToWatch.map((elm) => elm._id)
        );
      })
      .catch((err) => err);
  }, [user]);

  function handleAdd(optionType) {
    switch (optionType) {
      case "FavoritesList":
        favoritesList.includes(props.id)
          ? setToggleFav(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`,
                { id: props.id, listType: "favorites" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setToggleFav(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      case "CompletedList":
        completedList.includes(props.id)
          ? setToggleCompleted(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`,
                { id: props.id, listType: "completed" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setToggleCompleted(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      case "CurrentlyWatchingList":
        currentlyWatchingList.includes(props.id)
          ? setToggleWatching(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`,
                { id: props.id, listType: "currentlyWatching" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setToggleWatching(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      case "PlanToWatchList":
        planToWatchList.includes(props.id)
          ? setTogglePlanToWatch(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`,
                { id: props.id, listType: "plan to watch" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setTogglePlanToWatch(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      default:
        break;
    }
  }

  return (
    <div id="list">
      {toggleFav ? (
        <button disabled className="btn">
          In favorites
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("FavoritesList");
          }}
        >
          Favorites
        </button>
      )}
      {toggleWatching ? (
        <button disabled className="btn">
          In Watching
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("CurrentlyWatchingList");
          }}
        >
          Currently Watching
        </button>
      )}

      {toggleCompleted ? (
        <button disabled className="btn">
          In completed
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("CompletedList");
          }}
        >
          Completed
        </button>
      )}

      {togglePlanToWatch ? (
        <button disabled className="btn">
          In Plan to watch
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("PlanToWatchList");
          }}
        >
          Plan To Watch
        </button>
      )}
    </div>
  );
}
export default AddToList;
