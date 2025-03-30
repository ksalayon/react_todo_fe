/**
 * A Singleton Service for localStorage related actions
 */
class LocalStorageService {
    private static instance: LocalStorageService;

    static getInstance(): LocalStorageService {
        if (!LocalStorageService.instance) {
            LocalStorageService.instance = new LocalStorageService();
        }
        return LocalStorageService.instance;
    }

    get<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    set<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));
        // Dispatch a custom event for local updates
        window.dispatchEvent(
            new CustomEvent(`localStorage-${key}`, { detail: value }),
        );
    }

    remove(key: string): void {
        localStorage.removeItem(key);
        window.dispatchEvent(
            new CustomEvent(`localStorage-${key}`, { detail: null }),
        );
    }
}

export default LocalStorageService;
