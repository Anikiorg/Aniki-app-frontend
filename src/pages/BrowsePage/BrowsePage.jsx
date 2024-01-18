import { useState } from "react";
import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";
import BrowsePage from "./BrowsePage.css"
function BrowsePage() {
  const [isAnime, setIsAnime] = useState(true);
  
  const handleContentType = () => {
    console.log("clicked");
    setIsAnime(!isAnime);
  };

  return (
    <div>
    <button className="btn button" onClick={() => {handleContentType()}}>{isAnime ? <p>Anime</p> : <p>Manga</p>}</button> <br />

    {isAnime && <AnimeListPage/> || !isAnime && <MangaListPage/>}
    </div>
  );
}

export default BrowsePage
