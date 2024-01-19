import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MangaCreate from "../../components/Manga/MangaCreate";
import AddToList from "../../components/Lists/MangaLists/AddToList";
import { AuthContext } from "../../context/auth.context";
import "./MangaListPage.css";

function MangaListPage() {
  const [mangaList, setMangaList] = useState([]);
  const [mangaBackup, setMangaBackup] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const { user } = useContext(AuthContext);

  //TOGGLE FOR ADD MANGA
  const handleToggle = () => {
    setToggle(!toggle);
  };

  //SET MANGA LIST AND BACKUP WITH .GET
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/manga`)
      .then((response) => {
        setMangaList(response.data);
        setMangaBackup(response.data);
        console.log(mangaList);
      })
      .catch((error) => console.log(error));
  }, []);

  // SETS MANGALIST TO FILTERED MANGA (BY GENRE) AND RENDERS IT
  let filteredArray;
  const handleSelect = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "All Manga":
        setMangaList(mangaBackup);
        break;
      case "Action":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Action");
        });
        setMangaList(filteredArray);
        break;
      case "Comedy":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Comedy");
        });
        setMangaList(filteredArray);
        break;
      case "Adventure":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Adventure");
        });
        setMangaList(filteredArray);
        break;
      case "Drama":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Drama");
        });
        setMangaList(filteredArray);
        break;
      case "Horror":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Horror");
        });
        setMangaList(filteredArray);
        break;
      case "Fantasy":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Fantasy");
        });
        setMangaList(filteredArray);
        break;
      case "Mystery":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Mystery");
        });
        setMangaList(filteredArray);
        break;
      case "Romance":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Romance");
        });
        setMangaList(filteredArray);
        break;
      case "Sci-Fi":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Sci-Fi");
        });
        setMangaList(filteredArray);
        break;
      case "Slice of Life":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Slice of Life");
        });
        setMangaList(filteredArray);
        break;
      case "Sports":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Sports");
        });
        setMangaList(filteredArray);
        break;
      case "Supernatural":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Supernatural");
        });
        setMangaList(filteredArray);
        break;
      case "Suspense":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Suspense");
        });
        setMangaList(filteredArray);
        break;
      case "Gore":
        filteredArray = mangaBackup.filter((manga) => {
          return manga.genre.includes("Gore");
        });
        setMangaList(filteredArray);
        break;
    }
  };

  //SET SEARCH BAR INPUT AND PREVENT DEFAULT
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // IN CASE OF INPUT SEARCH INSIDE FILTERED MANGALIST, SET SEARCHED LIST TO MATCHING MANGA
  useEffect(() => {
    const filtered = [...mangaList].filter((current) =>
      input
        ? current.name.nameEN.toLowerCase().includes(input.toLowerCase()) ||
          current.name.nameJP.toLowerCase().includes(input.toLowerCase())
        : current
    );
    setSearchedList(filtered);
  }, [input, mangaList]);

  return (
    <>
      {/*TOGGLE ADD MANGA FORM*/}

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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              Add manga
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <MangaCreate />
              </div>
            </dialog>
          </>
        )}
        {toggle && <MangaCreate />}
      </div>

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
          <option value="All Manga">All Manga</option>
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
          <button className="btn">Search</button>
      </div>

      {/*RENDER FILTERED AND SEARCHED MANGA + ADD TO LIST + DETAILS PAGE*/}
      <>
        {searchedList.map((manga) => {
          return (
            <div key={manga._id}>
              <div className="card border cards">
                <figure>
                  <img src={manga.imageURL} alt="animeImg" />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{manga.name.nameEN}</h2>
                  {manga.name.nameEN !== manga.name.nameJP && (
                    <h2 className="card-title">{manga.name.nameJP}</h2>
                  )}

                  <p>Genre: {manga.genre}</p>
                  <p>Volumes: {manga.volumes}</p>
                  <p>Status: {manga.status}</p>
                  <p>Age rating: {manga.ageRating}</p>

                  <Link to={`/manga/${manga._id}`}>
                    {" "}
                    <button className="btn">See more</button>{" "}
                  </Link>
                  <div className="card-actions justify-end">
                    {user && (
                      <div className="dropdown dropdown-left dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#000000"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-bookmark"
                          >
                            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                          </svg>
                        </div>
                        <ul
                          tabIndex={0}
                          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-50"
                        >
                          <li>
                            <AddToList id={manga._id} />
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    </>
  );
}

export default MangaListPage;
