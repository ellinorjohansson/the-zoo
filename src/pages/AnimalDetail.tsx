import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { getAnimalStatus } from '../helpers/AnimalHelpers';
import { useParams } from 'react-router';

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
    <div>
      <h2>{animal.name}</h2>
      <img
        src={animal.imageUrl}
        alt={animal.name}
        onError={(e) => (e.currentTarget.src = '')}
        width={300}
      />
      <p>{animal.longDescription}</p>
      <p>Status: {status}</p>
      {animal.lastFed && (
        <p>Senast matad: {new Date(animal.lastFed).toLocaleString('sv-SE')}</p>
      )}
      {showWarning && <p>Djuret behöver snart matas!</p>}
      <button onClick={feedAnimal} disabled={!canFeed}>
        Mata djuret
      </button>
    </div>
  );
};
