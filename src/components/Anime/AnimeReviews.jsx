import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/components/Review.css";

function AnimeReviews() {
  const [reviews, setReviews] = useState(null);
  const { animeId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/animes/${animeId}`)
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
          return (
                  <div key={elm._id} className="review">
                    <div className="review-body">
                      <span>
                        {elm.user.userName} says:{" "}
                      </span>
                    <p className="input input-bordered w-full max-w-xs break-normal ...">
                      "{elm.content}"
                    </p>
                    </div>
                  </div>
          );
        })}
      <hr />
    </>
  );
}

export default AnimeReviews;
