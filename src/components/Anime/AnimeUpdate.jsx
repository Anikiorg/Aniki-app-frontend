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
    const storedToken = localStorage.getItem("authToken");

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

        axios.put(`${process.env.REACT_APP_API_URL}/api/animes/${props.animeId}`, updatedAnime, { headers: { Authorization: `Bearer ${storedToken}` }})
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

        <br/>

        <label>English name: </label>
        <input type="text" name="nameEN" value={nameEN} onChange={(e) => setNameEN(e.target.value)} />

        <br/>
        
        <label>Description: </label>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />

        <br/>

        <label>Image URL: </label>
        <input type="text" name="imgURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />

        <br/>

        <label>Genre: </label>
        <input type="text" name="genre" value={genre} onChange={(e) => setGenre(e.target.value)} />

        <br/>

        <label>Episodes: </label>
        <input type="number" name="episodes" value={episodes} onChange={(e) => setEpisodes(e.target.value)} />

        <br/>

        <label>Status: </label>
        <select name="status" value={status} onChange={(e)=> setStatus(e.target.value)}>
            <option>-- Select status --</option>
            <option>Airing Now</option>
            <option>Finished Airing</option>
            <option>Upcoming</option>
        </select>

        <br/>

        {/* maybe 2 (type: list) >> season + year */}
        <label>Premiered: </label>
        <input type="text" name="premiered" value={premiered} onChange={(e) => setPremiered(e.target.value)} />

        <br/>

        <label>Age rating: </label>
        <select name="ageRating" value={ageRating} onChange={(e)=> setAgeRating(e.target.value)}>
        <option>-- Add age rating --</option>
        <option>E - Everyone / A - All Ages</option>
        <option>T - Teens, Age 13+</option>
        <option>OT - Older Teens, Age 16+</option>
        <option>M - Mature, Age 18+</option>
        </select>

        <br/>

        <label>Studios: </label>
        <input type="text" name="studios" value={studios} onChange={(e) => setStudios(e.target.value)} />

        <br/>

        <button type="submit">Save</button>
    </form>
)

}

export default AnimeUpdate