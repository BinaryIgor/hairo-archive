import { EventType, Events } from "./model/types/events";
import { Subscriber } from "./model/types/subscriber";

type EventHandler = (data?: any) => void;

export class EventBus {
    events = new Map<string, EventHandler>();

    on(event: EventType, subscriber: Subscriber, handler: EventHandler): void {
        this.events.set(this.key(event, subscriber), handler);
    }

    emit(event: Events, subscribers: Subscriber[]): void {
        for (let subscriber of subscribers) {
            if (this.events.get(this.key(event.type, subscriber))) {
                this.events.get(this.key(event.type, subscriber))?.(event.data);
            }
        }
    }

    remove(event: EventType, subscriber: Subscriber) {
        this.events.delete(this.key(event, subscriber));
    }

    clearAll(): void {
        this.events.clear();
    }

    key(event: EventType, subscriber: Subscriber): string {
        return `${event}/${subscriber}`;
    }
}

export const eventBus = new EventBus();
