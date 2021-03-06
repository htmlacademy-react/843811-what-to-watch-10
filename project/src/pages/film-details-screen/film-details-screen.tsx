import { Navigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { FilmMock } from '../../types/film-type-mock';

type FilmDetailsScreenProps = {
  films: FilmMock[];
}

const FilmDetailsScreen = ({ films }: FilmDetailsScreenProps) => {
  const { id } = useParams();
  const film = films.find((element) => element.id === id);
  const style = { background: film?.backgroundColor };

  if (!film) {
    return < Navigate to='*' />;
  }

  return (
    <>
      <section className="film-card film-card--full" style={style}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={film?.backgroundImage}
              alt={film?.name}
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width={63}
                    height={63}
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.released}</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button">
                  <svg viewBox="0 0 18 14" width={18} height={14}>
                    <use xlinkHref="#in-list" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>
                <Link to={`/film/${id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film?.posterImage}
                alt={film?.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                      Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{film?.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{film?.scoresCount}</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>{film?.description}</p>
                <p className="film-card__director">
                  <strong>Director: {film?.director}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>
                    Starring:
                    {film?.starring}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content"></div>
    </>
  );
};

export default FilmDetailsScreen;
