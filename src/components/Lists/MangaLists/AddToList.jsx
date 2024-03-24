import { useContext, useState } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";

import "../../../styles/pages/ListPage.css";
function AddToList(props) {
  const { user } = useContext(AuthContext);

  const [favoritesList, setFavoritesList] = useState(null);
  const [completedList, setCompletedList] = useState(null);
  const [currentlyReadingList, setCurrentlyReadingList] = useState(null);
  const [planToReadList, setPlanToReadList] = useState(null);

  const storedToken = localStorage.getItem("authToken");

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

  function handleAdd(optionType) {
    switch (optionType) {
      case "FavoritesList":
        favoritesList.includes(props.id)
          ? console.log("already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "favorites" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                console.log("added");
              })
              .catch((err) => err);
        break;

      case "CompletedList":
        completedList.includes(props.id)
          ? console.log("already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "completed" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                console.log("added");
              })
              .catch((err) => err);
        break;

      case "CurrentlyReadingList":
        currentlyReadingList.includes(props.id)
          ? console.log("already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "currently reading" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                console.log("added");
              })
              .catch((err) => err);
        break;

      case "PlanToReadList":
        planToReadList.includes(props.id)
          ? console.log("already in list")
          : axios
              .put(
                `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`,
                { id: props.id, listType: "plan to read" },
                { headers: { Authorization: `Bearer ${storedToken}` } }
              )
              .then((response) => {
                console.log("added");
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
          handleAdd("CompletedList");
        }}
      >
        Completed
      </button>

      <button
        className="btn"
        onClick={() => {
          handleAdd("CurrentlyReadingList");
        }}
      >
        Currently Reading
      </button>

      <button
        className="btn"
        onClick={() => {
          handleAdd("PlanToReadList");
        }}
      >
        Plan To Read
      </button>
    </div>
  );
}
export default AddToList;
