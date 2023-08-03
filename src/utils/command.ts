import { Awaitable, Client, Message } from "discord.js";

export interface CommandMeta {
    name: string;
    description: string;
}

export type CommandCallback = (client: Client, message: Message, args?: string[]) => Awaitable<unknown>;

export interface Command {
    meta: CommandMeta;
    callback: CommandCallback;
}

export interface CommandCategory {
    name: string;
    commands: Command[];
}

export function command(meta: CommandMeta, callback: CommandCallback): Command {
    return { meta, callback };
}

export function category(name: string, commands: Command[]): CommandCategory {
    return { name, commands };
}
