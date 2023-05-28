// imports from app module
import { Modals } from '../core/shared/modals/modals';
import { eventBus } from '../core/shared/events/event-bus';
import { AppUILanguageStore } from '../core/shared/stores/app-ui-language-store';
import { DataLocalStorage } from '../core/shared/data/browser-storage/data-local-storage';

export const dataLocalStorage = new DataLocalStorage();
export const uiLangStore = new AppUILanguageStore(dataLocalStorage);

export const modals = new Modals(uiLangStore.get(), eventBus);
