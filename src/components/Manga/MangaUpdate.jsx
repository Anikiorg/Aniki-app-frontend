import axios from "axios";
import { useState } from "react";

function MangaUpdate(props) {
  /* form state vars */
  const [nameJP, setNameJP] = useState(props.mangaDetails.name.nameJP);
  const [nameEN, setNameEN] = useState(props.mangaDetails.name.nameEN);
  const [description, setDescription] = useState(props.mangaDetails.description);
  const [imageURL, setImageURL] = useState(props.mangaDetails.imageURL);
  const [volumes, setVolumes] = useState(props.mangaDetails.volumes);
  const [genre, setGenre] = useState(props.mangaDetails.genre);
  const [status, setStatus] = useState(props.mangaDetails.status);
  const [published, setPublished] = useState(props.mangaDetails.published);
  const [authors, setAuthors] = useState(props.mangaDetails.authors);
  const [ageRating, setAgeRating] = useState(props.mangaDetails.ageRating);
  const name = { nameEN, nameJP };
  
  const storedToken = localStorage.getItem("authToken");

  const updatedManga = {
    name,
    description,
    imageURL,
    volumes,
    genre,
    status,
    published,
    authors,
    ageRating,
  };

  const handleSubmit = () => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/mangas/${props.mangaDetails._id}`,
        updatedManga,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        console.log("manga updated");
      })
      .catch((err) => console.log(err));
  };

  return (
    /* retain original info */
        <form onSubmit={handleSubmit}>
          <label>Japanese name: </label>
          <input
            type="text"
            name="nameJP"
            value={nameJP}
            onChange={(e) => setNameJP(e.target.value)}
          />

          <br />

          <label>English name: </label>
          <input
            type="text"
            name="nameEN"
            value={nameEN}
            onChange={(e) => setNameEN(e.target.value)}
          />

          <br />

          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br />

          <label>Image URL: </label>
          <input
            type="text"
            name="imgURL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />

          <br />

          <label>Genre: </label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />

          <br />

          <label>Volumes: </label>
          <input
            type="number"
            name="volumes"
            value={volumes}
            onChange={(e) => setVolumes(e.target.value)}
          />

          <br />

          <label>Status: </label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>-- Select status --</option>
            <option>Publishing</option>
            <option>Finished publishing</option>
            <option>Upcoming</option>
          </select>

          <br />

          {/* maybe 2 (type: list) >> season + year */}
          <label>Published: </label>
          <input
            type="text"
            name="published"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          />

          <br />

          <label>Age rating: </label>
          <select
            name="ageRating"
            value={ageRating}
            onChange={(e) => setAgeRating(e.target.value)}
          >
            <option>-- Add age rating --</option>
            <option>E - Everyone / A - All Ages</option>
            <option>T - Teens, Age 13+</option>
            <option>OT - Older Teens, Age 16+</option>
            <option>M - Mature, Age 18+</option>
          </select>

          <br />

          <label>Authors: </label>
          <input
            type="text"
            name="authors"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />

          <br />

          <button type="submit">Save</button>
        </form>
  );
}

export default MangaUpdate;
