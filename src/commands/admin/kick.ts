import { Guild, GuildMember, hyperlink } from "discord.js";
import { messages } from "root/config";
import { command, kick, logger, respond } from "utils";

export default command({ name: "kick", description: "Kicks a user permanently" }, async (client, message, args) => {
    const { guild, mentions } = message;

    if (!args?.length) return respond(message.channel, messages.NO_ARGS, 3000);

    const member = mentions.members?.first() || (await guild?.members.fetch({ user: args[0] }).catch(() => null));
    const reason = message.content.split(args[0])[1].trim() || `Kicked by ${message.author.username}`;

    try {
        const response = await kick(guild as Guild, member as GuildMember, reason);

        return await respond(message.channel, response, 5000);
    } catch (error) {
        await respond(
            message.channel,
            [
                "Failed to kick user, Possible reason were:",
                `1. The user's role is higher than mine.)}`,
                "2. The user is not in the server.",
            ].join("\n"),
            10000
        );
    }
});
