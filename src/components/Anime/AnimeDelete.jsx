import axios from "axios";
import { useNavigate } from "react-router-dom";


function AnimeDelete (props) {

    const navigate = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/api/animes/${props.animeId}`)
        .then(() => {
            console.log("anime deleted");
            navigate("/animes")
        })
        .catch((err) => console.log("This is the .catch()", err))
    }

    return(
        <button onClick={handleDelete}>Delete</button>
    )
}

export default AnimeDelete