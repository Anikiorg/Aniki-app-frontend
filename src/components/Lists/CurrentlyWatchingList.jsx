import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"

function CurrentlyWatchingList() {
    const {user} = useContext(AuthContext)
    return <p>{user.currentlyWatchingList}</p>
}
export default CurrentlyWatchingList