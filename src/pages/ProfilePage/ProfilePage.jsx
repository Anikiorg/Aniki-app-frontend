import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import "./ProfilePage.css";

function ProfilePage() {
  const { user } = useContext(AuthContext)
  console.log(user)
      return (
        <>
  <div>
      <h1>Profile page</h1>
      <h2>
        {user.userName}
        </h2>
      <p>
        {user.email}
        </p>
  </div>
  <button>Edit profile</button>
        </>
  );
}
  
  export default ProfilePage;
