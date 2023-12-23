import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {fetchMovies} from '../../../components/App/App.service';
import styles from './MovieInfo.module.scss';

const MovieInfo: React.FC = () => {
  const {id} = useParams();
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    fetchMovies(`http://localhost:3010/movies/${id}`)
      .then((movie) => {
        setCurrentMovie(movie);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  if (currentMovie == null) return null;

  const imgError = (event) => {
    event.target.src = 'https://imgholder.ru/300x450/000000/FFFFFF&text=Место+для+постера&fz=20'
  }

  return (
    <section className={styles.container}>
      <div className={styles.movieInfoHeader}>
        
        <span className={styles.idText}>Номер: {id}</span>
        <div className={styles.movieLinksHeader}>
          <Link className={styles.editLink} to={`/movie/${id}/edit`}> 
            Редактировать
          </Link>
        </div>
      </div>

      <div className={styles.movieInfoBody}>
        <img onError={imgError} width={'300'} src={currentMovie.posterUrl} alt={'Film poster'} />

        <div className={styles.containerInfo}>
          <div>
            <h2 className={styles.title}>{currentMovie.title}</h2>
            <span className={styles.director}>{currentMovie.director}</span>
          </div>

          <div>
            <h3 className={styles.titleInfo}>O фильме</h3>
            <MovieInfoRow title={'Год производства'} value={currentMovie.year} />
            <MovieInfoRow title={'Актеры'} value={currentMovie.actors} />
            <MovieInfoRow title={'Длительность фильма'} value={
              `${currentMovie.runtime} мин. / `+
              `${Math.floor(currentMovie.runtime/60)}:`+
              `${currentMovie.runtime%60 > 9 ? `` : `0`}${currentMovie.runtime%60}`} />
            <MovieInfoRow
              title={'Жанры'}
              value={currentMovie.genres.map((genre, i) => (
                <span key={genre} className={styles.genre}>
                  {genre}{currentMovie.genres.length-1 === i ? '' : ','}
                </span>
              ))}
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className={styles.descrTitle}>Описание</h3>
        <span className={styles.descrText}>{currentMovie.plot}</span>
      </div>
    </section>
  );
};

const MovieInfoRow = ({title, value}) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.rowTitle}>{title}:</div>
      <div className={styles.rowValue}>{value}</div>
    </div>
  );
};

export default MovieInfo;
