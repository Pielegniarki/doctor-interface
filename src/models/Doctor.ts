import { ObjectId } from "./ObjectID";
import { Rating } from "./Rating";
import { Specialty } from "./Specialty";

export type Doctor =  {
    _id?: ObjectId,
    name: string,
    specialties: ObjectId[]
}