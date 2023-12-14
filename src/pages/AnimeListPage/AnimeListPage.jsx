import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimeCreate from "../../components/Anime/AnimeCreate";
import AddToList from "../../components/Lists/AnimeLists/AddToList";
import { AuthContext } from "../../context/auth.context";
import "./AnimeListPage.css";

function AnimeListPage() {
  const [animeList, setAnimeList] = useState([]);
  const [animeBackup, setAnimeBackup] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const { user } = useContext(AuthContext);

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
        console.log(animeList);
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
      {user && user.typeOfUser === "admin" && (
        <button className="btn" onClick={handleToggle}>
          Add anime
        </button>
      )}
      {toggle && <AnimeCreate />}
      {/*SEARCH BAR*/}
      <div className="flex center">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Search:</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            onChange={(e) => handleChange(e)}
            className="input input-bordered w-full max-w-xs"
            value={input}
          />
        </label>

        <div className="center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Filter by genre:</span>
            </div>
            <select className="select select-bordered" onChange={handleSelect}>
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

            <div className="label"></div>
          </label>
        </div>
      </div>

      {/*RENDER FILTERED AND SEARCHED ANIME + ADD TO LIST + DETAILS PAGE*/}
      <>
        {searchedList.map((anime) => {
          return (
            <div key={anime._id}>
              <div className="card card-margin lg:card-side bg-base-100 shadow-xl">
                <figure>
                  <img src={anime.imageURL} alt="animeImg" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{anime.name.nameEN}</h2>
                  {anime.name.nameEN !== anime.name.nameJP &&
                  <h2 className="card-title">{anime.name.nameJP}</h2>
                  }
                  <p>Genre: {anime.genre}</p>
                  <p>Episodes: {anime.episodes}</p>
                  <p>Status: {anime.status}</p>
                  <p>Age rating: {anime.ageRating}</p>
                  <Link to={`/animes/${anime._id}`}>
                    {" "}
                    <button className="btn">See more</button>{" "}
                  </Link>
                  {user && <div className="card-actions justify-end">
                    <div className="dropdown dropdown-left dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        Add
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li><AddToList id={anime._id} /></li>
                      </ul>
                    </div>
                  </div>}
                </div>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
}

export default AnimeListPage;
