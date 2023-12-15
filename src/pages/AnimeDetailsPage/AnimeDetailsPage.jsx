import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import AnimeUpdate from "../../components/Anime/AnimeUpdate";
import AnimeDelete from "../../components/Anime/AnimeDelete";
import AnimeReviews from "../../components/AnimeReviews";
import AddAnimeReviews from "../../components/AddAnimeReviews";
import AddToList from "../../components/Lists/AnimeLists/AddToList";
import "./AnimeDetailsPage.css"
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
              <div className="card lg:card-side bg-base-100 shadow-xl cards">
                <figure>
              <img src={animeDetails.imageURL} alt="anime image" />
            </figure>
            <div className="card-body">
              <div className="container">
              <div>
              <h1>{animeDetails.name.nameEN}</h1>
              {animeDetails.name.nameEN !== animeDetails.name.nameJP &&
              <h1>{animeDetails.name.nameJP}</h1>
              }
              <p>Genre: {animeDetails.genre}</p>
              <p>Episodes: {animeDetails.episodes}</p>
              <p>Status:{animeDetails.status}</p>
              <p>Premiered: {animeDetails.premiered}</p>
              <p>Studios: {animeDetails.studios}</p>
              <p>Age Rating: {animeDetails.ageRating}</p>
              </div>
              <div>
              <label className="form-control">
  <p className="description break-normal ...">{animeDetails.description}</p>
</label>
              </div>
              </div>
              <div className="card-actions justify-end">
                {user && <AddToList id={animeDetails._id} />}
              </div>
            </div>
          </div>
          {user && user.typeOfUser === "admin" && (
            <button className="btn" onClick={handleForm}>
              Update
            </button>
          )}

          {user && user.typeOfUser === "admin" && (
            <AnimeDelete animeId={animeId} />
          )}
        </>
      )}

      {/* toggle state variable to show form */}

      {showForm && <AnimeUpdate animeDetails={animeDetails} />}

      {user && <AddAnimeReviews />}

      <AnimeReviews />
    </>
  );
}

export default AnimeDetailsPage;
