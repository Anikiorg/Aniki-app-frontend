import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
function AddToList(props) {
  const { user } = useContext(AuthContext);

  function handleAdd(optionType) {
    
    switch (optionType) {
      
      case "FavoritesList":
        axios
          .put(`http://localhost:5005/api/users/${user.userName}`, {id: props.id, listType: "favorites"})
          .then((response) => {
              console.log("added")
            })
          .catch((err) => err);
      break;

      case "CompletedList":
        axios
          .put(`http://localhost:5005/api/users/${user.userName}`, {id: props.id, listType: "completed"})
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "CurrentlyWatchingList":
        axios
          .put(
            `http://localhost:5005/api/users/${user.userName}`, {id: props.id, listType: "currently watching"},
            user.currentlyWatchingList
          )
          .then((response) => {
            console.log("added")
          })
          .catch((err) => err);
      break;

      case "PlanToWatchList":
        axios
          .put(
            `http://localhost:5005/api/users/${user.userName}`, {id: props.id, listType: "plan to watch"},
            user.planToWatchList
          )
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
        onClick={() => {
          handleAdd("FavoritesList");
        }}
      >
        Add to Favorites
      </button>
      <button
        onClick={() => {
          handleAdd("CompletedList");
        }}
      >
        Add to Completed
      </button>
      <button
        onClick={() => {
          handleAdd("CurrentlyWatchingList");
        }}
      >
        Add to Currently Watching
      </button>
      <button
        onClick={() => {
          handleAdd("PlanToWatchList");
        }}
      >
        Add to Plan To Watch
      </button>
    </>
  );
}
export default AddToList;
