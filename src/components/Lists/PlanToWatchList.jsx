import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"

function PlanToWatchList() {
    const {user} = useContext(AuthContext)
    return <p>{user.planToWatchList}</p>
}

export default PlanToWatchList