import axios from "axios"
import { useState } from "react"


function AddReviews (props) { 
    const [content, setContent] = useState("")
    const author = "anonymous"
    const animeId = props.id
    const reviewObject = {author, content}

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:5005/api/animes/${animeId}`, { id: animeId, reviewObject: reviewObject})
        .then((response) => {
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