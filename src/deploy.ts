import { APIUser, REST, Routes } from "discord.js";
import interactions from "./interactions";
import { config } from "./config";
import { logger } from "./utils";

const body = interactions.map(({ arrayOfInteractions }) => arrayOfInteractions.map(({ meta }) => meta)).flat();
const rest = new REST({ version: "10" }).setToken(config.appToken);

async function deploy(global: boolean) {
    const client = (await rest.get(Routes.user())) as APIUser;
    const route = global
        ? Routes.applicationCommands(client.id)
        : Routes.applicationGuildCommands(client.id, config.appGuildId);

    await rest.put(route, { body });
}

deploy(config.appGlobalDeploy).catch((error) => logger.error(error));
