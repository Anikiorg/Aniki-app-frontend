import axios from "axios"
import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/auth.context"


function AddMangaReviews () { 

    const storedToken = localStorage.getItem("authToken");

    const [content, setContent] = useState("")    
    const {mangaId} = useParams()
    
    const handleSubmit = (e) => {
        axios.put(`${process.env.REACT_APP_API_URL}/api/animes/${mangaId}`, {content}, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => {
            console.log("handled submit")
            setContent("")
        })
        .catch((err) => err)
    }



    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="content" placeholder="Write your thoughts" value={content} onChange={(e)=> setContent(e.target.value)} />
        <button className="btn" type="submit">Submit</button>
    </form>
)
}

export default AddMangaReviews