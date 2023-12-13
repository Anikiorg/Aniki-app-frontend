import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AnimeCreate from "../../components/Anime/AnimeCreate";
import AddToList from "../../components/Lists/AddToList";
import { AuthContext } from "../../context/auth.context";
function AnimeListPage() {
  const [animeList, setAnimeList] = useState([]);
  const [animeBackup, setAnimeBackup] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const { user } = useContext(AuthContext);


  
  const handleToggle = () => {
    setToggle(!toggle);
  };

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

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    const filtered = [...animeBackup].filter((current) =>
      input
        ? current.name.nameEN.toLowerCase().includes(input.toLowerCase()) ||
          current.name.nameJP.toLowerCase().includes(input.toLowerCase())
        : current
    );
    setAnimeList(filtered);
  }, [input]);

  const handleSelect = (e) => {
    console.log(e.target.value);
    let filteredArray;
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
        setAnimeList(filteredArray)
        break;
    }
  };

  return (
    <>
      {(user && user.typeOfUser === "admin") && <button onClick={handleToggle}>Add anime</button>}
      {toggle && <AnimeCreate />}
      <br />
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => handleChange(e)}
        value={input}
      />
      <br />

      <label>Filter by genre:</label>
      <select onChange={handleSelect}>
        <option value="All Anime">All Anime</option>
        <option value="Comedy">Comedy</option>
        <option value="Slice of life">Slice of life</option>
        <option value="Action">Shounen</option>
      </select>
      <br />

      <>
        {animeList.map((anime) => {
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
