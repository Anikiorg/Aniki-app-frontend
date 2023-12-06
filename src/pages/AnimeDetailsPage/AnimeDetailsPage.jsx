import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function AnimeDetailsPage() {
    const [animeDetails, setAnimeDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const {animeId} = useParams()

    
    useEffect(()=> {
        axios.get(`http://localhost:5005/api/animes/${animeId}`)
        .then((response) => {
            setAnimeDetails(response.data)
        })
        .then((response) => {
            setLoading(false)
        })
        .catch((error) => console.log(error))
    }, [])

    return (
        <>
        {loading 
            ? <p>"loading.."</p>
            : 
                <>
            <h1>{animeDetails.name.nameJP}</h1>
            <h1>{animeDetails.name.nameEN}</h1>
            <p>{animeDetails.imageURL}</p>
            <p>{animeDetails.genre}</p>
            <p>{animeDetails.rating}</p>
            <p>{animeDetails.episodes}</p>
            <p>{animeDetails.status}</p>
            <p>{animeDetails.premiered}</p>
            <p>{animeDetails.studio}</p>
            <p>{animeDetails.ageRating}</p>
            <p>{animeDetails.reviews.author}</p>
            <p>{animeDetails.reviews.content}</p>
            </>
    }
       </>
    )
}
    
export default AnimeDetailsPage