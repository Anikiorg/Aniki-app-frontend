import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import MangaDelete from "../../components/Manga/MangaDelete";
import MangaUpdate from "../../components/Manga/MangaUpdate";
import MangaReviews from "../../components/MangaReviews";
import AddMangaReviews from "../../components/AddMangaReviews";
import AddToList from "../../components/Lists/MangaLists/AddToList";
import "./MangaDetailsPage.css"
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
      .catch((err) => console.log("this is why its fkd" ,err));
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
              <img src={mangaDetails.imageURL} alt="manga image" />
            </figure>
            <div className="card-body">
              <div className="container">
              <div>
          <h1>{mangaDetails.name.nameEN}</h1>
          {mangaDetails.name.nameEN !== mangaDetails.name.nameJP &&
          <h1>{mangaDetails.name.nameJP}</h1>}
          
          <p>Genre: {mangaDetails.genre}</p>
          <p>Volumes: {mangaDetails.volumes}</p>
          <p>Status: {mangaDetails.status}</p>
          <p>Published: {mangaDetails.published}</p>
          <p>Authors: {mangaDetails.authors}</p>
          <p>Age rating: {mangaDetails.ageRating}</p>
</div>
<div>
              <label className="form-control">
  <p className="description break-normal ...">{mangaDetails.description}</p>
</label>
              </div>
              </div>
              <div className="card-actions justify-end">
      {user && <AddToList id={mangaDetails._id} />}
      </div>
      </div>
        </div>
        </>
      )}
      {user && user.typeOfUser === "admin" && (
        <button className="btn" onClick={handleForm}>Update</button>
        )}
      {user && user.typeOfUser === "admin" && <MangaDelete mangaId={mangaId} />}
      {showForm && <MangaUpdate mangaDetails={mangaDetails} />}
        {user && <AddMangaReviews />}

      <MangaReviews />
    </>
  );
}

export default MangaDetailsPage;
