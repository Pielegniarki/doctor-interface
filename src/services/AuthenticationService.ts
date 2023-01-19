import { Doctor } from "../models/Doctor";
import { Result } from "../models/Result";
import { Service } from "./Service";

const AUTHENTICATION_SERVICE = "http://localhost:4002/";

type Token = {token: string | null};

export class AuthenticationService extends Service {
    async login(email: string, password: string): Promise<Token> {
        const response = await this.post("/login", {
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json() as Token;

        return json;
    }
}