import axios from "axios"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"


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
    <form onSubmit={handleSubmit}>
        <input type="text" name="content" placeholder="Write your thoughts" value={content} onChange={(e)=> setContent(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
)
}

export default AddAnimeReviews