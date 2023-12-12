import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";


function MangaUpdate () {

    /* form state vars */
    const [nameJP, setNameJP] = useState("")
    const [nameEN, setNameEN] = useState("")
    const [description, setDescription] = useState("")
    const [imageURL, setImageURL] = useState("")
    const [volumes, setVolumes] = useState("")
    const [genre, setGenre] = useState("")
    const [status, setStatus] = useState("")
    const [published, setPublished] = useState("")
    const [authors, setAuthors] = useState("")
    const [rating, setRating] = useState("")
    const [ageRating, setAgeRating] = useState("")

    const name = {nameEN, nameJP}

    const { mangaId } = useParams()

    const updatedManga = {
        name,
        description,
        imageURL,
        volumes,
        genre,
        status,
        published,
        authors,
        rating,
        ageRating
    }

    const handleSubmit = () => {

        axios.put(`${process.env.REACT_APP_API_URL}/api/manga/${mangaId}`, updatedManga)
        .then(() => {
            console.log("manga updated");
        })
        .catch((err) => console.log(err))
    }

return(

    /* retain original info */
    <form onSubmit={handleSubmit}>
        <label>Japanese name: </label>
        <input type="text" placeholder="Enter japanese title" name="nameJP" value={nameJP} onChange={(e) => setNameJP(e.target.value)}/><br/>
        
        <label>English name: </label>
        <input type="text" placeholder="Enter english title" name="nameEN" value={nameEN} onChange={(e) => setNameEN(e.target.value)}/><br/>
        
        <label>Description: </label>
        <textarea placeholder="Enter description" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/><br/>
        
        <label>ImageURL: </label>
        <input type="text" placeholder="Add imageURGL" name="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)}/><br/>
        
        <label>Volumes: </label>
        <input type="number" placeholder="Enter number of volumes" mame="volumes" value={volumes} onChange={(e) => setVolumes(e.target.value)}/><br/>
        
        <label>Genre: </label>
        <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option>-- Select genre --</option>
            <option>Comedy</option>
            <option>Slice of life</option>
            <option>Shounen</option>
        </select>
        
        <br/>
        
        <label>Status: </label>
        <select name="status" value={status} onChange={(e)=> setStatus(e.target.value)}>
            <option>-- Select status --</option>
            <option>Airing Now</option>
            <option>Finished Airing</option>
            <option>Upcoming</option>
        </select>
        
        <br/>
        
        <label>Published: </label>
        <input type="text" name="published" value={published} onChange={(e)=> setPublished(e.target.value)} /><br/>
        
        <label>Authors: </label> 
        <input type="text" placeholder="Add authors" name="authors" value={authors} onChange={(e)=> setAuthors(e.target.value)}/><br/>
        

        {/* CHANGE RATING BRUH */}

        <label>Rating: </label>
        <input type="number" placeholder="Add rating" name="rating" value={rating}onChange={(e) => setRating(e.target.value)}/><br/>
        <select name="ageRating" value={ageRating} onChange={(e)=> setAgeRating(e.target.value)}>
        <option>-- Add age rating --</option>
        <option>E - Everyone / A - All Ages</option>
        <option>T - Teens, Age 13+</option>
        <option>OT - Older Teens, Age 16+</option>
        <option>M - Mature, Age 18+</option>
        </select>
        
        <br/>
        
        <button type="submit">Submit</button>
    </form>
)

}

export default MangaUpdate