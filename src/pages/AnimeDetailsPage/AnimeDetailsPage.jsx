import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import AnimeUpdate from "../../components/AnimeUpdate"
import AnimeDelete from "../../components/AnimeDelete"

function AnimeDetailsPage() {
    const [animeDetails, setAnimeDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const {animeId} = useParams()
    
    useEffect(()=> {
        axios.get(`http://localhost:5005/api/animes/${animeId}`)
        .then((res) => {
            setAnimeDetails(res.data)
        })
        .then(() => {
            setLoading(false)
        })
        .catch((err) => console.log(err))
    }, [])

    const handleForm = () => {
        setShowForm(!showForm)
    }



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
                <p>{animeDetails.studios}</p>
                <p>{animeDetails.ageRating}</p>
                <p>{animeDetails.reviews.author}</p>
                <p>{animeDetails.reviews.content}</p>
            </>
        }

        {/* toggle state variable to show form */}
        <button onClick={handleForm}>Update</button>

        <AnimeDelete animeId={animeId}/>

        {showForm && <AnimeUpdate animeId={animeId}/>}

       </>
    )
}
    
export default AnimeDetailsPage