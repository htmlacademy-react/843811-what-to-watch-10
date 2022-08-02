
import { sortGenres } from '../../../store/action';
import { useAppDispatch } from '../../../hooks';

type RenderGenresItemProps = {
  genre: string
};

const RenderGenresItem = ({ genre }: RenderGenresItemProps) => {

  const dispatch = useAppDispatch();

  return (
    <li className="catalog__genres-item">
      <a href="#" className="catalog__genres-link" onClick={() => {
        dispatch(sortGenres({ typeSort: genre }));
      }}
      >
        {genre}
      </a>
    </li>
  );
};

export default RenderGenresItem;
