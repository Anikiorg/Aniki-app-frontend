import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

import CreateAnime from "../../components/CreateAnime/CreateAnime"
import AddToList from "../../components/Lists/AddToList"

function AnimeListPage() {
    
    const [animeList, setAnimeList] = useState([])
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => {
        setToggle(!toggle)
    }
   
    useEffect(() => { 
        axios.get("http://localhost:5005/api/animes")
            .then((response) => {
                setAnimeList(response.data)
                console.log(animeList);
            })
            .catch((error) => console.log(error))
    }, [])
    
    return (
        <>
            <button onClick={handleToggle}>Add anime</button>
            
            {toggle &&  <CreateAnime />}
            
            {animeList.map((anime)=> {
                return (
                    <div key={anime._id}>
                        <h1>Anime</h1>
                        
                        <h1>{anime.name.nameJP}</h1>
                        
                        <p>{anime.imageURL}</p>
                        <p>{anime.genre}</p>
                        <p>{anime.rating}</p>
                        
                        <Link to={`/animes/${anime._id}`}> <button>See more</button> </Link>
                        
                        <AddToList id={anime._id} />
                        <hr/>
                    </div>
            )})}
        </>
    )
}

    export default AnimeListPage