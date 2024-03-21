import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimeCreate from "../components/Anime/AnimeCreate";
import AddToList from "../components/Lists/AnimeLists/AddToList";
import { AuthContext } from "../context/auth.context";
import "../styles/pages/ListPage.css";


import Loading from "../components/Loading";
function AnimeListPage() {
  const [animeList, setAnimeList] = useState([]);
  const [animeBackup, setAnimeBackup] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  //TOGGLE FOR ADD ANIME
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //SET ANIME LIST AND BACKUP WITH .GET
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/animes`)
      .then((response) => {
        setAnimeList(response.data);
        setAnimeBackup(response.data);
       
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // SETS ANIMELIST TO FILTERED ANIME (BY GENRE) AND RENDERS IT
  let filteredArray;
  const handleSelect = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "All Anime":
        setAnimeList(animeBackup);
        break;
      case "Action":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Action");
        });
        setAnimeList(filteredArray);
        break;
      case "Comedy":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Comedy");
        });
        setAnimeList(filteredArray);
        break;
      case "Adventure":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Adventure");
        });
        setAnimeList(filteredArray);
        break;
      case "Drama":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Drama");
        });
        setAnimeList(filteredArray);
        break;
      case "Horror":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Horror");
        });
        setAnimeList(filteredArray);
        break;
      case "Fantasy":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Fantasy");
        });
        setAnimeList(filteredArray);
        break;
      case "Mystery":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Mystery");
        });
        setAnimeList(filteredArray);
        break;
      case "Romance":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Romance");
        });
        setAnimeList(filteredArray);
        break;
      case "Sci-Fi":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Sci-Fi");
        });
        setAnimeList(filteredArray);
        break;
      case "Slice of Life":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Slice of Life");
        });
        setAnimeList(filteredArray);
        break;
      case "Sports":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Sports");
        });
        setAnimeList(filteredArray);
        break;
      case "Supernatural":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Supernatural");
        });
        setAnimeList(filteredArray);
        break;
      case "Suspense":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Suspense");
        });
        setAnimeList(filteredArray);
        break;
      case "Gore":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Gore");
        });
        setAnimeList(filteredArray);
        break;
    }
  };

  //SET SEARCH BAR INPUT AND PREVENT DEFAULT
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // IN CASE OF INPUT SEARCH INSIDE FILTERED ANIMELIST, SET SEARCHED LIST TO MATCHING ANIME
  useEffect(() => {
    const filtered = [...animeList].filter((current) =>
      input
        ? current.name.nameEN.toLowerCase().includes(input.toLowerCase()) ||
          current.name.nameJP.toLowerCase().includes(input.toLowerCase())
        : current
    );
    setSearchedList(filtered);
  }, [input, animeList]);

  return (
    <>
      <div className="switch">
        {user && user.typeOfUser === "admin" && (
          <>
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Add anime
            </button>

            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <AnimeCreate />
              </div>
            </dialog>
          </>
        )}

        {toggle && <AnimeCreate />}
      </div>

      {/*SEARCH BAR*/}
      <div className="search">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="input"
          placeholder="Search"
          value={input}
        />
        <select
          onChange={handleSelect}
          className="select select-bordered join-item"
        >
          <option disabled selected>
            Filter
          </option>
          <option value="All Anime">All Anime</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Adventure">Adventure</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Sci-Fi">Slice of Life</option>
          <option value="Sports">Sports</option>
          <option value="Supernatural">Supernatural</option>
          <option value="Suspense">Suspense</option>
          <option value="Gore">Gore</option>
        </select>
      </div>

      {/*RENDER FILTERED AND SEARCHED ANIME + ADD TO LIST + DETAILS PAGE*/}


      
          {loading ? (
            <Loading/>
          ) :(

         
      <div className="anime-page">
        {searchedList.map((anime) => {
          return (
            <div key={anime._id} className="card">
              <img src={anime.imageURL} alt="animeImg" />

              <div className="card-content">
                <h2>{anime.name.nameEN}</h2>
                {anime.name.nameEN !== anime.name.nameJP && (
                  <h2>{anime.name.nameJP}</h2>
                )}
                <p>Genre: {anime.genre}</p>
                <p>Episodes: {anime.episodes}</p>
                <p>Status: {anime.status}</p>
                <p>Age rating: {anime.ageRating}</p>
                <Link to={`/animes/${anime._id}`}>
                  {" "}
                  <button className="btn">See more</button>{" "}
                </Link>
                {user && (
                  <div className="card-actions justify-end">
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById(anime._id).showModal()
                      }
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-bookmark"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                      </svg>
                    </button>

                    <dialog id={anime._id} className="modal">
                      <div className="modal-box">
                        <AddToList id={anime._id} />
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
       )
      }
    </>
  );
}

export default AnimeListPage;
