import { Client as DiscordClient } from "discord.js";
import { config } from "root/config";
import events from "root/events";
import { registerEvents } from "root/utils";

const ochako = new DiscordClient({ intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"] });

registerEvents(ochako, events);

ochako.login(config.appToken);
