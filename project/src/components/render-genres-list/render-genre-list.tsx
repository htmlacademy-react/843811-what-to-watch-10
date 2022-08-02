import { useAppSelector } from '../../hooks';
import { getFilms } from '../../selectors/get-films-selector';
import RenderGenresItem from './genre-item/render-genres-item';

const RenderGenreList = () => {
  const films = useAppSelector(getFilms);

  const setGenres = new Set(films.map((element) => element.genre));
  const allGenres = ['All genres', ...setGenres];


  return (
    <>
      {allGenres.map((item) => (<RenderGenresItem key={item} genre={item} />))}
    </>
  );
};

export default RenderGenreList;
