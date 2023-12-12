import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function MangaDelete () {

    const { mangaId } = useParams()
    const navigate = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/api/manga/${mangaId}`)
        .then(() => {
            console.log("manga deleted");
            navigate("/manga")
        })
        .catch((err) => console.log("This is the .catch()", err))
    }

    return(
        <button onClick={handleDelete}>Delete</button>
    )
}

export default MangaDelete