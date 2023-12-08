import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"


function CreateAnime () {
    const navigate = useNavigate()

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
    
    const name = {nameJP, nameEN}
    
    const createdAnime = {
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
        
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:5005/api/animes", createdAnime)
        .then(() => {
            console.log(createdAnime)
            console.log("Anime created")
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

return (
    <form onSubmit={handleSubmit}>
        <label>Japanese name: </label>
        <input type="text" placeholder="Enter japanese title" name="nameJP" value={nameJP} onChange={(e) => {setNameJP(e.target.value)}}/><br/>
        
        <label>English name: </label>
        <input type="text" placeholder="Enter english title" name="nameEN" value={nameEN} onChange={(e) => {setNameEN(e.target.value)}}/><br/>
        
        <label>Description: </label>
        <textarea placeholder="Enter description" name="description" value={description} onChange={(e)=> {setDescription(e.target.value)}}/><br/>
        
        <label>ImageURL: </label>
        <input type="text" placeholder="Add imageURGL" name="imageURL" value={imageURL} onChange={(e) => { setImageURL(e.target.value)}}/><br/>
        
        <label>Episodes: </label>
        <input type="number" placeholder="Enter number of episodes" mame="episodes" value={episodes} onChange={(e) => {setEpisodes(e.target.value)}}/><br/>
        
        <label>Genre: </label>
        <select name="genre" value={genre} onChange={(e) => {setGenre(e.target.value)}}>
            <option>-- Select genre --</option>
            <option>Comedy</option>
            <option>Slice of life</option>
            <option>Shounen</option>
        </select>
        
        <br/>
        
        <label>Status: </label>
        <select name="status" value={status} onChange={(e)=>{setStatus(e.target.value)}}>
            <option>-- Select status --</option>
            <option>Airing Now</option>
            <option>Finished Airing</option>
            <option>Upcoming</option>
        </select>
        
        <br/>
        
        <label>Premiered: </label>
        <input type="date" name="premiered" value={premiered} onChange={(e)=> {setPremiered(e.target.value)}} /><br/>
        
        <label>Studios: </label> 
        <input type="text" placeholder="Add producing studios" name="studios" value={studios} onChange={(e)=> {setStudios(e.target.value)}}/><br/>
        
        <label>Rating: </label>
        <input type="number" placeholder="Add rating" name="rating" value={rating}onChange={(e) => {setRating(e.target.value)}}/><br/>
        <select name="ageRating" value={ageRating} onChange={(e)=> {setAgeRating(e.target.value)}}>
        <option>-- Add age rating --</option>
        <option>E - Everyone / A - All Ages</option>
        <option>T - Teens, Age 13+</option>
        <option>OT - Older Teens, Age 16+</option>
        <option>M - Mature, Age 18+</option>
        </select>
        
        <br/>
        
        <label>Rating:</label> {/* WHY??????????????????????????? */}
        
        <button type="submit">Submit</button>
    </form>
)

}

export default CreateAnime