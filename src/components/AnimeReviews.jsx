import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Review.css"

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
    <div className="center review">
<div className="card w-96 bg-base-100 shadow-xl">
 <div className="card-body">
        <div key={elm._id}>
        <div className="label">
              <span className="label-text">{elm.user} says: </span>
            </div>
        <p className="input input-bordered w-full max-w-xs break-normal ...">"{elm.content}"</p>
        </div>
</div>
</div>
</div>
        )
    })}
    <hr />
    </>
)
}

export default AnimeReviews