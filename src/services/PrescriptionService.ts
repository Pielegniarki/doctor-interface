import { Medicine } from "../models/Medicine";
import { Prescription } from "../models/Prescription";


const PRESCRIPTION_SERVICE = "http://localhost:4004/";

export class PrescriptionService{

    // dodać wysyłanie tokena doktora, żeby potwierdzić uprawnienia 

    static async getAllMedicines(): Promise<Medicine[]> {
        const response = await fetch(PRESCRIPTION_SERVICE + "doctor/getMedicinesList")
        const json = await response.json();

        return json;
    }


    // musi wysłać id pacjenta? lub jego token? 
    
    static async createPrescription(prescription: Prescription) {
        const response = await fetch(PRESCRIPTION_SERVICE + "doctor/createPrescription")
        const json = await response.json();

        return json;
    }
}