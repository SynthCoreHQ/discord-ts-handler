import { config } from "dotenv";
import { resolve } from "path";

const EnvFile = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";

config({ path: resolve(process.cwd(), EnvFile) });

export function getVar(name: string, fallback?: string): string {
    const variable = process.env[name] || fallback;

    if (variable === undefined)
        throw new Error(`Variable ${name} is not set yet.`);

    return variable;
}
