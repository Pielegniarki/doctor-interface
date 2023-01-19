import { ApiReturned, Identifiable } from "./types";
import { Visit } from "../models/Visit";
import { Service } from "./Service";


export class VisitService extends Service {
    async fetchAllVisits(): Promise<Identifiable<Visit>[]> {
        const response = await this.get("/visits/getAllOfDoctor");
        const json = await response.json() as ApiReturned<Identifiable<Visit>>[];

        return json.map(object => ({ ...object, date: new Date(object.date) }));
    }
}