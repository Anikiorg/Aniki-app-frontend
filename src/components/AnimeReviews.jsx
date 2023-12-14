import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function AnimeReviews () { 
    const [reviews, setReviews] = useState(null)
    const {animeId} = useParams()

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API_URL}/api/animes/${animeId}`)
        .then((response)=> {
           setReviews(response.data.reviews.reverse()) 
           console.log(reviews)
        })  
        .catch((err) => err)
        
    },[])

    return (
    <>
    {reviews && reviews.map((elm)=> {
        console.log("this is the elm", elm);
        console.log(elm.user.userName);
        return (
        <div key={elm._id}>
        <p>{elm.user.userName} says: "{elm.content}"</p>
        </div>
        )
    })}

    </>
)
}

export default AnimeReviews