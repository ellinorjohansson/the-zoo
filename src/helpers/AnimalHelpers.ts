import type { Animal } from "../models/Animal";

export type AnimalStatus = "Mätt" | "Hungrig" | "Desperat" | "Snart hungrig";

interface StatusOptions {
  overview?: boolean; // true = overview, false = detail
}

export const getAnimalStatus = (
  animal: Animal,
  options?: StatusOptions
): AnimalStatus => {
  const now = Date.now();
  const lastFed = animal.lastFed ? new Date(animal.lastFed).getTime() : 0;
  const hoursSinceFed = (now - lastFed) / 1000 / 60 / 60;

  if (options?.overview) {
    // Översiktssidan
    if (hoursSinceFed >= 5) return "Hungrig"; 
    if (hoursSinceFed >= 3) return "Snart hungrig";
    return "Mätt";
  } else {
    // Detaljsidan
    if (hoursSinceFed >= 4) return "Hungrig";
    if (hoursSinceFed >= 3) return "Snart hungrig";
    return "Mätt";
  }
};

