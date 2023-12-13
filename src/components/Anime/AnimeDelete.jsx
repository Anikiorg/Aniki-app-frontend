import axios from "axios";
import { useNavigate } from "react-router-dom";


function AnimeDelete (props) {
    const storedToken = localStorage.getItem("authToken");
    const navigate = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/api/animes/${props.animeId}`, { headers: { Authorization: `Bearer ${storedToken}` }})
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