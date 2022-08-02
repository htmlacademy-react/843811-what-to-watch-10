// import RenderFilmsCard from '../../components/render-films-card/render-films-card';
import RenderHeaderFillmCard from '../../components/render-header-film-card/render-header-film-card';
// import RenderGenresList from '../../components/render-genres-list/genre-item/render-genres-item';
// import { useAppSelector } from '../../hooks';
// import { getFilms } from '../../selectors/get-films-selector';
import RenderFilmsList from '../../components/render-films-list.tsx/render-films-list';
import RenderGenreList from '../../components/render-genres-list/render-genre-list';

// const films = useAppSelector(getFilms);

// const setGenres = new Set(films.map((element) => element.genre));
// const allGenres = ['All genres', ...setGenres];
const MainScreen = () => (
  <>
    <RenderHeaderFillmCard />
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <ul className="catalog__genres-list">
          {
            <RenderGenreList />
          }
        </ul>
        <div className="catalog__films-list">
          {<RenderFilmsList />}
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">
            Show more
          </button>
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </>
);

export default MainScreen;
