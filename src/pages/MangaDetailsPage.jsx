import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

import MangaDelete from "../components/Manga/MangaDelete";
import MangaUpdate from "../components/Manga/MangaUpdate";
import MangaReviews from "../components/Manga/MangaReviews";
import AddMangaReviews from "../components/Manga/AddMangaReviews";
import AddToList from "../components/Lists/MangaLists/AddToList";
import "../styles/pages/DetailsPage.css";
import "../styles/components/Review.css";

function MangaDetailsPage() {
  const [mangaDetails, setMangaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { mangaId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/manga/${mangaId}`)
      .then((res) => {
        setMangaDetails(res.data);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log("this is why its fkd", err));
  }, []);

  const handleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="manga-details-page">
      {loading ? (
        <p>"loading.."</p>
      ) : (
        <>
          <div className="card">
                  <img src={mangaDetails.imageURL} alt="manga image" />
                
                <div className="card-content">
                  <h2>{mangaDetails.name.nameEN}</h2>
                  {mangaDetails.name.nameEN !== mangaDetails.name.nameJP && (
                    <h2>{mangaDetails.name.nameJP}</h2>
                  )}

                  <p>Genre: {mangaDetails.genre}</p>
                  <p>Volumes: {mangaDetails.volumes}</p>
                  <p>Status: {mangaDetails.status}</p>
                  <p>Published: {mangaDetails.published}</p>
                  <p>Authors: {mangaDetails.authors}</p>
                  <p>Age rating: {mangaDetails.ageRating}</p>
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
                      stroke-linejoin="round"
                      class="lucide lucide-bookmark"
                    >
                      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                    </svg>
                  </button>

                  <dialog id="my_modal_4" className="modal">
                    <div className="modal-box">
                      <AddToList id={mangaDetails._id} />
                    </div>
                    <form method="dialog" className="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                </div>
              )}
              </div>

              <div className="description">
                  " {mangaDetails.description} "
                </div>
          <div id="admin-button">
            {user && user.typeOfUser === "admin" && (
              <button className="btn" onClick={handleForm}>
                Update
              </button>
            )}

            {user && user.typeOfUser === "admin" && (
              <MangaDelete mangaId={mangaId} />
            )}
          </div>
        </>
      )}

      {showForm && <MangaUpdate mangaDetails={mangaDetails} />}
      {user && <AddMangaReviews />}

      <MangaReviews />
    </div>
  );
}

export default MangaDetailsPage;
