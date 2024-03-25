import "../../../styles/pages/ListPage.css";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";

function AddToList(props) {
  const { user } = useContext(AuthContext);
  const [favoritesList, setFavoritesList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [currentlyReadingList, setCurrentlyReadingList] = useState([]);
  const [planToReadList, setPlanToReadList] = useState([]);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleCompleted, setToggleCompleted] = useState(false);
  const [togglePlanToRead, setTogglePlanToRead] = useState(false);
  const [toggleReading, setToggleReading] = useState(false);
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}`)
      .then((response) => {
        setFavoritesList(
          response.data.mangaLists.favorites.map((elm) => elm._id)
        );
        setCompletedList(
          response.data.mangaLists.completed.map((elm) => elm._id)
        );
        setCurrentlyReadingList(
          response.data.mangaLists.reading.map((elm) => elm._id)
        );
        setPlanToReadList(
          response.data.mangaLists.planToRead.map((elm) => elm._id)
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
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
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
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "completed" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setToggleCompleted(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      case "CurrentlyReadingList":
        currentlyReadingList.includes(props.id)
          ? setToggleReading(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "currently reading" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setToggleReading(true);
                console.log("Added");
              })
              .catch((err) => err);
        break;

      case "PlanToReadList":
        planToReadList.includes(props.id)
          ? setTogglePlanToRead(true) && console.log("Already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "plan to read" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                setTogglePlanToRead(true);
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
        <button disabled className="btn">In favorites</button>
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

      {toggleCompleted ? (
        <button disabled className="btn">In Completed</button>
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
      {toggleReading ? (
        <button disabled className="btn">In Currently Reading</button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("CurrentlyReadingList");
          }}
        >
          Currently Reading
        </button>
      )}
      {togglePlanToRead ? (
        <button disabled className="btn">In Plan to read</button>
      ) : (
        <button
          className="btn"
          onClick={() => {
            handleAdd("PlanToReadList");
          }}
        >
          Plan To Read
        </button>
      )}
    </div>
  );
}
export default AddToList;
