import { useContext } from "react"
import { AuthContext } from "../../context/auth.context"

function CompletedList () {
const {user} = useContext(AuthContext)
    return <p>{user.completedList}</p>
}

export default CompletedList