import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Reviews () { 
    const [reviews, setReviews] = useState([])
    const {animeId} = useParams()

    useEffect(()=> {
        axios.get(`http://localhost:5005/api/animes/${animeId}`)
        .then((response)=> {
           setReviews(response.data.reviews) 
           console.log(reviews)
        })  
        .catch((err) => err)
        
    },[])

    let array = [];
    for (let i = reviews.length - 1; i >= 0; i--) {
      array.push(reviews[i]);
    }

    return (
    <>
    {array.map((elm)=> {
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