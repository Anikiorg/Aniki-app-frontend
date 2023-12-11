import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"


function AddReviews () { 
    const [content, setContent] = useState("")
    const author = "anonymous"
    const {animeId} = useParams()
    const reviewObject = {author, content}

    
    const handleSubmit = (e) => {
        axios.put(`http://localhost:5005/api/animes/${animeId}`, { id: animeId, reviewObject: reviewObject})
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

export default AddReviews