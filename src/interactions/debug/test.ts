import { SlashCommandBuilder, interaction } from "../../utils";

const meta = new SlashCommandBuilder().setName("test").setDescription("A test command");

export default interaction(meta, async (client, interaction) => {
    return interaction.followUp("Test happens!");
});
