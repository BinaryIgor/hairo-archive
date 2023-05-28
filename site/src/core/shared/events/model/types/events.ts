
import { ApplicationLanguageChangeEvent } from "../models/events/application-language-change-event";
import { ShowModalEvent } from "../models/events/show-modal-event";
import { ShowRightLandingNavigationEvent } from "../models/events/show-right-landing-navigation-event";

export enum EventType {
    APPLICATION_LANGUAGE_CHANGE = 'APPLICATION_LANGUAGE_CHANGE',
    SHOW_MODAL = 'SHOW_MODAL',
    SHOW_RIGHT_LANDING_NAVIGATION = 'SHOW_RIGHT_LANDING_NAVIGATION',
    SHOW_NARROW_LANDING_NAVIGATION = 'SHOW_NARROW_LANDING_NAVIGATION',
};

export interface Event { type: EventType, data: any }

export type Events =
    ShowModalEvent |
    ShowRightLandingNavigationEvent |
    ApplicationLanguageChangeEvent
