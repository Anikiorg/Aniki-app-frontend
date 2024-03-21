import { AuthContext } from "../context/auth.context";
import { useContext, useState } from "react";

import "../styles/pages/ProfilePage.css";

import FavoriteAnimeList from "../components/Lists/AnimeLists/FavoritesList";
import FavoriteMangaList from "../components/Lists/MangaLists/FavoritesList";
import CompletedAnimeList from "../components/Lists/AnimeLists/CompletedList";
import CompletedMangaList from "../components/Lists/MangaLists/CompletedList";
import CurrentlyWatchingAnimeList from "../components/Lists/AnimeLists/CurrentlyWatchingList";
import CurrentlyReadingMangaList from "../components/Lists/MangaLists/CurrentlyReadingList";
import PlanToWatchAnimeList from "../components/Lists/AnimeLists/PlanToWatchList";
import PlanToReadMangaList from "../components/Lists/MangaLists/PlanToReadList";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  const [isAnime, setIsAnime] = useState(true);

  const [toggleFavoritesList, setToggleFavoritesList] = useState(true);
  const [toggleCompletedList, setToggleCompletedList] = useState(false);
  const [toggleCurrentlyWatchingList, setToggleCurrentlyWatchingList] = useState(false);
  const [togglePlanToWatchList, setTogglePlanToWatchList] = useState(false);

  const handleContentType = () => {
    console.log("clicked");
    setIsAnime(!isAnime);
  };

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
    <div className="profile-page">
{/*       <div>
        <div className="collapse bg-base-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="max"
            height="74"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium ">
            {user.userName}
          </div>
          <div className="collapse-content">
            <p>Email: {user.email}</p>
            
          </div>
        </div>
      </div> */}

      <button
        className="toggle-content"
        onClick={() => {
          handleContentType();
        }}
      >
        {isAnime ? <p>Anime?</p> : <p>Manga?</p>}
      </button>

      <div>

        <button
          className="btn"
          onClick={() => {
            handleToggle("FavoriteList");
          }}
        >
          Favorites
        </button>

        <button
          className="btn"
          onClick={() => {
            handleToggle("CompletedList");
          }}
        >
          Completed
        </button>

        <button
          className="btn"
          onClick={() => {
            handleToggle("CurrentlyWatchingList");
          }}
        >
          {isAnime ? <p>Currently watching</p> : <p>Currently reading</p>}
        </button>

        <button
          className="btn"
          onClick={() => {
            handleToggle("PlanToWatchList");
          }}
        >
          {isAnime ? <p>Plan to watch</p> : <p>Plan to read</p>}
        </button>
        </div>

<div className="profile-lists">

        {(isAnime && toggleFavoritesList && <FavoriteAnimeList />) ||
          (!isAnime && toggleFavoritesList && <FavoriteMangaList />)}

        {(isAnime && toggleCompletedList && <CompletedAnimeList />) ||
          (!isAnime && toggleCompletedList && <CompletedMangaList />)}

        {(isAnime && toggleCurrentlyWatchingList && (
          <CurrentlyWatchingAnimeList />
          )) ||
          (!isAnime && toggleCurrentlyWatchingList && (
            <CurrentlyReadingMangaList />
            ))}

        {(isAnime && togglePlanToWatchList && <PlanToWatchAnimeList />) ||
          (!isAnime && togglePlanToWatchList && <PlanToReadMangaList />)}
   
            </div>
    </div>
  );
}

export default ProfilePage;
