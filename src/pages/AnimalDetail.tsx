import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { getAnimalStatus } from '../helpers/AnimalHelpers';
import { useParams } from 'react-router';
import '../style/animalDetail.scss';
import fallback from '../assets/fallback_imgage.avif';

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals, dispatch } = useContext(AnimalContext);

  const animal = animals.find((a) => String(a.id) === id);
  if (!animal) return <p>Kunde inte hämta djuret</p>;

  const status = getAnimalStatus(animal, { overview: false });
  const canFeed = status === 'Hungrig';
  const showWarning = status === 'Snart hungrig';

  const feedAnimal = () => {
    if (!canFeed) return;
    dispatch({ type: 'FEED_ANIMAL', payload: { id: animal.id } });
  };

  return (
    <div className="animal-detail">
      <h2>{animal.name}</h2>
      <div className="animal-image">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          onError={(e) => (e.currentTarget.src = fallback)}
          width={300}
        />
      </div>
      <div className="animal-info">
        <p>{animal.longDescription}</p>
        <p className="status">Status: {status}</p>
        {animal.lastFed && (
          <p>
            Senast matad: {new Date(animal.lastFed).toLocaleString('sv-SE')}
          </p>
        )}
        {showWarning && <p>Djuret behöver snart matas!</p>}
      </div>
      <button className="feed-button" onClick={feedAnimal} disabled={!canFeed}>
        Mata djuret
      </button>
    </div>
  );
};
