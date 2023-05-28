import { ApplicationLanguage } from "../../../../model/types/application-language";
import { EventType } from "../../types/events";

export class ApplicationLanguageChangeEvent {
    public type = EventType.APPLICATION_LANGUAGE_CHANGE

    constructor(
        public data: ApplicationLanguage
    ) { }
}
