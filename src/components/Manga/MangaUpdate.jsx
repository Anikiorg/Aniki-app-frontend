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
              <option>Sports</option>
              <option>Supernatural</option>
              <option>Suspense</option>
              <option>Gore</option>
              </select>
          <br />

          <div className="label">
              <span className="label-text">Enter number of Volumes</span>
            </div>
          <input
            type="number"
            name="volumes"
            value={volumes}
            onChange={(e) => setVolumes(e.target.value)}
          />

          <br />
          <div className="label">
              <span className="label-text">Select status</span>
            </div>
          <label>Status: </label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>--</option>
            <option>Publishing</option>
            <option>Finished publishing</option>
            <option>Upcoming</option>
          </select>

          <br />

          {/* maybe 2 (type: list) >> season + year */}
          <div className="label">
              <span className="label-text">Add date of publishing</span>
            </div>
          <input
            type="text"
            name="published"
            value={published}
            onChange={(e) => setPublished(e.target.value)}
          />

          <br />

         
          <div className="label">
              <span className="label-text">Select age rating</span>
            </div>
          <select
            name="ageRating"
            value={ageRating}
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
              <span className="label-text">Add authors</span>
            </div>
          <input
            type="text"
            name="authors"
            value={authors}
            onChange={(e) => setAuthors(e.target.value)}
          />

          <br />

          <button className="btn" style={{ marginTop: "15px" }} type="submit">Save</button>
        </form>
</div>
</div>
</div>
  );
}

export default MangaUpdate;
