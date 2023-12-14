import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function AnimeReviews () { 
    const [reviews, setReviews] = useState([])
    const {animeId} = useParams()

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API_URL}/api/animes/${animeId}`)
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
        console.log("this is the elm", elm);
        console.log(elm.user);
        return (
        <div key={elm._id}>
        <p>{elm.user} says: "{elm.content}"</p>
        </div>
        )
    })}

    </>
)
}

export default AnimeReviews