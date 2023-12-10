import axios from "axios"
import { useEffect, useState } from "react"


function Reviews (props) { 
    const [reviews, setReviews] = useState([])
    const animeId = props.id

    useEffect(()=> {

        axios.get(`http://localhost:5005/api/animes/${animeId}`)
        .then((response)=> {
           setReviews(response.data.reviews) 
           console.log(reviews)
        })  
        .catch((err) => err)
        
    },[])

    return (
    <>
    {reviews.map((elm)=> {
        return (
        <div key={elm._id}>
        <p>{elm.author} says: "{elm.content}"</p>
        </div>
        )
    })}

    </>
)
}

export default Reviews