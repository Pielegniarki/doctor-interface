import { Service } from "./Service";

export class PatientService extends Service {
    async getPatientInfo(patientId: number): Promise<any> {
        const response = await this.get("/doctor/getInfo?id=" + patientId)
        const json = await response.json();

        return json;
    }
}