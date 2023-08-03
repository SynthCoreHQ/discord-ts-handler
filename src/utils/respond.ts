import { MessageCreateOptions, MessagePayload, TextBasedChannel } from "discord.js";

export async function respond(
    channel: TextBasedChannel,
    options: string | MessagePayload | MessageCreateOptions,
    timeout?: number
) {
    const message = await channel.send(options);

    if (!timeout) return message;

    setTimeout(() => {
        message.delete().catch(() => null);
    }, timeout);
}
