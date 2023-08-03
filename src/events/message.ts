import { Collection } from "discord.js";
import categories from "root/commands";
import { Command, Events, event, logger } from "root/utils";

const prefix = "o!";
const commandsArray = categories.map(({ commands }) => commands).flat();
const commands = new Collection<string, Command>(commandsArray.map((command) => [command.meta.name, command]));

export default event(Events.MessageCreate, async (print, message) => {
    if (message.author.bot || !message.guild) return;

    const mention = RegExp(`^<@!?${message.client.user.id}>$`);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const messageCommand = args.shift()?.toLowerCase();

    if (!messageCommand) return;

    const command = commands.get(messageCommand);

    if (!command) return;

    try {
        await message.delete().catch(null);
        await message.channel.sendTyping();
        await command.callback(message.client, message, args);
    } catch (error) {
        logger.error(error);
    }
});
