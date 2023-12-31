import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import Api from 'services/api';
import css from './Reviews.module.css';

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    Api.fetchMovieReviews(movieId, setMovieReviews);
  }, [movieId]);

  return (
    <>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={nanoid()} id={review.id} className={css.item}>
                <p>
                  <b>Author: {review.author}</b>
                </p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
}
