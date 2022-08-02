import { useAppSelector } from '../../hooks';
import { getFilms, getGenre } from '../../selectors/get-films-selector';
import RenderFilmsCard from './render-films-card/render-films-card';

const RenderFilmsList = () => {
  const films = useAppSelector(getFilms);
  const genre = useAppSelector(getGenre);

  return (
    <>
      {
        films
          .filter((item) => item.genre === genre || genre === 'All genres')
          .map((item) => (<RenderFilmsCard key={item.id} {...item} />))
      }
    </>
  );
};

export default RenderFilmsList;
