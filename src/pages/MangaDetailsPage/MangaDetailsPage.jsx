import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import MangaDelete from "../../components/Manga/MangaDelete"
import MangaUpdate from "../../components/Manga/MangaUpdate"

function MangaDetailsPage() {
    const [mangaDetails, setMangaDetails] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    
    const {mangaId} = useParams()
    
    useEffect(()=> {
        axios.get(`http://localhost:5005/api/manga/${mangaId}`)
        .then((res) => {
            setMangaDetails(res.data)
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
                <h1>{mangaDetails.name.nameJP}</h1>
                <h1>{mangaDetails.name.nameEN}</h1>
                <p>{mangaDetails.imageURL}</p>
                <p>{mangaDetails.genre}</p>
                <p>{mangaDetails.rating}</p>
                <p>{mangaDetails.volumes}</p>
                <p>{mangaDetails.status}</p>
                <p>{mangaDetails.published}</p>
                <p>{mangaDetails.authors}</p>
                <p>{mangaDetails.ageRating}</p>
                <p>{mangaDetails.reviews.author}</p>
                <p>{mangaDetails.reviews.content}</p>
            </>
        }

        {/* toggle state variable to show form */}
        <button onClick={handleForm}>Update</button>

        <MangaDelete mangaId={mangaId}/>

        {showForm && <MangaUpdate mangaId={mangaId}/>}

       </>
    )
}
    
export default MangaDetailsPage