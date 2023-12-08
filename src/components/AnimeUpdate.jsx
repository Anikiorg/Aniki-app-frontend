import axios from "axios";
import { useState } from "react";


function AnimeUpdate (props) {

    /* form state vars */
    const [nameJP, setNameJP] = useState("")
    const [nameEN, setNameEN] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [episodes, setEpisodes] = useState("")
    const [genre, setGenre] = useState("")
    const [status, setStatus] = useState("")
    const [premiered, setPremiered] = useState("")
    const [studios, setStudios] = useState("")
    const [rating, setRating] = useState("")
    const [ageRating, setAgeRating] = useState("")

    const name = {nameEN, nameJP}

    const updatedAnime = {
        name,
        description,
        imageURL,
        episodes,
        genre,
        status,
        premiered,
        studios,
        rating,
        ageRating
    }

    const handleSubmit = () => {

        axios.put(`http://localhost:5005/api/animes/${props.animeId}`, updatedAnime)
        .then(() => {
            console.log("anime updated");
        })
        .catch((err) => console.log(err))
    }

return(

    /* retain original info */
    <form onSubmit={handleSubmit}>
        <label>Japanese name: </label>
        <input type="text" name="nameJP" value={nameJP} onChange={(e) => setNameJP(e.target.value)} />

        <label>English name: </label>
        <input type="text" name="nameEN" value={nameEN} onChange={(e) => setNameEN(e.target.value)} />
        
        <label>Description: </label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <label>Image URL: </label>
        <input type="text" name="imgURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />

        <label>Genre: </label>
        <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

        {/* should retain rating */}
        <label>Rating: </label>
        <input type="number" name="rating" value={rating} onChange={(e) => setRating(e.target.value)} />

        <label>Episodes: </label>
        <input type="number" name="episodes" value={episodes} onChange={(e) => setEpisodes(e.target.value)} />

        <label>Status: </label>
        <input type="list" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />

        {/* maybe 2 (type: list) >> season + year */}
        <label>Premiered: </label>
        <input type="text" name="premiered" value={premiered} onChange={(e) => setPremiered(e.target.value)} />

        <label>Age rating: </label>
        <input type="list" name="age rating" value={ageRating} onChange={(e) => setAgeRating(e.target.value)} />

        <label>Studios: </label>
        <input type="text" name="studios" value={studios} onChange={(e) => setStudios(e.target.value)} />

        <button type="submit">Save</button>
    </form>
)

}

export default AnimeUpdate