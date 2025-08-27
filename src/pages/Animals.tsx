import { useContext } from 'react';
import { AnimalContext } from '../context/AnimalContext';
import { useAnimalsService } from '../hooks/useAnimalHook';
import { getAnimalStatus } from '../helpers/AnimalHelpers';
import { Link } from 'react-router';
import '../style/animals.scss';
import fallback from '../assets/fallback_imgage.avif';

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  // Get animals from Hook
  useAnimalsService();

  return (
    <>
      <section className="a-start-section">
        <h2 className="animals-header">Välkommen till djursidan!</h2>
        <p className="animals-p">Vänligen, respektera djuren.</p>
      </section>
      <section className="animals">
        <ul>
          {animals.map((animal) => (
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
                  <h2>{animal.name}</h2>
                  <p className="short-desc">{animal.shortDescription}</p>
                  <p
                    className={
                      'status' +
                      (getAnimalStatus(animal, { overview: true }) === 'Hungrig'
                        ? ' hungry'
                        : '') +
                      (getAnimalStatus(animal, { overview: true }) ===
                      'Snart hungrig'
                        ? ' warning'
                        : '')
                    }
                  >
                    Status: {getAnimalStatus(animal, { overview: true })}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
