import { Medicine } from "./Medicine"

export type Prescription = {
    id?: number,
    medicine: Medicine[],
    description: string,
    doctor: string,
    creationDate: Date,
    patientId: number
}