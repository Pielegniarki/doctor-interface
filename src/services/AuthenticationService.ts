import { Service } from "./Service";

type Token = {token: string | null};

export class AuthenticationService extends Service {
    async login(email: string, password: string): Promise<Token> {
        const response = await this.post("/login", {
            body: JSON.stringify({email, password})
        })
        const json = await response.json() as Token;

        return json;
    }
}