import type { Awaitable, Client, ClientEvents as Events } from "discord.js";
import { logger } from ".";

type IEventName = keyof Events;
type Logger = (...args: unknown[]) => void;

export interface Event<K extends IEventName = IEventName> {
    name: K;
    callback: (log: Logger, ...args: Events[K]) => Awaitable<unknown>;
}

export function event<K extends IEventName>(
    name: K,
    callback: (log: Logger, ...args: Events[K]) => Awaitable<unknown>
): Event<K> {
    return { name, callback };
}

export function registerEvents(client: Client, events: Event[]) {
    for (const { name, callback } of events) {
        client.on(name, (...args) => {
            const log = (...props: unknown[]): void => {
                console.log(`[Event: ${name}]`, ...props);
            };

            try {
                callback(log, ...args);
            } catch (error) {
                logger.error(error);
            }
        });
    }
}
