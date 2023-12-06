import { useState } from "react"
import axios from "axios"

function AnimeList() {
    const [animeList, setAnimeList] = useState([])
    axios.get("/api/animes")
        .then((response) => {
            setAnimeList(response.data)
        })
        .catch((error) => console.log(error))
        console.log("hello")
        console.log(animeList);
    
        return (
            <>
            hi
        {animeList.map((anime)=> {
            return <>
            <h1>inside the map</h1>
            <h1>{anime.name}</h1>
            <p>{anime.imageURL}</p>
            <p>{anime.genre}</p>
            <p>{anime.rating}</p>
            </>
        })}
    </>
        )
    }

    export default AnimeList