import { ApiReturned, Identifiable } from "./types";
import { Visit } from "../models/Visit";
import { Service } from "./Service";


export class VisitService extends Service {
    async fetchAllVisits(): Promise<Identifiable<Visit>[]> {
        const response = await this.get("/visits/getAllOfDoctor");
        const json = await response.json() as ApiReturned<Identifiable<Visit>>[];

        return json.map(object => ({ ...object, date: new Date(object.date) }));
    }

    async close(visitId: string): Promise<Visit[]> {
        const response = await this.post("/visits/closeVisit", { body: JSON.stringify({visitId}) });
        const json = await response.json();

        return json.map((object: Visit) => ({ ...object, date: new Date(object.date) }));
    }
}