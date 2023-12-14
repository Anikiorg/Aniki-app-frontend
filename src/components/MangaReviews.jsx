import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function MangaReviews () { 
    const [reviews, setReviews] = useState([])
    const {mangaId} = useParams()

    useEffect(()=> {
        axios.get(`${process.env.REACT_APP_API_URL}/api/manga/${mangaId}`)
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
        <p>{elm.user} says: "{elm.content}"</p>
        </div>
        )
    })}

    </>
)
}

export default MangaReviews