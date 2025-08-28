import type { Animal } from "../models/Animal";

export interface AnimalState {
  animals: Animal[];
}

export const initialState: AnimalState = {
  animals: [],
};

export type AnimalAction =
  | { type: "SET_ANIMALS"; payload: Animal[] }
  | { type: "FEED_ANIMAL"; payload: { id: string } 
};

export const animalReducer = (
  state: AnimalState,
  action: AnimalAction
): AnimalState => {
  switch (action.type) {
    case "SET_ANIMALS": {
      const newState = { ...state, animals: action.payload };
      localStorage.setItem("animals", JSON.stringify(newState.animals));
      return newState;
    }

    case "FEED_ANIMAL": {
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
