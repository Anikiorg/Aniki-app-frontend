import "../styles/pages/HomePage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import AnimeListPage from "./AnimeListPage";
import MangaListPage from "./MangaListPage";

function HomePage() {
  const [isAnime, setIsAnime] = useState(true);

  const handleContentType = () => {
    console.log("clicked");
    setIsAnime(!isAnime);
  };

  return (
    <div className="home-page">
      <p className="blurb">
        Discover your next anime obsession with our comprehensive anime list
        site. Dive into a vast ocean of genres, from pulse-pounding action to
        heartwarming romance, meticulously curated for every anime aficionado.
        Explore fan-favorite classics and hidden gems alike, with detailed
        synopses, ratings, and reviews to guide your journey. Whether you're
        seeking the adrenaline rush of shonen battles or the intricate
        storytelling of slice-of-life dramas, our site is your gateway to the
        diverse and enchanting world of anime. Unleash your inner otaku and
        embark on a limitless adventure through our expansive catalog, where
        every click unveils a new realm of imagination and wonder.
      </p>
      <div className="toggle-content">
        <button
          onClick={() => {
            handleContentType();
          }}
        >
          {isAnime ? <p>Anime?</p> : <p>Manga?</p>}
        </button>{" "}
      </div>
        {(isAnime && <AnimeListPage />) || (!isAnime && <MangaListPage />)}
    </div>
  );
}

export default HomePage;
