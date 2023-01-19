import { Medicine } from "./Medicine"

export type Prescription = {
    id?: number,
    doctor: string,
    creationDate: Date,
    medicines: Medicine[],
    description: string,
    patientId: number
}