import { useEffect, useState } from "react"
import axios from "axios"

function AnimeList() {
    const [animeList, setAnimeList] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:5005/api/animes")
            .then((response) => {
                setAnimeList(response.data)
                console.log(animeList);
            })
            .catch((error) => console.log(error))
            console.log("hello")
    }, [])
    
        return (
            <>
        {animeList.map((anime)=> {
            return <div key={anime._id}>
            <h1>Anime</h1>
            <h1>{anime.name.nameJP}</h1>
            <p>{anime.imageURL}</p>
            <p>{anime.genre}</p>
            <p>{anime.rating}</p>
            </div>
        })}
    </>
        )
    }

    export default AnimeList