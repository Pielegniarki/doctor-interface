import { ObjectId } from "./ObjectId";

export type Visit =  {
    _id?: ObjectId,
    patientId: number,
    doctorId: string,
    date: Date
}