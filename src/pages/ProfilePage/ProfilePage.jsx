import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";
import "./ProfilePage.css";
import CompletedList from "../../components/CompletedList"
import PlanToWatchList from "../../components/PlanToWatchList"
import CurrentlyWatchingList from "../../components/CurrentlyWatchingList"
import FavoritesList from "../../components/FavoritesList"

function ProfilePage() {
  const { user } = useContext(AuthContext)
  const [toggleFavoritesList, setToggleFavoritesList] = useState(false)
  const [togglePlanToWatchList, setTogglePlanToWatchList] = useState(false)
  const [toggleCurrentlyWatchingList, setToggleCurrentlyWatchingList] = useState(false)
  const [toggleCompletedList, setToggleCompletedList] = useState(false)
  
function handleToggleFavoritesList() { 
  if (toggleFavoritesList === false) {
    setToggleFavoritesList(true)
    setTogglePlanToWatchList(false) 
    setToggleCurrentlyWatchingList(false) 
    setToggleCompletedList(false)
  }
}
function handleTogglePlanToWatchList() { 
  if (togglePlanToWatchList === false) {
    setTogglePlanToWatchList(true)
    setToggleFavoritesList(false)
    setToggleCurrentlyWatchingList(false) 
    setToggleCompletedList(false)
  }
}
function handleToggleCurrentlyWatchingList() { 
  if (toggleCurrentlyWatchingList === false) {
    setToggleCurrentlyWatchingList(true)
    setTogglePlanToWatchList(false)
    setToggleCompletedList(false)
    setToggleFavoritesList(false)
  }
}
function handleToggleCompletedList() {
  if (toggleCompletedList === false) {
    setToggleCompletedList(true)
    setToggleFavoritesList(false)
    setToggleCurrentlyWatchingList(false)
    setTogglePlanToWatchList(false)
  } 
}


      return (
        <>
  <div>
      <h1>Profile page</h1>
      <h2>
        {user.userName}
        </h2>
      <p>
        {user.email}
        </p>
  </div>
  <button>Edit profile</button>


  <button onClick={handleToggleFavoritesList}>Favorites</button>
  <button onClick={handleToggleCompletedList}>Completed</button>
  <button onClick={handleToggleCurrentlyWatchingList}>Currently watching</button>
  <button onClick={handleTogglePlanToWatchList}>Plan to watch</button>
  {toggleFavoritesList && <FavoritesList/>}
  {toggleCompletedList && <CompletedList/>}
  {toggleCurrentlyWatchingList && <CurrentlyWatchingList/>}
  {togglePlanToWatchList && <PlanToWatchList/>}
        </>
  );
}
  
  export default ProfilePage;
