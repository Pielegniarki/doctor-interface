import { AuthenticationService } from "./AuthenticationService";
import { DoctorService } from "./DoctorService";

export const services = {
    doctor: "http://localhost:4000",
    patient: "http://localhost:4001",
    visit: "http://localhost:4002",
    authentication: "http://localhost:4003",
    prescription: "http://localhost:4004",
} as const;

export abstract class Service {
    private token: string | null;
    private url: typeof services[keyof typeof services];

    constructor(token: string | null, serviceType: keyof typeof services) {
        this.url = services[serviceType];
        this.token = token;
    }

    private generateHeaders() {
        const headers: Record<string, string> = {};

        if(this.token) {
            headers["X-PLG-Token"] = this.token;
        }

        return headers
    }

    private request(endpoint: string, options?: RequestInit): Promise<Response> {
        return fetch(this.url + endpoint, {
            ...options,
            headers: {...this.generateHeaders(), ...options?.headers}
        });
    }

    get(url: string, options?: Omit<RequestInit, "method">): Promise<Response> {
        return this.request(url, {
            ...options,
            method: "GET"
        });
    }

    post(url: string, options?: Omit<RequestInit, "method">): Promise<Response> {
        return this.request(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers
            },
            method: "POST"
        });
    }

    put(url: string, options?: Omit<RequestInit, "method">): Promise<Response> {
        return this.request(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers
            },
            method: "PUT"
        });
    }

    delete(url: string, options?: Omit<RequestInit, "method">): Promise<Response> {
        return this.request(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...options?.headers
            },
            method: "DELETE"
        });
    }

}