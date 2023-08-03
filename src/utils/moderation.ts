import { BanOptions, Guild, GuildMember, User } from "discord.js";

export async function ban(guild: Guild, user: User, options?: BanOptions): Promise<string> {
    if (user) {
        await guild.members.ban(user, options);

        return `${user.username} has been banned with reason \`${options?.reason}\``;
    }

    return "User not found.";
}

export async function kick(guild: Guild, user: GuildMember | undefined, reason: string): Promise<string> {
    if (user) {
        if (!user.manageable || !user.kickable) return `SORRY! I cannot kick that user.`;

        await guild.members.kick(user, reason);

        return `${user.displayName} has been kicked with reason \`${reason}\``;
    }

    return "User not found.";
}
