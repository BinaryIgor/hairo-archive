import { DataStorage } from "../data/browser-storage/data-storage";
import { keyByValue } from "../functions/functions";
import { DataStorageKey } from "../model/types/data-storage-key";
import { UILanguage, UILanguageWithLanguage } from "../model/types/ui-language";
import { UILanguageStore } from "./ui-language-store";

export class AppUILanguageStore implements UILanguageStore {
    constructor(
        private readonly dataStorage: DataStorage
    ) { }

    get(): UILanguage {
        let appLang = this.dataStorage.get<UILanguage>(DataStorageKey.PRE_APPLICATION_LANGUAGE);

        if (appLang) return appLang as UILanguage;
        else {
            const browserLang = navigator.language.substr(0, 2);
            const appLang: UILanguage = keyByValue(UILanguageWithLanguage, browserLang);
            return appLang || UILanguage.EN;
        }
    }
}
