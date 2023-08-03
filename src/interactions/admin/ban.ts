import { Guild } from "discord.js";
import { SlashCommandBuilder, ban, interaction, logger } from "../../utils";

const meta = new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Bans a user permanently")
    .addUserOption((option) => option.setName("user").setDescription("The user to ban").setRequired(true))
    .addStringOption((options) => options.setName("reason").setDescription("The ban reason.").setRequired(false));

export default interaction(meta, async (client, interaction) => {
    const user = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason", false) ?? `Banned by ${interaction.user.username}`;

    try {
        const response = await ban(interaction.guild as Guild, user, { reason });

        return interaction.followUp(response);
    } catch (error) {
        return interaction.followUp("Failed to kick, make sure user is valid & doesn't have a higher role than me!");
    }
});
