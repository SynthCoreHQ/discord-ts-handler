import { Collection } from "discord.js";
import interactions from "root/interactions";
import { CommandInteraction, event, Events, logger } from "root/utils";

const commandsArray = interactions.map(({ arrayOfInteractions }) => arrayOfInteractions).flat();
const commands = new Collection<string, CommandInteraction>(
    commandsArray.map((interaction) => [interaction.meta.name, interaction])
);

export default event(Events.InteractionCreate, async (print, interaction) => {
    if (interaction.isChatInputCommand()) {
        const command = commands.get(interaction.commandName);

        if (!command) return;

        await interaction.deferReply({ ephemeral: true });

        try {
            await command.callback(interaction.client, interaction);
        } catch (error) {
            logger.error(error);

            if (interaction.deferred) return interaction.followUp("Something went wrong!");

            return interaction.reply("Something went wrong!");
        }
    }
});
