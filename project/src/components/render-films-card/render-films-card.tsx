import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

type RenderFilmsCardProps = {
  name: string,
  previewImage: string,
  id: string,
  previewVideoLink: string
}

const RenderFilmsCard = ({ name, previewImage, id, previewVideoLink }: RenderFilmsCardProps) => {
  const [isPlayingVideo, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }

    videoRef.current.addEventListener('loadeddata', () => setIsLoading(false));


    if (isPlayingVideo && !isLoading) {
      videoRef.current.play();
      videoRef.current.src = previewVideoLink;
      return;
    }

    videoRef.current.src = '';
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  });

  return (
    <article className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`/film/${id}`}>
        <div className="small-film-card__image"
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        >
          <video
            src={previewVideoLink}
            poster={previewImage}
            loop
            muted
            autoPlay
            width={280}
            height={175}
            ref={videoRef}
          >
          </video>
        </div>
        <h3 className="small-film-card__title">
          {name}
        </h3>
      </Link>
    </article >
  );
};

export default RenderFilmsCard;
