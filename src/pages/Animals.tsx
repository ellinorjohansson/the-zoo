import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import { useAnimalsService } from "../hooks/useAnimalHook";
import { getAnimalStatus } from "../helpers/AnimalHelpers";
import { Link } from "react-router";
import '../style/animals.scss';

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  // Get animals from Hook
  useAnimalsService();

  return (
    <div className="animals">
      <ul>
        {animals.map(animal => (
          <li key={animal.id}>
            <Link to={`/animals/${animal.id}`}>
              <div>
                <img
                  src={animal.imageUrl}
                  alt={animal.name}
                  onError={e => (e.currentTarget.src = "")}
                  width={200}
                />
                <h2>{animal.name}</h2>
                <p>{animal.shortDescription}</p>
                <p className="status">Status: {getAnimalStatus(animal, { overview: true })}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
