import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import AnimeUpdate from "../../components/Anime/AnimeUpdate";
import AnimeDelete from "../../components/Anime/AnimeDelete";
import AnimeReviews from "../../components/AnimeReviews";
import AddAnimeReviews from "../../components/AddAnimeReviews";
import AddToList from "../../components/Lists/AnimeLists/AddToList";
import "./AnimeDetailsPage.css";
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
    <div className="details-page">
      {loading ? (
        <p>"loading.."</p>
      ) : (
        <>
          <div className="border card cards">
            <div className="card-body">
              <div id="container">
                <figure>
                  <img src={animeDetails.imageURL} alt="anime image" />
                </figure>
                <div className="info">
                  <h1>{animeDetails.name.nameEN}</h1>
                  {animeDetails.name.nameEN !== animeDetails.name.nameJP && (
                    <h1>{animeDetails.name.nameJP}</h1>
                  )}
                  <p>Genre:{animeDetails.genre}</p>
                  <p>Episodes:{animeDetails.episodes}</p>
                  <p>Status:{animeDetails.status}</p>
                  <p>Premiered:{animeDetails.premiered}</p>
                  <p>Studios:{animeDetails.studios}</p>
                  <p>Age Rating:{animeDetails.ageRating}</p>
                </div>
                <div className="description">
                  " {animeDetails.description} "
                </div>
                {user && (
                  <div className="card-actions justify-end">
                    <div className="dropdown dropdown-left dropdown-end">
                      <div tabIndex={0} role="button" className="btn m-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#000000"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-bookmark"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                        </svg>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <AddToList id={animeDetails._id} />
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div id="admin-button">
            {user && user.typeOfUser === "admin" && (
              <button className="btn" onClick={handleForm}>
                Update
              </button>
            )}

            {user && user.typeOfUser === "admin" && (
              <AnimeDelete animeId={animeId} />
            )}
          </div>
        </>
      )}

      {/* toggle state variable to show form */}

      {showForm && <AnimeUpdate animeDetails={animeDetails} />}

      {user && <AddAnimeReviews />}

      <AnimeReviews />
    </div>
  );
}

export default AnimeDetailsPage;
