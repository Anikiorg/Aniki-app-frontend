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
  
  function handleToggle(optionType) {
    setTogglePlanToWatchList(false)
    setToggleFavoritesList(false)
    setToggleCurrentlyWatchingList(false) 
    setToggleCompletedList(false)

    switch (optionType) {
      case "FavoriteList":
        setToggleFavoritesList(true)
        break;
      case "PlanToWatchList":
      setTogglePlanToWatchList(true)
        break;
      case "CurrentlyWatchingList":
        setToggleCurrentlyWatchingList(true)
        break
      case "CompletedList":
        setToggleCompletedList(true)
      default:
        break;
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


  <button onClick={()=> {handleToggle("FavoriteList")}}>Favorites</button>
  <button onClick={() => {handleToggle("CompletedList")}}>Completed</button>
  <button onClick={() => {handleToggle("CurrentlyWatchingList")}}>Currently watching</button>
  <button onClick={()=>{handleToggle("PlanToWatchList")}}>Plan to watch</button>
  
  {toggleFavoritesList && <FavoritesList/>}
  {toggleCompletedList && <CompletedList/>}
  {toggleCurrentlyWatchingList && <CurrentlyWatchingList/>}
  {togglePlanToWatchList && <PlanToWatchList/>}
        </>
  );
}
  
  export default ProfilePage;
