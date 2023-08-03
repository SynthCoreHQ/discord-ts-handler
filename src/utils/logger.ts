export function print(title: string, ...args: string[]): void {
    console.log(`[${title}]`, ...args);
}

export function warn(...args: string[]): void {
    console.warn(`[Warn]`, ...args);
}

export function error(...args: unknown[]): void {
    console.error(`[Error]`, ...args);
}
