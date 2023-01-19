import { Medicine } from "../models/Medicine";
import { Prescription } from "../models/Prescription";
import { Service } from "./Service";

export class PrescriptionService extends Service {
    static async getAllMedicines(): Promise<Medicine[]> {
        const response = await fetch("/doctor/getMedicinesList")
        const json = await response.json();

        return json;
    }

    static async createPrescription(prescription: Prescription) {
        const response = await fetch("/doctor/createPrescription")
        const json = await response.json();

        return json;
    }
}