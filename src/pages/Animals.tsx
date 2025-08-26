import { useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import { useAnimalsService } from "../hooks/useAnimalHook";
import { getAnimalStatus } from "../helpers/AnimalHelpers";
import { Link } from "react-router";

export const Animals = () => {
  const { animals } = useContext(AnimalContext);

  // Get animals from Hook
  useAnimalsService();

  return (
    <div>
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
                <h3>{animal.name}</h3>
                <p>{animal.shortDescription}</p>
                <p>Status: {getAnimalStatus(animal, { overview: true })}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
