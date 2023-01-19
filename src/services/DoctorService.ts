import { Doctor } from "../models/Doctor";
import { Result } from "../models/Result";
import { Service } from "./Service";
export class DoctorService extends Service {
    async getDoctorInfo(): Promise<Result<Doctor>> {
        const response = await this.get("/doctors/getInfo")
        const json = await response.json() as Result<Doctor>;

        return json;
    }

    async listAll(): Promise<Doctor[]> {
        const response = await this.get("/doctors/listAll")
        const json = await response.json() as Doctor[];

        return json;
    }
}