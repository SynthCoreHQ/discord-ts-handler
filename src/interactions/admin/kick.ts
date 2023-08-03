import { Guild, GuildMember, SlashCommandBuilder } from "discord.js";
import { messages } from "../../config";
import { interaction, kick, respond } from "../../utils";

const meta = new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kicks a user.")
    .addUserOption((option) => option.setName("user").setDescription("The user to kick").setRequired(true))
    .addStringOption((options) => options.setName("reason").setDescription("The kick reason.").setRequired(false));

export default interaction(meta, async (client, interaction) => {
    const member = interaction.options.getMember("user");
    const reason = interaction.options.getString("reason", false) ?? `Banned by ${interaction.user.username}`;

    if (!member) return interaction.followUp(messages.NO_ARGS);

    try {
        const response = await kick(interaction.guild as Guild, member as GuildMember, reason);

        return interaction.followUp(response);
    } catch (error) {
        return interaction.followUp("Failed to kick, make sure user is valid & doesn't have a higher role than me!");
    }
});
