import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/auth.context"


function Reviews (props) { 
    const [content, setContent] = useState("")
    const [reviews, setReviews] = useState([])
    const {user} = useContext(AuthContext) 
    const author = user.userName
    const animeId = props.id
    const reviewObject = {author, content}

    useEffect(()=> {

        axios.get(`http://localhost:5005/api/animes/${animeId}`)
        .then((response)=> {
           setReviews(response.data[0].reviews) 
           console.log(reviews)
        })  
        .catch((err) => err)
        
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(reviewObject)
        axios.put(`http://localhost:5005/api/animes/${animeId}`, {reviewObject})
        .then((response) => {
            console.log(animeId)
            console.log("review added")
        })
        .catch((err) => err)
    }



    return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" name="content" placeholder="Write your thoughts" value={content} onChange={(e)=> setContent(e.target.value)} />
        <button type="submit">Submit</button>
    </form>
    {reviews.map((elm)=> {
        return (
            <div key={elm._id}>
        <p>{elm.author}</p>
        <p>{elm.content}</p>
        </div>
        )
    })}

    </>
)
}

export default Reviews