import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { getAnimalStatus } from '../helpers/AnimalHelpers';
import { useNavigate, useParams } from 'react-router';
import '../style/animalDetail.scss';
import fallback from '../assets/fallback_imgage.avif';
import { getStatusClass } from '../helpers/StatusHelper';

export const AnimalDetail = () => {
  const { id } = useParams();
  const { animals, dispatch } = useContext(AnimalContext);
  const navigate = useNavigate();

  const animal = animals.find((a) => String(a.id) === id);
  if (!animal) return <p>Kunde inte hämta djuret</p>;

  const status = getAnimalStatus(animal, { overview: false });
  const canFeed = status === 'Hungrig';

  const feedAnimal = () => {
    if (!canFeed) return;
    dispatch({ type: 'FEEDED_ANIMAL', payload: { id: animal.id } });
  };

  return (
    <section className="animal-detail">
      <button className="back-button" onClick={() => navigate('/animals')}>
        <i className="bx bx-arrow-back"></i> Tillbaka
      </button>

      <div className="animal-card">
        <div className="animal-image">
          <img
            src={animal.imageUrl}
            alt={animal.name}
            onError={(e) => (e.currentTarget.src = fallback)}
          />
        </div>

        <div className="animal-info">
          <div className="title-status-wrapper">
            <h2>{animal.name}</h2>
            <div className="status-section">
              <span className={getStatusClass(status)}>{status}</span>
            </div>
          </div>
          <p className="description">{animal.longDescription}</p>

          {animal.lastFed && (
            <p className="last-fed">
              Senast matad: {new Date(animal.lastFed).toLocaleString('sv-SE')}
            </p>
          )}

          <button
            className="feed-button"
            onClick={feedAnimal}
            disabled={!canFeed}
          >
            Mata djuret
          </button>
        </div>
      </div>
    </section>
  );
};
