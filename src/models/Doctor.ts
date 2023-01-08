import { ObjectId } from "./ObjectId";

export type Doctor =  {
    _id?: ObjectId,
    name: string,
    specialties: ObjectId[]
}