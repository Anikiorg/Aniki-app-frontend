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
    <form onSubmit={handleFileUpload}>
        <label>Japanese name: </label>
        <input type="text" placeholder="Enter japanese title" name="nameJP" value={nameJP} onChange={(e) => setNameJP(e.target.value)}/>
        
        <br/>
        
        <label>English name: </label>
        <input type="text" placeholder="Enter english title" name="nameEN" value={nameEN} onChange={(e) => setNameEN(e.target.value)}/>
        
        <br/>
        
        <label>Description: </label>
        <textarea placeholder="Enter description" name="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
        
        <br/>
        
        <label>ImageURL: </label>
        <input type="file" placeholder="Add imageURL" name="imageURL" onChange={(e) => setImageURL(e.target.files[0])}/>
        
        <br/>
        
        <label>Episodes: </label>
        <input type="number" placeholder="Enter number of episodes" mame="episodes" value={episodes} onChange={(e) => setEpisodes(e.target.value)}/>
        
        <br/>
        
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
        
        <label>Premiered: </label>
        <input type="text" name="premiered" value={premiered} onChange={(e)=> setPremiered(e.target.value)} />
        
        <br/>
        
        <label>Studios: </label> 
        <input type="text" placeholder="Add producing studios" name="studios" value={studios} onChange={(e)=> setStudios(e.target.value)}/>
        
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
        
        <button className="btn" type="submit">Submit</button>
    </form>
)

}

export default AnimeCreate