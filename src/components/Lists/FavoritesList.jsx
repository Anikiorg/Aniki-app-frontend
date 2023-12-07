import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function FavoritesList () {
    const { user } = useContext(AuthContext);
    
    return <p>{user.favoritesList}</p>
}

export default FavoritesList