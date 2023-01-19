import { ApiReturned, Identifiable } from "./types";
import { Visit } from "../models/Visit";

const VISIT_SERVICE = "http://localhost:4002";

export class VisitService {
    static async fetchAllVisitsOfDoctor(doctorId: string): Promise<Identifiable<Visit>[]> {
        const response = await fetch(VISIT_SERVICE + "/visits/getAllOfDoctor?id=" + doctorId);
        const json = await response.json() as ApiReturned<Identifiable<Visit>>[];

        return json.map(object => ({ ...object, date: new Date(object.date) }));
    }
}