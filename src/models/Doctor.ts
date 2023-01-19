import { ObjectId } from "./ObjectId";

export type Doctor =  {
    name: string,
    specialties: ObjectId[]
}