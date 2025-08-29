import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { useAnimalsService } from '../hooks/useAnimalHook';
import { getAnimalStatus } from '../helpers/AnimalHelpers';
import { Link } from 'react-router';
import '../style/animals.scss';
import fallback from '../assets/fallback_imgage.avif';
import { getStatusClass } from '../helpers/StatusHelper';

export const Animals = () => {
  const { animals, loading } = useContext(AnimalContext);

  // Get animals from Hook
  useAnimalsService();

  return (
    <>
      <section className="a-start-section">
        <h2 className="animals-header">Välkommen till djursidan!</h2>
        <p className="animals-p">Vänligen, respektera djuren.</p>
      </section>
      <section className="animals">
        {loading ? (
          <div className="loading">
            <h2>Laddar djur...</h2>
          </div>
        ) : (
          <ul>
            {animals.map((animal) => {
              const status = getAnimalStatus(animal, { overview: true });
              return (
                <li key={animal.id}>
                  <Link to={`/animals/${animal.id}`}>
                    <div className="image-container">
                      <img
                        src={animal.imageUrl}
                        alt={animal.name}
                        onError={(e) => (e.currentTarget.src = fallback)}
                        width={200}
                      />
                    </div>
                    <div className="animal-info">
                      <h2 className="animal-name">{animal.name}</h2>
                      <p className="short-desc">{animal.shortDescription}</p>
                      <span className={getStatusClass(status)}>
                        Status: {status}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
};
