import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom"
function AnimeUpdate(props) {
  /* form state vars */
  const [nameJP, setNameJP] = useState(props.animeDetails.name.nameJP);
  const [nameEN, setNameEN] = useState(props.animeDetails.name.nameEN);
  const [description, setDescription] = useState(
    props.animeDetails.description
  );
  const [imageURL, setImageURL] = useState(props.animeDetails.imageURL);
  const [episodes, setEpisodes] = useState(props.animeDetails.episodes);
  const [genre, setGenre] = useState(props.animeDetails.genre);
  const [status, setStatus] = useState(props.animeDetails.status);
  const [premiered, setPremiered] = useState(props.animeDetails.premiered);
  const [studios, setStudios] = useState(props.animeDetails.studios);
  const [ageRating, setAgeRating] = useState(props.animeDetails.ageRating);
  const name = { nameEN, nameJP };

  const storedToken = localStorage.getItem("authToken");
  
  const navigate = useNavigate()

  const updatedAnime = {
    name,
    description,
    imageURL,
    episodes,
    genre,
    status,
    premiered,
    studios,
    ageRating,
  };

  const handleSubmit = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/animes/${props.animeDetails._id}`,
        updatedAnime,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        console.log("anime updated");
        
        navigate(`/anime/${props.animeDetails._id}`)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="label">
              <span className="label-text">Enter Japanese title</span>
            </div>
            <input
              type="text"
              name="nameJP"
              value={nameJP}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setNameJP(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Enter english title</span>
            </div>
            <input
              type="text"
              name="nameEN"
              value={nameEN}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setNameEN(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Enter description</span>
            </div>
            <input
              type="text"
              name="description"
              value={description}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setDescription(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Add image URL</span>
            </div>
            <input
              type="text"
              name="imgURL"
              value={imageURL}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setImageURL(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Select genre</span>
            </div>

            <select
              name="genre"
              value={genre}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>--</option>
              <option>All Anime</option>
              <option>Action</option>
              <option>Comedy</option>
              <option>Adventure</option>
              <option>Drama</option>
              <option>Horror</option>
              <option>Fantasy</option>
              <option>Mystery</option>
              <option>Romance</option>
              <option>Sci-Fi</option>
              <option>Slice of Life</option>
              <option>Sports</option>
              <option>Supernatural</option>
              <option>Suspense</option>
              <option>Gore</option>
            </select>

            <br />

            <div className="label">
              <span className="label-text">Enter number of episodes</span>
            </div>
            <input
              type="number"
              name="episodes"
              value={episodes}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEpisodes(e.target.value)}
            />

            <br />
            <div className="label">
              <span className="label-text">Select status</span>
            </div>
            <select
              name="status"
              value={status}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>--</option>
              <option>Airing Now</option>
              <option>Finished Airing</option>
              <option>Upcoming</option>
            </select>

            <br />

            {/* maybe 2 (type: list) >> season + year */}
            <div className="label">
              <span className="label-text">Add date of premiere</span>
            </div>
            <input
              type="text"
              name="premiered"
              value={premiered}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPremiered(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Select age rating</span>
            </div>
            <select
              name="ageRating"
              value={ageRating}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setAgeRating(e.target.value)}
            >
              <option>--</option>
              <option>E - Everyone / A - All Ages</option>
              <option>T - Teens, Age 13+</option>
              <option>OT - Older Teens, Age 16+</option>
              <option>M - Mature, Age 18+</option>
            </select>

            <br />

            <div className="label">
              <span className="label-text">Add producing studios</span>
            </div>
            <input
              type="text"
              name="studios"
              value={studios}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setStudios(e.target.value)}
            />

            <br />

            <button className="btn" style={{ marginTop: "15px" }} onClick={handleSubmit} type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnimeUpdate;
