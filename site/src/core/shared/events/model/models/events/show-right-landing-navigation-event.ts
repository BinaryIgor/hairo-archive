import { Event, EventType } from "../../types/events";

export class ShowRightLandingNavigationEvent implements Event {
    public type = EventType.SHOW_RIGHT_LANDING_NAVIGATION;
    public data = undefined;
}
