import axios from "axios"
import { useState } from "react";
import { useParams } from "react-router-dom"


function AddAnimeReviews () { 

    const storedToken = localStorage.getItem("authToken");

    const [content, setContent] = useState("")    
    const {animeId} = useParams()
    
    const handleSubmit = (e) => {
        axios.put(`${process.env.REACT_APP_API_URL}/api/animes/${animeId}`, {content}, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => {
            console.log("handled submit")
            setContent("")
        })
        .catch((err) => err)
    }



    return (
 <div className="review">
    <form onSubmit={handleSubmit}>
        <textarea type="text" name="content" placeholder="Write your thoughts" className="input input-bordered w-full max-w-xs" value={content} onChange={(e)=> setContent(e.target.value)} />
        <button className="btn" type="submit">Submit</button>
    </form>
    </div>
   
)
}

export default AddAnimeReviews