import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/Review.css";

function MangaReviews() {
  const [reviews, setReviews] = useState(null);
  const { mangaId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/manga/${mangaId}`)
      .then((response) => {
        setReviews(response.data.reviews.reverse());
        console.log(reviews);
      })
      .catch((err) => err);
  }, []);

  return (
    <>
      {reviews &&
        reviews.map((elm) => {
          console.log("this is the elm", elm);
          console.log(elm.user.userName);
          return (
            <div className="review">
              <div key={elm._id} className="review-body">
                <span className="label-text">{elm.user.userName} says: </span>

                <p className="input input-bordered w-full max-w-xs break-normal ...">
                  "{elm.content}"
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default MangaReviews;
