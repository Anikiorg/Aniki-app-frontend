import { useState } from "react"
import axios from "axios"
import "../../styles/components/Modals.css";

import service from "../../services/file-upload.service"

import { useNavigate } from "react-router-dom"

function MangaCreate () {
    const navigate = useNavigate()
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
        
        const createdManga = {
            name,
            description,
            imageURL: image.fileUrl,
            volumes,
            genre,
            status,
            published,
            authors,
            rating,
            ageRating
        }

        axios.post(`${process.env.REACT_APP_API_URL}/api/manga`, createdManga, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => {
            console.log(createdManga)
            console.log("Manga created")
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

return (
    <div className="new-manga center">
    <div className="card w-96">
      <div className="card-body">
    <form onSubmit={handleFileUpload}>
    <div className="label">
              <span className="label-text">Enter Japanese title</span>
            </div>
        <input type="text" placeholder="Type here" name="nameJP" value={nameJP} className="input input-bordered w-full max-w-xs"onChange={(e) => setNameJP(e.target.value)}/><br/>
        
        <div className="label">
              <span className="label-text">Enter english title</span>
            </div>
        <input type="text" placeholder="Type here" name="nameEN" value={nameEN} className="input input-bordered w-full max-w-xs"onChange={(e) => setNameEN(e.target.value)}/><br/>
        
        <div className="label">
              <span className="label-text">Enter description</span>
            </div>
        <textarea placeholder="Type here" name="description" value={description} className="input input-bordered w-full max-w-xs"onChange={(e)=> setDescription(e.target.value)}/><br/>
        
        <div className="label">
              <span className="label-text">Add image URL</span>
            </div>
        <input type="file" placeholder="Type here" name="imageURL"  className="file-input w-full max-w-xs" onChange={(e) => setImageURL(e.target.files[0])}/><br/>
      
        <div className="label">
              <span className="label-text">Select genre</span>
            </div>
        <select name="genre" value={genre} className="input input-bordered w-full max-w-xs"onChange={(e) => setGenre(e.target.value)}>

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
        
        <br/>
        
        <div className="label">
              <span className="label-text">Enter number of volumes</span>
            </div>
        <input type="number" placeholder="Type here" mame="volumes" value={volumes}className="input input-bordered w-full max-w-xs" onChange={(e) => setVolumes(e.target.value)}/><br/>
        
        
        <div className="label">
              <span className="label-text">Select status</span>
            </div>
        <select name="status" value={status} className="input input-bordered w-full max-w-xs" onChange={(e)=> setStatus(e.target.value)}>
            <option>--</option>
            <option>Publishing</option>
            <option>Finished publishing</option>
            <option>Upcoming</option>
        </select>
        
        <br/>
        <div className="label">
              <span className="label-text">Add date of publishing</span>
            </div>
        <input type="text" name="published" value={published} placeholder="Type here" className="input input-bordered w-full max-w-xs" onChange={(e)=> setPublished(e.target.value)} /><br/>
        
        <div className="label">
              <span className="label-text">Add authors</span>
            </div>
        <input type="text" placeholder="Type here" name="authors" value={authors} className="input input-bordered w-full max-w-xs" onChange={(e)=> setAuthors(e.target.value)}/>
        
        <div className="label">
              <span className="label-text">Select age rating</span>
            </div>
        <select name="ageRating" value={ageRating}  className="input input-bordered w-full max-w-xs" onChange={(e)=> setAgeRating(e.target.value)}>
        <option>--</option>
        <option>E - Everyone / A - All Ages</option>
        <option>T - Teens, Age 13+</option>
        <option>OT - Older Teens, Age 16+</option>
        <option>M - Mature, Age 18+</option>
        </select>
        
        <br/>
        
        <button className="btn" style={{marginTop: "15px"}} onClick={handleSubmit} type="submit">Submit</button>
    </form>
    </div>
    </div>
    </div>
    
)

}

export default MangaCreate