import "./ProfilePage.css";

function ProfilePage() {
  const handleDeletion = (e) => { 
    e.preventDefault();
  }
  return (
    <div>
      <h1>Profile page</h1>
      
      <button onClick={handleDeletion}>Delete Account</button>
    </div>
  );
}

export default ProfilePage;
