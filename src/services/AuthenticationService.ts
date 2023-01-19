import { Doctor } from "../models/Doctor";
import { Result } from "../models/Result";

const AUTHENTICATION_SERVICE = "http://localhost:4002/";

export class AuthenticationService{
    static async login(email: string, password: string): Promise<Result<string>> {
        const response = await fetch(AUTHENTICATION_SERVICE + "login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json() as Result<string>;

        return json;
    }
}