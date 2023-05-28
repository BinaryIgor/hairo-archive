import { ModalGuts } from '../model/models/modal-guts';
import { valueFromKey } from '../../../app/i18n/translations';
import { EventBus } from '../events/event-bus';
import { ShowModalEvent } from '../events/model/models/events/show-modal-event';
import { Subscriber } from '../events/model/types/subscriber';
import { ApplicationLanguage } from '../model/types/application-language';

export class Modals {
    constructor(
        private readonly appLang: ApplicationLanguage,
        private readonly eventBus: EventBus
    ) { }

    async showErrorModal(modalGuts: ModalGuts): Promise<void> {
        let translatedErrors: string[] = [];
        for (let errorKey of modalGuts.texts) {
            translatedErrors.push(await valueFromKey(errorKey, this.appLang))
        }
        modalGuts.texts = translatedErrors;
        modalGuts.errors = true;
        this.eventBus.emit(new ShowModalEvent(modalGuts), [Subscriber.MODAL]);
    }

    showSuccess(modalTitle: string, texts: string[]) {
        this.showModal(ModalGuts.successModalGuts({
            title: modalTitle,
            texts: texts,
        }));
    }

    showModal(modalGuts: ModalGuts): void {
        this.eventBus.emit(new ShowModalEvent(modalGuts), [Subscriber.MODAL]);
    }
}
