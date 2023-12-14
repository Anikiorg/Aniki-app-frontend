import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import MangaCreate from "../../components/Manga/MangaCreate";
import AddToList from "../../components/Lists/MangaLists/AddToList";
import { AuthContext } from "../../context/auth.context";

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

      {user && user.typeOfUser === "admin" && (
        <button onClick={handleToggle}>Add manga</button>
      )}
      {toggle && <MangaCreate />}
      <br />

      {/*SELECT FOR CATEGORIES, CALLS HANDLE SELECT */}
      <label>Filter by genre:</label>
      <select onChange={handleSelect}>
        <option value="All Manga">All Manga</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Adventure">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
        <option value="Fantasy">Fantasy</option>
        <option value="Mystery">Mystery</option>
        <option value="Romance">Romance</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Sports">Sports</option>
        <option value="Supernatural">Supernatural</option>
        <option value="Suspense">Suspense</option>
        <option value="Gore">Gore</option>
      </select>
      <br />

      {/*SEARCH BAR*/}
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => handleChange(e)}
        value={input}
      />
      <br />

      {/*RENDER FILTERED AND SEARCHED MANGA + ADD TO LIST + DETAILS PAGE*/}
      <>
        {searchedList.map((manga) => {
          return (
            <div key={manga._id}>
              <h1>Manga</h1>

              <h1>{manga.name.nameJP}</h1>

              <p>{manga.imageURL}</p>
              <p>{manga.genre}</p>
              <p>{manga.rating}</p>

              <Link to={`/manga/${manga._id}`}>
                {" "}
                <button>See more</button>{" "}
              </Link>
              <AddToList id={manga._id} />
              <hr />
            </div>
          );
        })}
      </>
    </>
  );
}

export default MangaListPage;
