import { command } from "root/utils";

export default command({ name: "test", description: "A test command" }, async (client, message) => {
    message.channel.send("Test happens!");
});
