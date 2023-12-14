import { useState } from "react"
import axios from "axios"

import service from "../../services/file-upload.service"

function AnimeCreate () {

    const [nameJP, setNameJP] = useState("")
    const [nameEN, setNameEN] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [episodes, setEpisodes] = useState("")
    const [genre, setGenre] = useState("")
    const [status, setStatus] = useState("")
    const [premiered, setPremiered] = useState("")
    const [studios, setStudios] = useState("")
    const [ageRating, setAgeRating] = useState("")
    const name = {nameJP, nameEN}
    const storedToken = localStorage.getItem("authToken");
        
    const handleFileUpload = async (e) => {
        e.preventDefault()
      // console.log("The file to be uploaded is: ", e.target.files[0]);
        try {
            const uploadData = new FormData();
      
            // imageUrl => this name has to be the same as in the model since we pass
            // req.body to .create() method when creating a new movie in '/api/movies' POST route
            uploadData.append("imageURL", imageURL);
      
            const image = await service.uploadImage(uploadData)
            handleSubmit(image)
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (image) => {

        const createdAnime = {
            name,
            description,
            imageURL: image.fileUrl,
            episodes,
            genre,
            status,
            premiered,
            studios,
            ageRating
        }

        axios.post(`${process.env.REACT_APP_API_URL}/api/animes`, createdAnime, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => {
            console.log(createdAnime)
            console.log("Anime created")
        })
        .catch((err) => console.log(err))
    }

  return (
    <div className="center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <form onSubmit={handleFileUpload}>
            <div className="label">
              <span className="label-text">Enter Japanese title</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
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
              placeholder="Type here"
              name="nameEN"
              value={nameEN}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setNameEN(e.target.value)}
            />

            <br />

            <div className="label">
              <span className="label-text">Enter description</span>
            </div>
            <textarea
              placeholder="Type here"
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
              type="file"
              name="imageURL"
              className="file-input w-full max-w-xs"
              onChange={(e) => setImageURL(e.target.files[0])}
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
            <div className="label">
              <span className="label-text">Enter number of episodes</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              mame="episodes"
              value={episodes}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setEpisodes(e.target.value)}
            />

            <br />

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
            <div className="label">
              <span className="label-text">Add date of premiere</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="premiered"
              value={premiered}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPremiered(e.target.value)}
            />

            <br />
            <div className="label">
              <span className="label-text">Add producing studios</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="studios"
              value={studios}
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setStudios(e.target.value)}
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

            <button className="btn" style={{ marginTop: "15px" }} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AnimeCreate;
