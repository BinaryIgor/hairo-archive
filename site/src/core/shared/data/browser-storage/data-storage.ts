export interface DataStorage {
    save<T>(key: string, data: T): void
    get<T>(key: string): T | null
    clear(key: string): void
}