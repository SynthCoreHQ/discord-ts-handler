import { Events, event } from "root/utils";

export default event(Events.ClientReady, async (print, client) => {
    print(client.user.username, "is now online!");
});
