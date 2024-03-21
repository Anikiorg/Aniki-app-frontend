
import axios from "axios"
import { useContext } from "react"

import { AuthContext } from "../../../context/auth.context";

function DeleteFromList(props) {
    const storedToken = localStorage.getItem("authToken");
    const {user} = useContext(AuthContext)
    const handleDelete = () => {
        console.log("I AM HERE:", props.animeId)

            axios.put(`${process.env.REACT_APP_API_URL}/api/users/${user.userName}/animeremove`, {animeId: props.animeId, case: props.case}, { headers: { Authorization: `Bearer ${storedToken}` }})
            .then(()=> {
                console.log("sent request to delete anime from list")
                props.showList()
            })
            .catch((err)=> err)
    }

return (

    <button className="btn btn-ghost" onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
    </button>
)
}

export default DeleteFromList
