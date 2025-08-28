import { useEffect, useContext } from "react";
import { AnimalContext } from "../context/AnimalContext";
import type { Animal } from "../models/Animal";

export const useAnimalsService = () => {
  const { animals, dispatch } = useContext(AnimalContext);

  useEffect(() => {
    if (animals.length > 0) return; 

    const fetchAnimals = async () => {
      try {
        const res = await fetch("https://animals.azurewebsites.net/api/animals");
        const data: Animal[] = await res.json();

        // localStorage
        const animalsWithLocalFed = data.map(animal => {
          const localLastFed = localStorage.getItem(`lastFed-${animal.id}`);
          return localLastFed
            ? { ...animal, lastFed: localLastFed }
            : animal;
        });

        dispatch({ type: "SET_ANIMALS", payload: animalsWithLocalFed });
      } catch (err) {
        console.error("Kunde inte hämta djuren", err);
      }
    };

    fetchAnimals();
  }, [animals, dispatch]);
};