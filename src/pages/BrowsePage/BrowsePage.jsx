import { useState } from "react";
import AnimeListPage from "../AnimeListPage/AnimeListPage";
import MangaListPage from "../MangaListPage/MangaListPage";

function BrowsePage() {
  const [isAnime, setIsAnime] = useState(true);
  
  const handleContentType = () => {
    console.log("clicked");
    setIsAnime(!isAnime);
  };

  return (
    <div>
    <button className="btn" onClick={() => {handleContentType()}}>{isAnime ? <p>Anime</p> : <p>Manga</p>}</button> <br />

    {isAnime && <AnimeListPage/> || !isAnime && <MangaListPage/>}
    </div>
  );
}

export default BrowsePage
