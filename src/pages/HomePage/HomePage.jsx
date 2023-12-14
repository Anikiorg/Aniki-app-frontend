import "./HomePage.css";
import {Link} from "react-router-dom"

function HomePage() {
  return (
      <>
    <div>
      <h1>Home page</h1>
    </div>
    
    <Link to="/animes" >
      <button className="btn">All Anime</button>
    </Link>
    
    <Link to="/manga" >
      <button className="btn">All Manga</button>
    </Link>
    </>
  );
}

export default HomePage;
