
import axios from "axios"
import { useContext } from "react"

import { AuthContext } from "../../context/auth.context";

function DeleteFromList(props) {
    const storedToken = localStorage.getItem("authToken");
    const {user} = useContext(AuthContext)
    const handleDelete = () => {
            axios.put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/pull`, {animeId: props.id, case: props.case}, { headers: { Authorization: `Bearer ${storedToken}` }})
            .then(()=> {
                console.log("sent request to delete anime from list")
                props.showList()
            })
            .catch((err)=> err)
    }

return (

    <button onClick={handleDelete}>Delete from list</button>
)
}

export default DeleteFromList
