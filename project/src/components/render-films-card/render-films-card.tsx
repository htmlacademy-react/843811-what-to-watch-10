import { Link } from 'react-router-dom';

type RenderFilmsCardProps = {
  name: string,
  previewImage: string,
  id: string,
}

const RenderFilmsCard = ({ name, previewImage, id }: RenderFilmsCardProps) => (
  <article className="small-film-card catalog__films-card">
    <Link className="small-film-card__link" to={`/film/${id}`}>
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        {name}
      </h3>
    </Link>
  </article >
);

export default RenderFilmsCard;
