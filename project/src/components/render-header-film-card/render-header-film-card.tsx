import { Link } from 'react-router-dom';

type RenderHeaderFillmCardProps = {
  name: string,
  genre: string,
  released: number,
  posterImage: string,
  backgroundImage: string,
  id: string
}

const RenderHeaderFillmCard = ({ name, genre, released, posterImage, backgroundImage, id }: RenderHeaderFillmCardProps) => (
  <section className="film-card">
    <div className="film-card__bg">
      <img
        src={backgroundImage}
        alt="The Grand Budapest Hotel"
      />
    </div>
    <h1 className="visually-hidden">WTW</h1>
    <header className="page-header film-card__head">
      <div className="logo">
        <a className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>
      <div className="user-block">
        <Link to="/sign-in" className="user-block__link">
          Sign in
        </Link>
      </div>
    </header>
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={posterImage}
            alt="The Grand Budapest Hotel poster"
            width={218}
            height={327}
          />
        </div>
        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>
          <div className="film-card__buttons">
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <Link to={`player/${id}`}>
                <span>Play</span>
              </Link>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width={19} height={20}>
                <use xlinkHref="#add" />
              </svg>
              <span>My list</span>
              <span className="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default RenderHeaderFillmCard;
