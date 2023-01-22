import { ObjectId } from "./ObjectId";

export type Visit =  {
    patientId: number,
    doctorId: ObjectId,
    date: Date,
    closed: boolean
}