import { ChatInterface } from "../interfaces/ChatInterface";

export default class myStorage {
    private store: Storage;

    constructor() {
        this.store = window.localStorage;
    }

    get(key: string): string | null {
        return this.store.getItem(key);
    }

    set(key: string, value: ChatInterface): void {
        this.store.setItem(key, JSON.stringify(value));
    }

    remove(key: string): void {
        this.store.removeItem(key);
    }

    getChats(): string[] {
        const chats: string[] = [];
        for (let i = 0; i < this.store.length; i++) {
            const key = this.store.key(i);
            if (key) {
                chats.push(this.store.getItem(key) || "");
            }
        }
        return chats;
    }

    clear(): void {
        this.store.clear();
    }
}