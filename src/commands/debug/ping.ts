import { command } from "root/utils";

export default command({ name: "ping", description: "A ping command that does nothing." }, (client, message) => {
    message.channel.send("Pong!");
});
