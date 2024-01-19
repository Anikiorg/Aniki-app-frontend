import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";
import "./Lists.css"

function AddToList(props) {
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");
  function handleAdd(optionType) {
    
    switch (optionType) {
      
      case "FavoritesList":
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`, {id: props.id, listType: "favorites"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
              console.log("added")
            })
          .catch((err) => err);
      break;

      case "CompletedList":
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`, {id: props.id, listType: "completed"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "CurrentlyReadingList":
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`, {id: props.id, listType: "currently reading"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "PlanToReadList":
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/mangaadd`, {id: props.id, listType: "plan to read"},{ headers: { Authorization: `Bearer ${storedToken}` }})
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
