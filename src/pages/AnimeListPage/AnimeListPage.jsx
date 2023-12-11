import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

import AnimeCreate from "../../components/Anime/AnimeCreate"
import AddToList from "../../components/Lists/AddToList"


function AnimeListPage() {
    const [animeList, setAnimeList] = useState([])
    const [animeBackup, setAnimeBackup] = useState([])
    const [toggle, setToggle] = useState(false)
    const [input, setInput] = useState("")
   
    const handleToggle = () => {
        setToggle(!toggle)
    }
    
    useEffect(() => { 
    axios.get("http://localhost:5005/api/animes")
    .then((response) => {
        setAnimeList(response.data)
        setAnimeBackup(response.data)   
        console.log(animeList);
    })
    .catch((error) => console.log(error))
    }, [])
    
    
    const handleChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    useEffect(() => {
        const filtered = [...animeBackup].filter((current) => input ? current.name.nameEN.toLowerCase().includes(input.toLowerCase() ) ||  current.name.nameJP.toLowerCase().includes(input.toLowerCase() ) : current)
        setAnimeList(filtered)     
    }, [ input   ])
    return (
        <>
           <button onClick={handleToggle}>Add anime</button>
            {toggle &&  <AnimeCreate />}
            <br/>
        <input type="text" placeholder="Search here" onChange={(e) => handleChange(e)} value={input}    />
            <br/>
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
