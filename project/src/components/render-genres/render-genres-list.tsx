
import { sortGenres} from '../../store/action';
import { useAppDispatch } from '../../hooks';

const RenderGenresList = () => {

  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'AllGenres'}));
        }}
        >
          All genres
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Comedy'}));
        }}
        >
          Comedies
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Crime'}));
        }}
        >
          Crime
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Documentary'}));
        }}
        >
          Documentary
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Drama'}));
        }}
        >
          Dramas
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Horror'}));
        }}
        >
          Horror
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Kids and Family'}));
        }}
        >
          Kids &amp; Family
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Romance'}));
        }}
        >
          Romance
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Sci-Fi'}));
        }}
        >
          Sci-Fi
        </a>
      </li>
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link" onClick={() => {
          dispatch(sortGenres({typeSort: 'Thrillers'}));
        }}
        >
          Thrillers
        </a>
      </li>
    </ul>);
};

export default RenderGenresList;
