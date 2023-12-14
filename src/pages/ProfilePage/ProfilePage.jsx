import { AuthContext } from "../../context/auth.context";
import { useContext, useState } from "react";

import "./ProfilePage.css";

import FavoriteAnimeList from "../../components/Lists/AnimeLists/FavoritesList";
import FavoriteMangaList from "../../components/Lists/MangaLists/FavoritesList";
import CompletedAnimeList from "../../components/Lists/AnimeLists/CompletedList";
import CompletedMangaList from "../../components/Lists/MangaLists/CompletedList";
import CurrentlyWatchingAnimeList from "../../components/Lists/AnimeLists/CurrentlyWatchingList";
import CurrentlyReadingMangaList from "../../components/Lists/MangaLists/CurrentlyReadingList";
import PlanToWatchAnimeList from "../../components/Lists/AnimeLists/PlanToWatchList";
import PlanToReadMangaList from "../../components/Lists/MangaLists/PlanToReadList";

function ProfilePage() {
  
  const { user } = useContext(AuthContext);
  
  const [isAnime, setIsAnime] = useState(true)

  const [toggleFavoritesList, setToggleFavoritesList] = useState(true);
  const [toggleCompletedList, setToggleCompletedList] = useState(false);
  const [toggleCurrentlyWatchingList, setToggleCurrentlyWatchingList] = useState(false);
  const [togglePlanToWatchList, setTogglePlanToWatchList] = useState(false);

  const handleContentType = () => {
    console.log("clicked");
    setIsAnime(!isAnime)
  }

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
      
      <button className="btn" onClick={() => {handleContentType()}}>{isAnime ? <p>Anime</p> : <p>Manga</p>}</button>
      <br />
      
      {isAnime ? <p>anime</p> : <p>manga</p>}
      <>
        <button className="btn" onClick={() => {handleToggle("FavoriteList")}}>
          Favorites
        </button>

        <button className="btn" onClick={() => {handleToggle("CompletedList")}}>
          Completed
        </button>
        
        <button className="btn" onClick={() => {handleToggle("CurrentlyWatchingList")}}>
        {isAnime ? <p>Currently watching</p> : <p>Currently reading</p>}
        </button>
        
        <button className="btn" onClick={() => {handleToggle("PlanToWatchList")}}>
        {isAnime ? <p>Plan to watch</p> : <p>Plan to read</p>}
        </button>

        {(isAnime && toggleFavoritesList) && <FavoriteAnimeList /> ||
        (!isAnime && toggleFavoritesList) && <FavoriteMangaList />}

        {(isAnime && toggleCompletedList) && <CompletedAnimeList /> ||
        (!isAnime && toggleCompletedList) && <CompletedMangaList />}

        {(isAnime && toggleCurrentlyWatchingList) && <CurrentlyWatchingAnimeList /> ||
        (!isAnime && toggleCurrentlyWatchingList) && <CurrentlyReadingMangaList />}

        {(isAnime && togglePlanToWatchList) && <PlanToWatchAnimeList /> ||
        (!isAnime && togglePlanToWatchList) && <PlanToReadMangaList />}
      </>
  

    </>
  );
}

export default ProfilePage;
