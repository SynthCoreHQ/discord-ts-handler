import { Guild } from "discord.js";
import { messages } from "root/config";
import { ban, command, logger, respond } from "utils";

export default command({ name: "ban", description: "Bans a user permanently" }, async (client, message, args) => {
    if (!args?.length) return respond(message.channel, messages.NO_ARGS, 3000);

    const user = message.mentions.users.first() || (await client.users.fetch(args[0], { cache: true }));
    const reason = message.content.split(args[0])[1].trim() || `Banned by ${message.author.username}`;

    try {
        const response = await ban(message.guild as Guild, user, { reason });

        return await respond(message.channel, response, 5000);
    } catch (error) {
        logger.error(error);
    }
});
