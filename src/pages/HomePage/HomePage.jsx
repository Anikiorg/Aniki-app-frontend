import "./HomePage.css";
import {Link} from "react-router-dom"

function HomePage() {
  return (
      <>
    <div>
      <h1>Home page</h1>
    </div>
    
    <Link to="/animes" >
      <button>All Anime</button>
    </Link>
    
    <Link to="/manga" >
      <button>All Manga</button>
    </Link>
    </>
  );
}

export default HomePage;
