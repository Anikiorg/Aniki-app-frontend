import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";

import MangaDelete from "../../components/Manga/MangaDelete";
import MangaUpdate from "../../components/Manga/MangaUpdate";
import MangaReviews from "../../components/MangaReviews";
import AddMangaReviews from "../../components/AddMangaReviews";
import AddToList from "../../components/Lists/MangaLists/AddToList";

function MangaDetailsPage() {
  const [mangaDetails, setMangaDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { user } = useContext(AuthContext);
  const { mangaId } = useParams();

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
          <h1>{mangaDetails.name.nameJP}</h1>
          <h1>{mangaDetails.name.nameEN}</h1>
          <p>{mangaDetails.imageURL}</p>
          <p>{mangaDetails.genre}</p>
          <p>{mangaDetails.rating}</p>
          <p>{mangaDetails.volumes}</p>
          <p>{mangaDetails.status}</p>
          <p>{mangaDetails.published}</p>
          <p>{mangaDetails.authors}</p>
          <p>{mangaDetails.ageRating}</p>
          <p>{mangaDetails.reviews.author}</p>
          <p>{mangaDetails.reviews.content}</p>
        </>
      )}

      {/* toggle state variable to show form */}
      {user && user.typeOfUser === "admin" && (
        <button onClick={handleForm}>Update</button>
      )}
      {user && user.typeOfUser === "admin" && <MangaDelete mangaId={mangaId} />}

      {showForm && <MangaUpdate mangaDetails={mangaDetails} />}
      {user && <AddToList id={mangaDetails._id} />}
      {user && <AddMangaReviews />}

      <MangaReviews />
    </>
  );
}

export default MangaDetailsPage;
