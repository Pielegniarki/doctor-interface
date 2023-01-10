import { Visit } from "../models/Visit";

const VISIT_SERVICE = "http://localhost:4002";

export class VisitService {
    static async fetchAllVisitsOfDoctor(doctorId: number): Promise<Visit[]> {
        const response = await fetch(VISIT_SERVICE + "/visits/getAllOfDoctor?id=" + doctorId);
        const json = await response.json();

        return json.map((object: Visit) => ({ ...object, date: new Date(object.date) }));
    }
}