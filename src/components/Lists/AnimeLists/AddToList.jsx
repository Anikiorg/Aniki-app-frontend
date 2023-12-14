import { useContext } from "react";
import { AuthContext } from "../../../context/auth.context";
import axios from "axios";
function AddToList(props) {
  const { user } = useContext(AuthContext);

  const storedToken = localStorage.getItem("authToken");
  function handleAdd(optionType) {
    
    switch (optionType) {
      
      case "FavoritesList":
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "favorites"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
              console.log("added")
            })
          .catch((err) => err);
      break;

      case "CompletedList":
        axios
          .put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "completed"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "CurrentlyWatchingList":
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeadd`, {id: props.id, listType: "currentlyWatching"}, { headers: { Authorization: `Bearer ${storedToken}` }})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "PlanToWatchList":
        axios
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
    <>
      <button
      style={{margin:"1px"}}
        className="btn"
        onClick={() => {
          handleAdd("FavoritesList");
        }}
      >
        Favorites
      </button>

      <button
      style={{margin:"1px"}}
        className="btn"
        onClick={() => {
          handleAdd("CompletedList");
        }}
      >
       Completed
      </button>

      <button
      style={{margin:"1px"}}
        className="btn"
        onClick={() => {
          handleAdd("CurrentlyWatchingList");
        }}
      >
        Currently Watching
      </button>

      <button
      style={{margin:"1px"}}
        className="btn"
        onClick={() => {
          handleAdd("PlanToWatchList");
        }}
      >
        Plan To Watch
      </button>
    </>
  );
}
export default AddToList;
