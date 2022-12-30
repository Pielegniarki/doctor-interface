import { Rating } from "./Rating";
import { Specialty } from "./Specialty";

export type Doctor = {
    id: number,
    name: string,
    specialties: Specialty[],
    ratings: Rating[]
}