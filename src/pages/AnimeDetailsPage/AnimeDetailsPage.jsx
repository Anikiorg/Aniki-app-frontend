import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import AnimeUpdate from "../../components/Anime/AnimeUpdate";
import AnimeDelete from "../../components/Anime/AnimeDelete";
import AnimeReviews from "../../components/AnimeReviews";
import AddAnimeReviews from "../../components/AddAnimeReviews";
import AddToList from "../../components/Lists/AnimeLists/AddToList";
import { AuthContext } from "../../context/auth.context";

function AnimeDetailsPage() {
  const [animeDetails, setAnimeDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { animeId } = useParams();
  const { user } = useContext(AuthContext);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/animes/${animeId}`)
      .then((res) => {
        setAnimeDetails(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log("heeeeeeeeeeeeeeeelp", err));
  }, []);


  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      {loading ? (
        <p>"loading.."</p>
      ) : (
        <>
          <h1>{animeDetails.name.nameJP}</h1>
          <h1>{animeDetails.name.nameEN}</h1>

          <img src={animeDetails.imageURL} alt="anime image" />

          <p>{animeDetails.genre}</p>
          <p>{animeDetails.rating}</p>
          <p>{animeDetails.episodes}</p>
          <p>{animeDetails.status}</p>
          <p>{animeDetails.premiered}</p>
          <p>{animeDetails.studios}</p>
          <p>{animeDetails.ageRating}</p>
          <p>{animeDetails.reviews.author}</p>
          <p>{animeDetails.reviews.content}</p>
        </>
      )}

      {/* toggle state variable to show form */}
      {(user && user.typeOfUser === "admin") && <button className="btn" onClick={handleForm}>Update</button>}

      {(user && user.typeOfUser === "admin") && <AnimeDelete animeId={animeId} />}


      {showForm && <AnimeUpdate animeDetails={animeDetails} />}
      {user && <AddToList id={animeDetails._id} />}
      {user && <AddAnimeReviews />}

      <AnimeReviews />
    </>
  );
}

export default AnimeDetailsPage;
