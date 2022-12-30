import { Doctor } from "../models/Doctor";

export class DoctorService{
    async getDoctorInfo(doctorId: number): Promise<Doctor> {
        const response = await fetch("doctor.ip/getInfo?id=" + doctorId)
        const json = await response.json();

        return json;
    }
}