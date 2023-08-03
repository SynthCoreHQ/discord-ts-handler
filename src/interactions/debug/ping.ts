import { SlashCommandBuilder, interaction } from "../../utils";

const meta = new SlashCommandBuilder().setName("ping").setDescription("A ping command that does nothing.");

export default interaction(meta, (client, interaction) => {
    return interaction.followUp("Pong!");
});
