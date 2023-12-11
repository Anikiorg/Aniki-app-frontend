
import axios from "axios"
import { useContext } from "react"

import { AuthContext } from "../../context/auth.context";

function DeleteFromList(props) {
    const {user} = useContext(AuthContext)
    const handleDelete = () => {
            axios.put(`http://localhost:5005/api/users/${user.userName}/reviews`, {animeId: props.id, case: props.case})
            .then(()=> {
                console.log("anime id and list case sent")
                props.showList()
            })
            .catch((err)=> err)
    }

return (

    <button onClick={handleDelete}>Delete from list</button>
)
}

export default DeleteFromList
