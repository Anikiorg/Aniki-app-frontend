import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

import Loading from "../components/Loading";
import AnimeUpdate from "../components/Anime/AnimeUpdate";
import AnimeDelete from "../components/Anime/AnimeDelete";
import AnimeReviews from "../components/Anime/AnimeReviews";
import AddAnimeReviews from "../components/Anime/AddAnimeReviews";
import AddToList from "../components/Lists/AnimeLists/AddToList";
import "../styles/pages/DetailsPage.css";
import "../styles/components/Review.css";

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
      .catch((err) => err);
  }, []);

  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="anime-details-page">
      {loading ? (
        <Loading/>
      ) : (
        <>
          <div className="card">
              <img src={animeDetails.imageURL} alt="anime image" />

              <div className="card-content">
                <h2>{animeDetails.name.nameEN}</h2>
                {animeDetails.name.nameEN !== animeDetails.name.nameJP && (
                  <h2>{animeDetails.name.nameJP}</h2>
                )}
                <p>Genre:{animeDetails.genre}</p>
                <p>Episodes:{animeDetails.episodes}</p>
                <p>Status:{animeDetails.status}</p>
                <p>Premiered:{animeDetails.premiered}</p>
                <p>Studios:{animeDetails.studios}</p>
                <p>Age Rating:{animeDetails.ageRating}</p>
              </div>
              
              {user && (
                <div className="card-actions justify-end">
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_4").showModal()
                    }
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bookmark"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                  </button>

                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                      <AddToList id={animeDetails._id} />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              )}
          </div>
          <div className="description">" {animeDetails.description} "</div>

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


      {showForm && <AnimeUpdate animeDetails={animeDetails} />}

      {user && <AddAnimeReviews />}

      <AnimeReviews />
      
        </>
      )}
    </div>
  );
}

export default AnimeDetailsPage;
