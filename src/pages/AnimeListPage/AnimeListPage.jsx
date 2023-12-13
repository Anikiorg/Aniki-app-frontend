import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimeCreate from "../../components/Anime/AnimeCreate";
import AddToList from "../../components/Lists/AnimeLists/AddToList";
import { AuthContext } from "../../context/auth.context";

function AnimeListPage() {
  const [animeList, setAnimeList] = useState([]);
  const [animeBackup, setAnimeBackup] = useState([]);
  const [searchedList, setSearchedList] = useState([])
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
      case "Slice of life":
        filteredArray = animeBackup.filter((anime) => {
          return anime.genre.includes("Slice of life");
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

      {/*TOGGLE ADD ANIME FORM*/}
    
        {user && user.typeOfUser === "admin" && (
          <button onClick={handleToggle}>Add anime</button>
          )}
        {toggle && <AnimeCreate />}
        <br />
 

      {/*SELECT FOR CATEGORIES, CALLS HANDLE SELECT */}
        <label>Filter by genre:</label>
        <select onChange={handleSelect}>
          <option value="All Anime">All Anime</option>
          <option value="Comedy">Comedy</option>
          <option value="Slice of life">Slice of life</option>
          <option value="Action">Shounen</option>
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

      {/*RENDER FILTERED AND SEARCHED ANIME + ADD TO LIST + DETAILS PAGE*/}
      <>
        {searchedList.map((anime) => {
          return (
            <div key={anime._id}>
              <h1>Anime</h1>

              <h1>{anime.name.nameJP}</h1>

              <p>{anime.imageURL}</p>
              <p>{anime.genre}</p>
              <p>{anime.rating}</p>

              <Link to={`/animes/${anime._id}`}>
                {" "}
                <button>See more</button>{" "}
              </Link>
              <AddToList id={anime._id} />
              <hr />
            </div>
          );
        })}
      </>
    </>
  );
}

export default AnimeListPage;
