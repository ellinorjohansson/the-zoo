import type { Animal } from "../models/Animal";

export interface AnimalState {
  animals: Animal[];
}

export const initialState: AnimalState = {
  animals: [],
};

export type AnimalAction =
  | { type: "SET_ANIMALS"; payload: Animal[] }
  | { type: "FEED_ANIMAL"; payload: { id: string } };

export const animalReducer = (
  state: AnimalState,
  action: AnimalAction
): AnimalState => {
  switch (action.type) {
    case "SET_ANIMALS":
      return { ...state, animals: action.payload };
    case "FEED_ANIMAL":
      return {
        ...state,
        animals: state.animals.map(a =>
          a.id === action.payload.id
            ? { ...a, isFed: true, lastFed: new Date().toISOString() }
            : a
        ),
      };
    default:
      return state;
  }
};
