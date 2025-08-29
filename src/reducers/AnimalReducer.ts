import type { Animal } from "../models/Animal";

export interface AnimalState {
  animals: Animal[];
  loading: boolean;
}

export const initialState: AnimalState = {
  animals: [],
  loading: false,
};

export type AnimalAction =
  | { type: "ANIMALS_FETCHING" }
  | { type: "ANIMALS_FETCHED"; payload: Animal[] }
  | { type: "FEEDED_ANIMAL"; payload: { id: string } };

export const animalReducer = (
  state: AnimalState,
  action: AnimalAction
): AnimalState => {
  switch (action.type) {
    case "ANIMALS_FETCHING": {
      return { ...state, loading: true };
    }

    case "ANIMALS_FETCHED": {
      const newState = { ...state, animals: action.payload, loading: false };
      localStorage.setItem("animals", JSON.stringify(newState.animals));
      return newState;
    }

    case "FEEDED_ANIMAL": {
      const updatedAnimals = state.animals.map((a) => {
        if (a.id === action.payload.id) {
          const updated = { ...a, isFed: true, lastFed: new Date().toISOString() };
          localStorage.setItem(`lastFed-${a.id}`, updated.lastFed);
          return updated;
        }
        return a;
      });
      localStorage.setItem("animals", JSON.stringify(updatedAnimals));
      return { ...state, animals: updatedAnimals };
    }

    default:
      return state;
  }
};
