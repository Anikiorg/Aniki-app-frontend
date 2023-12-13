import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";

import "./ProfilePage.css";

import CompletedList from "../../components/Lists/AnimeLists/CompletedList";
import PlanToWatchList from "../../components/Lists/AnimeLists/PlanToWatchList";
import CurrentlyWatchingList from "../../components/Lists/AnimeLists/CurrentlyWatchingList";
import FavoritesList from "../../components/Lists/AnimeLists/FavoritesList";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const [toggleFavoritesList, setToggleFavoritesList] = useState(true);
  const [toggleCompletedList, setToggleCompletedList] = useState(false);
  const [toggleCurrentlyWatchingList, setToggleCurrentlyWatchingList] =
    useState(false);
  const [togglePlanToWatchList, setTogglePlanToWatchList] = useState(false);

  function handleToggle(optionType) {
    
    setToggleFavoritesList(false);
    setToggleCompletedList(false);
    setToggleCurrentlyWatchingList(false);
    setTogglePlanToWatchList(false);

    switch (optionType) {
      case "FavoriteList":
        setToggleFavoritesList(true);
        break;
      case "CompletedList":
        setToggleCompletedList(true);
        break;
      case "CurrentlyWatchingList":
        setToggleCurrentlyWatchingList(true);
        break;
      case "PlanToWatchList":
        setTogglePlanToWatchList(true);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div>
        <h1>Profile page</h1>
        <h2>{user.userName}</h2>
        <p>{user.email}</p>
      </div>
      <>
        <button
          onClick={() => {
            handleToggle("FavoriteList");
          }}
        >
          Favorites
        </button>

        <button
          onClick={() => {
            handleToggle("CompletedList");
          }}
        >
          Completed
        </button>
        <button
          onClick={() => {
            handleToggle("CurrentlyWatchingList");
          }}
        >
          Currently watching
        </button>
        <button
          onClick={() => {
            handleToggle("PlanToWatchList");
          }}
        >
          Plan to watch
        </button>

        {toggleFavoritesList && <FavoritesList />}
        {toggleCompletedList && <CompletedList />}
        {toggleCurrentlyWatchingList && <CurrentlyWatchingList />}
        {togglePlanToWatchList && <PlanToWatchList />}
      
     
      </>
      <>
      </>


    </>
  );
}

export default ProfilePage;
