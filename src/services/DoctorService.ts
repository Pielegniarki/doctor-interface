import { Doctor } from "../models/Doctor";
import { Result } from "../models/Result";

const DOCTOR_SERVICE = "http://localhost:4002/";

export class DoctorService{
    static async getDoctorInfo(doctorId: string): Promise<Result<Doctor>> {
        const response = await fetch(DOCTOR_SERVICE + "doctors/getInfo?id=" + doctorId)
        const json = await response.json() as Result<Doctor>;

        return json;
    }

    static async listAll(): Promise<Doctor[]> {
        const response = await fetch(DOCTOR_SERVICE + "doctors/listAll")
        const json = await response.json() as Doctor[];

        return json;
    }
}