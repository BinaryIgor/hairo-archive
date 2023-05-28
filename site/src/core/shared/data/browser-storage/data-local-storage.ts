import { DataStorage } from "./data-storage";

// Does not work with dates and other browser specific objects(get -> JSON.parse will return strings instead of dates etc.)
export class DataLocalStorage implements DataStorage {
    save<T>(key: string, data: T): void {
        localStorage.setItem(key, JSON.stringify(data));
    }

    get<T>(key: string): T | null {
        const data = localStorage.getItem(key);
        const parsedData = data ? JSON.parse(data) : null;
        return parsedData || null;
    }

    clear(key: string): void {
        localStorage.removeItem(key);
    }
}
