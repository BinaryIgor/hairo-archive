import { ModalGuts } from "../../../../model/models/modal-guts";
import { Event, EventType } from "../../types/events";

export class ShowModalEvent implements Event {
    public type = EventType.SHOW_MODAL;

    constructor(
        public data: ModalGuts
    ) { }
}
