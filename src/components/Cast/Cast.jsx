import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/fetchMovieCast';
import { nanoid } from 'nanoid';
import css from './Cast.module.css';

export default function Cast() {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast({ movieId, setMovieCast });
  }, [movieId]);

  return (
    <>
      {movieCast.length !== 0 ? (
        <ul>
          {movieCast.map(actor => {
            return (
              <li key={nanoid()} id={actor.id} className={css.item}>
                {actor.profile_path ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`}
                    width="100"
                    height="150"
                    alt={actor.name}
                  ></img>
                ) : (
                  <img
                    src={'./actorsMissingImg.png'}
                    width="100"
                    height="150"
                    alt={actor.name}
                  ></img>
                )}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don`t have any cast for this movie.</p>
      )}
    </>
  );
}
