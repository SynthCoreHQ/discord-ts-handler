import { getVar } from "./utils";

export const config = {
    appToken: getVar("APP_TOKEN"),
    appGuildId: getVar("APP_GUILD_ID", "1130803172298985513"),
    appGlobalDeploy: false,
};

export const messages = {
    NO_ARGS: "SORRY! You have not specified enough arguments.",
};
