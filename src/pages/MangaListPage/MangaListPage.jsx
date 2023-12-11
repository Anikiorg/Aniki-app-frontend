import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

import MangaCreate from "../../components/Manga/MangaCreate"
import AddToList from "../../components/Lists/AddToList"

function MangaListPage() {
    
    const [mangaList, setMangaList] = useState([])
    const [toggle, setToggle] = useState(false)
    
    const handleToggle = () => {
        setToggle(!toggle)
    }
   
    useEffect(() => { 
        axios.get("http://localhost:5005/api/manga")
            .then((response) => {
                setMangaList(response.data)
                console.log(mangaList);
            })
            .catch((error) => console.log(error))
    }, [])
    
    return (
        <>
            <button onClick={handleToggle}>Add manga</button>
            
            {toggle &&  <MangaCreate />}
            
            {mangaList.map((manga)=> {
                return (
                    <div key={manga._id}>
                        <h1>Manga</h1>
                        
                        <h1>{manga.name.nameJP}</h1>
                        
                        <p>{manga.imageURL}</p>
                        <p>{manga.genre}</p>
                        <p>{manga.rating}</p>
                        
                        <Link to={`/manga/${manga._id}`}> <button>See more</button> </Link>

                        <AddToList id={manga._id} />
                        <hr/>
                    </div>
            )})}
        </>
    )
}

export default MangaListPage