import { Client, MessageMentions } from "discord.js";

export async function resolveUsers(client: Client, search: string, exact: boolean = false) {
    const users = [];
    const userPattern = search.match(MessageMentions.UsersPattern);

    if (userPattern) {
        const id = userPattern[1];
        const fetched = await client.users.fetch(id, { cache: true }).catch(() => {});

        if (fetched) {
            users.push(fetched);
            return users;
        }
    }

    const matchingName = client.users.cache.filter((user) => user.username === search);
    if (exact && matchingName.size === 1) users.push(matchingName.first());
    else matchingName.forEach((match) => users.push(match));

    if (!exact) {
        client.users.cache
            .filter(
                (x) =>
                    x.username === search ||
                    x.username.toLowerCase().includes(search.toLowerCase()) ||
                    x.tag.toLowerCase().includes(search.toLowerCase())
            )
            .forEach((user) => users.push(user));
    }

    return users;
}
