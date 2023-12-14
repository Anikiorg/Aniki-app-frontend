import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function MangaDelete (props) {
    const storedToken = localStorage.getItem("authToken");
    const { mangaId } = useParams()
    const navigate = useNavigate()

    const handleDelete = (e) => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API_URL}/api/manga/${props.mangaId}`, { headers: { Authorization: `Bearer ${storedToken}` }})
        .then(() => {
            console.log("manga deleted");
            navigate("/manga")
        })
        .catch((err) => console.log("This is the .catch()", err))
    }

    return(
        <button className="btn" onClick={handleDelete}>Delete</button>
    )
}

export default MangaDelete