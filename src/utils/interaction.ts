import { Awaitable, ChatInputCommandInteraction, Client, SlashCommandBuilder } from "discord.js";

export type MetaData = SlashCommandBuilder | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;

export type InteractionCallback = (client: Client, interaction: ChatInputCommandInteraction) => Awaitable<unknown>;

export interface CommandInteraction {
    meta: MetaData;
    callback: InteractionCallback;
}

export interface CommandInteractions {
    name: string;
    arrayOfInteractions: CommandInteraction[];
}

export function interaction(meta: MetaData, callback: InteractionCallback): CommandInteraction {
    return { meta, callback };
}

export function interactions(name: string, arrayOfInteractions: CommandInteraction[]): CommandInteractions {
    return { name, arrayOfInteractions };
}
